# TOP100-1103 — "Tarihin en önemli 100 devleti" kronoloji × harita denetimi · ÖZET

Ölçüm: **UMIT**, worktree `umit-1103-top100`, taban `origin/main` **01d545bdb**, 3-4 Kasım 2026 gecesi.
Yürüten: UMIT SALI (koordinatör EMRELİC 1 KASIM'ın görevi; Emre'nin gece yetki devriyle). Alt ajanlar Sonnet, gece en çok 3.
**Salt denetim: hiçbir veri dosyasına yazılmadı.** Düzeltmeleri KASA uygular. Dal: `umit-1103-top100` (main'e push yok).
Teyit kanalı: Iranica/Oxford Reference → EMRELİC 1 KASIM tarayıcısı; JSTOR → HAVVA SALI tarayıcısı. Okunan cevaplar
ilgili dosyalara "teyidi" başlığıyla işlendi. Değişmez 2 ölçütü: `denetle.degismez2(..., yer_sarti=True)` (2s ile aynı).

---

## 1 · EN ÜSTTE — atlas geneli yapısal bulgular (öncelik sırasıyla)

### 1.1 `s:` dönemlerinde künye id'si yerine harita anahtarı — **1042 dönem** · [EK-harita-anahtari.md](EK-harita-anahtari.md)
CLAUDE.md veri kuralı ihlali (koordinatör: en yüksek öncelik). 22 anahtar: `suleyman-celebi` 247 · `avusturya` 188 (habsburg) ·
`musa-celebi` 178 · `mehmed-celebi` 140 · `isa-celebi` 63 · `sardinya` 39 · `sirbistan` 35 (4 künye paylaşıyor) · `yemen` 28 ·
`ceneviz` 22 · `suud` 21 (4 künye) · … Sınıf: **TEK 841** doğrudan yeniden yazılır · **BÖL 116** künye sınırında bölünmeli
(isa-celebi'nin tamamı) · **YOK 89** (musa-celebi — fetret-musa ömrü dışında hayalet dönem). Motorun bu anahtarları nasıl
boyadığını KASA ölçecek. (TOP100 ölçeri bunu parti 5'te fark etti; Habsburg 1 → 126 yerleşim.)

### 1.2 1923-10-29 eski ufuk izi — **253 Türkiye dışı kırılma** · [EK-1923-ufuk.md](EK-1923-ufuk.md)
Atlasın eski ufku Cumhuriyet'in ilânıydı; ufuk 2000'e genişletilirken dönemler bu güne takılı kalmış: **61** yapay bölünme
(Portekiz Angolası, Mozambik, Japon Kore…) · **14** ardılsız (Yugoslavya, Bulgaristan — sonrası delik olabilir) · **178** yanlış
günde sahip değişimi (Fas → Fransız himayesi 33 yerleşim: himaye 1912'de başladı; İngiliz Burması 27, İngiliz Sudanı 16, Hicaz
Krallığı 14, Amerikan Filipinleri 14, Oniki Ada 13 …).

### 1.3 `almanya` tek künye 962-1945 · [32-almanya-kutsal-roma.md](32-almanya-kutsal-roma.md) — **Emre kararı**
Kutsal Roma + Alman Konfederasyonu + Alman İmparatorluğu + Weimar + Nazi tek künyede. Ardıl künyelere bölünme önerisi dosyada
(tavan + renk = tuz işi). İlgili: 95-prusya (Alman İmparatorluğu ayrı künye yok; 1866 ilhakları Kassel/Frankfurt almanya'da).

### 1.4 Mükerrer künyeler — **20 grup** · [EK-mukerrer-kunye.md](EK-mukerrer-kunye.md)
xin · Fransız Fas · Fransız Somalisi · Xiongnu · Hitit (eski/imp → hitit) · Xiao Xian Liang · Tibet (tubo-) · Uygur · Ganzhou Uygur ·
Hazar · Moğolistan Hanlığı · Chimú · Gana · Kevkev · Mayapán · Kuş/Meroe · Brandenburg · Töton · Hollanda sömürge künyeleri.
Her biri için önerilen kalıcı id (haritada/kronolojide kullanılan; eşitse kaynaklı uçlu olan). `renkler.py` girdileri KALIR (tuz).

### 1.5 Takvim — **1582 sonrası Jülyen günler** · [EK-rus-julyen.md](EK-rus-julyen.md) · [EK-julyen-diger.md](EK-julyen-diger.md)
**KARAR (koordinatör; Emre onaylar):** 1582-10-15 öncesi kaynaktaki gün kalır (toplu çevirme yok); sonrası Gregoryen; geç
geçenler çevrilir + `ic_not` beyanı. `arac/gun.py` başlığı ("proleptik Gregoryen, 1582 öncesi de") bu kuralla **çelişir** —
değiştirilmedi, KASA'ya not, kural metni Emre'ye.
- Rusya (1582-1918): **24 HATA · 46 şüpheli · 25 temiz** — çoğu `kronoloji_rusya.js`; çoğunun atlasta doğru günlü çifti var
  (Poltava 06-27/07-08, İmparatorluk 1721-10-22/11-02 — veride doğrulandı). Azak 1696 TDV cümlesine bağlı.
- Öteki geç geçenler (EK-julyen-diger.md; olay satırı / yerleşim ucu A-HATA sayıları): **İngiltere+koloniler 45 / 5**
  (`kronoloji_ingiltere.js`'te 40 satır Jülyen `t` — dosya başlığı bunu kendisi söylüyor; Şanlı Devrim 1688-11-05 → 11-15
  veride doğrulandı; Birleşme Yasaları 1707-05-01 → 05-12, 42 yerleşim ucu) · **İsveç 9 / 5** (Lützen, Roskilde, Brömsebro,
  Kopenhag 1660, Åbo; Nystad'ın Jülyen günü 1721-08-30 8 Baltık ucunda) · Hollanda 1 · Danimarka/Alman 0 / 2 ·
  **Yunanistan 0 / 5** (Ege adaları 1912 uçları 13 gün geride; İyon adaları 1864) · Balkan olay satırları temiz. Şüpheli en
  yüklü: **Mora İsyanı 1821-03-25** (34 yerleşim ucu; Jülyen gelenek günü, Gregoryen 6 Nisan). Rumî: kanıtlanmış vaka yok.

### 1.6 Kronoloji konvansiyonu (antik) — **KARAR (koordinatör; Emre onaylar)**
Mısır → Shaw (ed.), *Oxford History of Ancient Egypt* (2000) · Mezopotamya → Orta Kronoloji (Ur III: Frayne RIME 3/2) ·
Hitit → Bryce 2005. Karışık kayıtlar: 20 Mısır YK (TDV -1569 / Shaw -1549 çift madde) · 35 Akkad (geleneksel 2334-2154 ↔
ARCANE 2324-2142) · 66 Mısır EK (Shaw/Met/Treccani üçü) · 67 Ur III (Frayne ↔ ARCANE) · 37 Hitit (çöküş dört değer → -1199) ·
19 Yeni Asur (910/608 ↔ TDV 883/612 beyan) · 91 Kuş (25. Hanedan Shaw değerleri ajan hafızasından — doğrulanmadı).

### 1.7 Değişmez 2 evreni dışında kalan kronoloji — **ölçüldü, karar Emre'nin**
Evren bugün 7327 madde; evren dışı `kronoloji_*.js` 116 dosya 10 589 madde; künye-içi `kronoloji:` 13 402 madde.
| senaryo | 2s açık (atlas geneli) |
|---|---|
| bugün | 1874 |
| + bütün `kronoloji_*.js` | 1527 (−347) |
| + künye-içi | 1458 (−416) |
| + ikisi | 1216 (−658, %35) |
| + yalnız ispanya/rusya/cok_rusya/portekiz/orta_asya | toplam ≈ −40 |
Ajanların "evrene alınırsa açıklar kapanır" tahmini **doğrulanmadı**: dört ülke dosyası tek başına ~40 açık kapatıyor.
Koordinatör kararı: şimdilik evrene alma YOK (tavanlar sıçrar).

### 1.8 Haritada görünmeyen "büyük" devletler
100 devletin **34**'ü haritada **≤ 5 noktayla**, **9**'u **hiç** görünmüyor (Mısır YK, Xiongnu, Gupta, Akkad, Batı Zhou,
Mısır EK, Atina, Maya çatı künyesi, Gana). Bunların "açık 0"ı TEMİZ DEĞİLDİR — ölçülecek kırılma yoktur. Antik ve Asya-Afrika
devletlerinde baskın sorun kronoloji değil, **noktası olmayan toprak** (petek motoru en yakın peteğe emer).

### 1.9 Otomatik "dönem ucu kaydı" maddeleri gerçek olay değildir (koordinatör kararı)
`olaylar_arkeoloji_zincir.js`/`_gecis.js` üretim maddeleri bazı kırılmaları "kapatıyor". Yeniden ölçüldü: **33 kırılma yalnız
otomatik maddeyle kapanıyor** (Yeni Asur 6, Selevkos 5, Ur III 5, Part 4, Eski Babil 3, Roma 3, Han 2, Ahameniş 2, Qin/Med/
Ptolemaios 1). Tabloda ayrı sütun.

---

## 2 · Gece verilen kararlar (gerekçeleri dosyalarda)
**Koordinatör (EMRELİC 1 KASIM, gece yetkisiyle; Emre sabah onaylar):** takvim kuralı (§1.5) · konvansiyon (§1.6) · evren
genişletme şimdilik yok · Osmanlı 1920-04-23 → TBMM bilinçli kurgu kabul, İstanbul'un 12 kaydı 1922-11-01/04'e kadar Osmanlı +
itilaf işgali önerisi (03) · mükerrerler birleştirme · Hitit ölü künyeler birleştirme · kesin hatalar: Selevkos MÖ→astronomik
çeviri (`kronoloji_sinir_antik3_1024.js:23,:25`), Verdun 843-08-10 (33), Fâtımî Mısır/Şam 969 (40), Edo/Meiji `yer_id` Hiraizumi
(`kronoloji_sinir_nokta2.js:35,:66`; ayrıca :11 :21 :22 :32 — veride doğrulandı) · Khmer t 1431 · parti 7 hükümleri onaylı.
**UMIT SALI hükümleri (koordinatörce onaylandı):** Çola t 1279 (TDV-esas kuralı İslâm dünyası içindir; HCIP V) · Vijayanagara f
1336 · Talikota 1565-01-05 (TDV + CHI III) · Atina noktası `atina-demokrasisi`, Delos tabi ilişkisi · Khmer t 1431.
**UMIT SALI hükümleri (onay bekleyen):** Gupta t 550 (Majumdar + Prakash 1946) · Yeni Kartaca MÖ 228 (OCD⁴ + Martyn) ·
Nihâvend TDV'ye bağlı · Malaka 1511 TDV cümlesine bağlı (24 Ağustos adayı) · Sui kalıcı id `xiao-xian-liang` · Mısır 2. Pers
egemenliği üçüncü kaynak bekliyor.
**Geri çekilen bulgular:** 21 Taraz/Sayram "çift s: anahtarı" (veride yok) · 11 Rusya 1547/1552 Jülyen "hatası" (takvim kuralı).

---

## 3 · 100 devlet tablosu
Kaynak: tek geçişli yeniden ölçüm (`scratchpad/toplu_olc.py`, aynı ölçüt; harita anahtarı dahil). Osmanlı `d:`/`v:` için bu
tabloda **2s (yer şartlı)** ölçüt kullanıldı: 171 açık; resmî `denetle` Değişmez 2 (d/v, yer şartsız) sayısı **1**'dir — ikisi
farklı sorular. Devlet bazında ayrıntı ve bulgular dosyalarda.

| # | dosya | ana künye | yerleşim | kırılma günü | açık (2s) | yalnız otomatik | not |
|---|---|---|---|---|---|---|---|
| 01 | [01-roma-imp.md](01-roma-imp.md) | `roma-imp` | 49 | 16 | 2 | 3 |  |
| 02 | [02-mogol-imparatorlugu.md](02-mogol-imparatorlugu.md) | `mogol-imparatorlugu` | 55 | 36 | 1 | 0 |  |
| 03 | [03-osmanli.md](03-osmanli.md) | `osmanli` | 1126 | 707 | 171 | 0 |  |
| 04 | [04-ingiltere.md](04-ingiltere.md) | `ingiltere` | 554 | 368 | 268 | 0 |  |
| 05 | [05-bati-han.md](05-bati-han.md) | `bati-han` | 3 | 4 | 0 | 2 | ≤5 nokta |
| 06 | [06-abbasi.md](06-abbasi.md) | `abbasi` | 25 | 32 | 9 | 0 |  |
| 07 | [07-ahamenis.md](07-ahamenis.md) | `ahamenis` | 10 | 8 | 0 | 2 |  |
| 08 | [08-bizans.md](08-bizans.md) | `bizans` | 270 | 153 | 44 | 0 |  |
| 09 | [09-tang.md](09-tang.md) | `tang` | 18 | 34 | 0 | 0 |  |
| 10 | [10-qing-hanedani.md](10-qing-hanedani.md) | `qing-hanedani` | 160 | 109 | 97 | 0 |  |
| 11 | [11-rusya.md](11-rusya.md) | `rusya` | 556 | 256 | 146 | 0 |  |
| 12 | [12-emevi.md](12-emevi.md) | `emevi` | 29 | 19 | 3 | 0 |  |
| 13 | [13-ispanya.md](13-ispanya.md) | `ispanya` | 268 | 254 | 188 | 0 |  |
| 14 | [14-ming-hanedani.md](14-ming-hanedani.md) | `ming-hanedani` | 102 | 36 | 31 | 0 |  |
| 15 | [15-makedonya-krallik.md](15-makedonya-krallik.md) | `makedonya-krallik` | 2 | 3 | 0 | 0 | ≤5 nokta |
| 16 | [16-sasani.md](16-sasani.md) | `sasani` | 6 | 5 | 3 | 0 |  |
| 17 | [17-maurya.md](17-maurya.md) | `maurya` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 18 | [18-babur-imparatorlugu.md](18-babur-imparatorlugu.md) | `babur-imparatorlugu` | 91 | 79 | 67 | 0 |  |
| 19 | [19-yeni-asur.md](19-yeni-asur.md) | `yeni-asur` | 7 | 9 | 0 | 6 |  |
| 20 | [20-misir-yeni-krallik.md](20-misir-yeni-krallik.md) | `misir-yeni-krallik` | 0 | 0 | 0 | 0 | haritada yok |
| 21 | [21-sovyet-rusya.md](21-sovyet-rusya.md) | `sovyet-rusya` | 540 | 139 | 20 | 0 |  |
| 22 | [22-fransiz-somurge.md](22-fransiz-somurge.md) | `fransa-cumhuriyet` | 460 | 186 | 100 | 0 |  |
| 23 | [23-portekiz.md](23-portekiz.md) | `portekiz` | 81 | 99 | 74 | 0 |  |
| 24 | [24-abd.md](24-abd.md) | `abd` | 259 | 101 | 91 | 0 |  |
| 25 | [25-hulefa-yi-rasidin.md](25-hulefa-yi-rasidin.md) | `hulefa-yi-rasidin` | 10 | 8 | 3 | 0 |  |
| 26 | [26-buyuk-selcuklu.md](26-buyuk-selcuklu.md) | `buyuk-selcuklu` | 37 | 61 | 4 | 0 |  |
| 27 | [27-yuan-hanedani.md](27-yuan-hanedani.md) | `yuan-hanedani` | 111 | 28 | 12 | 0 |  |
| 28 | [28-altinorda.md](28-altinorda.md) | `altinorda` | 157 | 28 | 17 | 0 |  |
| 29 | [29-timurlu.md](29-timurlu.md) | `timurlu` | 176 | 39 | 27 | 0 |  |
| 30 | [30-hunnu-xiongnu.md](30-hunnu-xiongnu.md) | `hunnu-xiongnu` | 0 | 0 | 0 | 0 | haritada yok |
| 31 | [31-gokturk.md](31-gokturk.md) | `gokturk-1` | 2 | 3 | 0 | 0 | ≤5 nokta |
| 32 | [32-almanya-kutsal-roma.md](32-almanya-kutsal-roma.md) | `almanya` | 177 | 183 | 57 | 0 |  |
| 33 | [33-frank.md](33-frank.md) | `frank` | 24 | 12 | 10 | 0 |  |
| 34 | [34-gupta.md](34-gupta.md) | `gupta` | 0 | 0 | 0 | 0 | haritada yok |
| 35 | [35-akkad.md](35-akkad.md) | `akkad` | 0 | 0 | 0 | 0 | haritada yok |
| 36 | [36-babil-eski.md](36-babil-eski.md) | `babil-eski` | 4 | 5 | 0 | 3 | ≤5 nokta |
| 37 | [37-hitit.md](37-hitit.md) | `hitit` | 2 | 2 | 0 | 0 | ≤5 nokta |
| 38 | [38-part.md](38-part.md) | `part` | 6 | 4 | 0 | 4 |  |
| 39 | [39-selevkos.md](39-selevkos.md) | `selevkos` | 5 | 6 | 0 | 5 | ≤5 nokta |
| 40 | [40-fatimi.md](40-fatimi.md) | `fatimi` | 22 | 24 | 3 | 0 |  |
| 41 | [41-safevi.md](41-safevi.md) | `safevi` | 229 | 85 | 37 | 0 |  |
| 42 | [42-memluk.md](42-memluk.md) | `memluk` | 136 | 59 | 20 | 0 |  |
| 43 | [43-song.md](43-song.md) | `song` | 23 | 39 | 1 | 0 |  |
| 44 | [44-qin-hanedani.md](44-qin-hanedani.md) | `qin-hanedani` | 1 | 2 | 0 | 1 | ≤5 nokta |
| 45 | [45-bati-zhou.md](45-bati-zhou.md) | `bati-zhou` | 0 | 0 | 0 | 0 | haritada yok |
| 46 | [46-kusan.md](46-kusan.md) | `kusan` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 47 | [47-ilhanli.md](47-ilhanli.md) | `ilhanli` | 239 | 31 | 5 | 0 |  |
| 48 | [48-habsburg.md](48-habsburg.md) | `habsburg` | 126 | 67 | 25 | 0 |  |
| 49 | [49-delhi-sultanligi.md](49-delhi-sultanligi.md) | `delhi-sultanligi` | 80 | 41 | 23 | 0 |  |
| 50 | [50-kartaca.md](50-kartaca.md) | `kartaca` | 2 | 4 | 2 | 0 | ≤5 nokta |
| 51 | [51-shang.md](51-shang.md) | `shang` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 52 | [52-sui.md](52-sui.md) | `sui` | 7 | 9 | 0 | 0 |  |
| 53 | [53-liao-hanedani.md](53-liao-hanedani.md) | `liao-hanedani` | 7 | 15 | 1 | 0 |  |
| 54 | [54-jin-hanedani.md](54-jin-hanedani.md) | `jin-hanedani` | 9 | 24 | 0 | 0 |  |
| 55 | [55-tibet-imparatorlugu.md](55-tibet-imparatorlugu.md) | `tibet-imparatorlugu` | 4 | 4 | 0 | 0 | ≤5 nokta |
| 56 | [56-uygur.md](56-uygur.md) | `uygur` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 57 | [57-hazar-kaganligi.md](57-hazar-kaganligi.md) | `hazar-kaganligi` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 58 | [58-hun-avrupa.md](58-hun-avrupa.md) | `hun-avrupa` | 2 | 2 | 0 | 0 | ≤5 nokta |
| 59 | [59-cagatay.md](59-cagatay.md) | `cagatay` | 46 | 4 | 2 | 0 |  |
| 60 | [60-gazneli.md](60-gazneli.md) | `gazneli` | 16 | 25 | 1 | 0 |  |
| 61 | [61-harizmsah.md](61-harizmsah.md) | `harizmsah` | 26 | 34 | 3 | 0 |  |
| 62 | [62-eyyubi.md](62-eyyubi.md) | `eyyubi` | 24 | 36 | 2 | 0 |  |
| 63 | [63-selcuklu.md](63-selcuklu.md) | `selcuklu` | 65 | 73 | 6 | 0 |  |
| 64 | [64-endulus-emevi.md](64-endulus-emevi.md) | `endulus-emevi` | 11 | 9 | 3 | 0 |  |
| 65 | [65-muvahhidler.md](65-muvahhidler.md) | `muvahhidler` | 25 | 34 | 7 | 0 |  |
| 66 | [66-misir-eski-krallik.md](66-misir-eski-krallik.md) | `misir-eski-krallik` | 0 | 0 | 0 | 0 | haritada yok |
| 67 | [67-ur-3.md](67-ur-3.md) | `ur-3` | 6 | 6 | 0 | 5 |  |
| 68 | [68-yeni-babil.md](68-yeni-babil.md) | `yeni-babil` | 4 | 4 | 0 | 0 | ≤5 nokta |
| 69 | [69-medya.md](69-medya.md) | `medya` | 1 | 2 | 0 | 1 | ≤5 nokta |
| 70 | [70-ptolemai.md](70-ptolemai.md) | `ptolemai` | 1 | 2 | 0 | 1 | ≤5 nokta |
| 71 | [71-delos-birligi.md](71-delos-birligi.md) | `delos-birligi` | 0 | 0 | 0 | 0 | haritada yok |
| 72 | [72-cola.md](72-cola.md) | `cola` | 2 | 4 | 0 | 0 | ≤5 nokta |
| 73 | [73-vijayanagara.md](73-vijayanagara.md) | `vijayanagara` | 17 | 17 | 14 | 0 |  |
| 74 | [74-maratha.md](74-maratha.md) | `maratha` | 33 | 42 | 34 | 0 |  |
| 75 | [75-afgan-durrani.md](75-afgan-durrani.md) | `afgan-durrani` | 19 | 16 | 15 | 0 |  |
| 76 | [76-edo-bakufu.md](76-edo-bakufu.md) | `edo-bakufu` | 35 | 7 | 6 | 0 |  |
| 77 | [77-joseon.md](77-joseon.md) | `joseon` | 20 | 5 | 4 | 0 |  |
| 78 | [78-angkor-kmer.md](78-angkor-kmer.md) | `angkor-kmer` | 28 | 8 | 0 | 0 |  |
| 79 | [79-srivijaya.md](79-srivijaya.md) | `srivijaya` | 2 | 4 | 0 | 0 | ≤5 nokta |
| 80 | [80-majapahit.md](80-majapahit.md) | `majapahit` | 20 | 5 | 4 | 0 |  |
| 81 | [81-inka-imparatorlugu.md](81-inka-imparatorlugu.md) | `inka-imparatorlugu` | 12 | 13 | 10 | 0 |  |
| 82 | [82-aztek-imparatorlugu.md](82-aztek-imparatorlugu.md) | `aztek-imparatorlugu` | 6 | 6 | 4 | 0 |  |
| 83 | [83-maya-klasik.md](83-maya-klasik.md) | `maya-klasik` | 0 | 0 | 0 | 0 | haritada yok |
| 84 | [84-mali-imparatorlugu.md](84-mali-imparatorlugu.md) | `mali-imparatorlugu` | 5 | 6 | 4 | 0 | ≤5 nokta |
| 85 | [85-songhay-imparatorlugu.md](85-songhay-imparatorlugu.md) | `songhay-imparatorlugu` | 3 | 4 | 0 | 0 | ≤5 nokta |
| 86 | [86-gane.md](86-gane.md) | `gane` | 0 | 0 | 0 | 0 | haritada yok |
| 87 | [87-aksum.md](87-aksum.md) | `aksum` | 1 | 2 | 2 | 0 | ≤5 nokta |
| 88 | [88-habesistan.md](88-habesistan.md) | `habesistan` | 91 | 20 | 8 | 0 |  |
| 89 | [89-kanem-bornu.md](89-kanem-bornu.md) | `kanem-bornu` | 18 | 8 | 4 | 0 |  |
| 90 | [90-sokoto.md](90-sokoto.md) | `sokoto` | 8 | 14 | 10 | 0 |  |
| 91 | [91-kush-krallik.md](91-kush-krallik.md) | `kush-krallik` | 1 | 2 | 0 | 0 | ≤5 nokta |
| 92 | [92-lehistan.md](92-lehistan.md) | `lehistan` | 62 | 23 | 6 | 0 |  |
| 93 | [93-isvec.md](93-isvec.md) | `isvec` | 85 | 23 | 8 | 0 |  |
| 94 | [94-hollanda-somurge.md](94-hollanda-somurge.md) | `hollanda` | 67 | 73 | 47 | 0 |  |
| 95 | [95-prusya.md](95-prusya.md) | `prusya` | 32 | 14 | 2 | 0 |  |
| 96 | [96-fransa.md](96-fransa.md) | `fransa` | 142 | 150 | 98 | 0 |  |
| 97 | [97-venedik.md](97-venedik.md) | `venedik` | 100 | 87 | 20 | 0 |  |
| 98 | [98-kiev-rusu.md](98-kiev-rusu.md) | `kiev-rusu` | 11 | 15 | 8 | 0 |  |
| 99 | [99-macaristan.md](99-macaristan.md) | `macaristan` | 121 | 45 | 15 | 0 |  |
| 100 | [100-birinci-bulgar.md](100-birinci-bulgar.md) | `birinci-bulgar` | 4 | 6 | 3 | 0 | ≤5 nokta |

---

## 4 · Kaynak durumu ve erişilemeyenler
- **Ortak zaaf:** her f/t için iki bağımsız akademik kaynak şartı çoğu uçta **sağlanamadı**. Britannica WebFetch'e 403,
  Iranica 403 (ajanlardan), Met Museum 429, Cambridge Core/archive.org ödünç kitaplar 401. İkinci kaynak çoğunlukla Treccani,
  archive.org tam metinleri (Cambridge History of India/Africa/Iran eski ciltleri, HCIP), OCD ve JSTOR (HAVVA) ile sağlandı.
  Dosyalarda "tek kaynak" / "doğrulanmadı" / "hesap" işaretleri bu yüzden sık.
- **Takvim çevirileri:** Çin/Japon/Kore ganzhi ve hicrî çevirilerin çoğu ajanların kendi formülüyle — "hesap, doğrulanmadı".
  `arac/cin_gun.py`nin verisi (`D:/kaynak-derlem`) UMIT'te yok; KASA çaprazlasın.
- **EI² (Brill) — iki tarayıcıda da açılmadı, Emre'ye liste:** «Muʿāwiya I», «al-Ḥasan b. ʿAlī» (25) · «Saldjūḳids», «Sandjar» (26) ·
  «ʿAbbāsids», «Bag̲h̲dād», «Yaʿfurids» (06) · «ʿOt̲h̲mān I», «Mehemmed I», «Mūsā Čelebi» (03) · «Umayyads», «Marwān II» (12) ·
  «Ḏj̲ūčī Ulus», «Toḳtamish» (28) · «Ayyūbids» (62) · «Umayyads, Spain» (64) · «Ghaznawids», «Khwārazm-Shāhs», «Čag̲h̲atayids» (59-61) ·
  «Fāṭimids» (40) · «Mamlūks» (42) · «Kānem», «Bornu» (89).
- **Okunamayan başlıca monografiler** (dosyaların sonunda soru cümleleriyle): Cambridge History of China 1/3/5-11 · Cambridge
  History of Iran 3-7 · Cambridge Ancient History V-VIII, XIII-XIV · Shaw 2000 tablosu · Bryce 2005 · Frayne RIME 2-4 · Hemming ·
  Hassig · Levtzion · Hunwick · Last · Engel · Fine · Nilakanta Sastri · Stein (Vijayanagara) · Ricklefs/Pigeaud.
- **Teyit kanalından gelen cevaplar** (dosyalara işlendi): Iranica — Erdeşîr/Part 224-04-28 (çift), Ebû Saîd 1335-11-30, Kandehar
  1649-02-22, Safevî 1501, Nihâvend 639-641, Herat/Hürmüz/Sencer yıl, Mısır 2. Pers 342 · Oxford — Sardeis 334, İpsos 301, Hitit
  c. 1200, Yeni Kartaca 228, Verdun 843 (gün yok) · JSTOR — Batı Roma (Näf), Alaşehir 1390 (Bryer), Möngke 1259-08-11, Fort Ross
  1841-12-12, Makao 1887, Malaka 1511/1641, Sebte 1415-08-21, 1818-10-20, Akkâ 1291-05-18, Kutsal Roma 1806-08-06, Ren 1806-07-12,
  Gupta 543/550, Kanişka 127, Muye 1046, Çin-Tibet andı 821/822.

---

## 5 · Rapor (CLAUDE.md: ölçtüm / bulamadım / istiyorum)
**① Ölçtüm (UMIT, bu worktree, 01d545bdb):** 100 devlet × (künye eşleme, f/t teyidi, kronoloji, harita) — 100 dosya + 5 ek döküm.
Toplam: bu devletlere bağlı 7440 yerleşim-dönem kaydı, 4296 kırılma günü, **1912 açık** (2s, otomatik maddeler sayılmadan) +
**33** yalnız otomatik maddeyle kapanan. Atlas geneli: 1042 harita-anahtarlı dönem, 253 adet 1923-10-29 izi, 20 mükerrer künye
grubu, Jülyen A-HATA: Rus 24 + İngiltere 50 + İsveç 14 + Yunan 5 + öteki 4 (şüpheli ayrıca), 34 devlet ≤ 5 nokta.
**② Bulamadım:** iki bağımsız kaynak şartı çoğu uçta (§4); EI² hiç; Çin/Japon/hicrî çevirilerin tablo doğrulaması; motorun harita
anahtarlarını nasıl boyadığı (ölçülmedi); petek/motor çıktısı hiçbir devlet için ölçülmedi (yalnız `s:` kayıtları okundu).
**③ İstiyorum (önerim):** KASA sırası — (1) harita anahtarı TEK sınıfı 841 dönem (mekanik, en güvenli) · (2) 1923-10-29 yapay
bölünmeler 61 + ardılsızlar 14 · (3) mükerrer künye birleştirme 20 grup (tek parti, künye tavanı) · (4) koordinatör onaylı kesin
hatalar (§2) · (5) Rus/İsveç Jülyen A-sınıfı · (6) devlet dosyalarındaki kaynaklı düzeltme satırları. **Emre kararı gerekenler:**
`almanya` bölünmesi · takvim kuralının metni ve `gun.py` beyanı · konvansiyon · evren genişletme · Aksum t (boş) · Çola/Khmer/
Vijayanagara gece hükümleri. Kaynaksız noktalar için haritada görünmeyen 34 devlete **yerleşim noktası** eklemek ayrı bir iş
(öneri: KASA veya ayrı oturum, devlet başına başkent + 3-5 merkez).
