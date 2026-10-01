# ODAK-KAPAT-AVRUPABATI-1001 — `kronoloji_sinir_avrupa_bati.js` odaksız maddeleri

Koordinatör görevi (M-5718). `data/`ya YAZILMADI; öneri listesidir.

## 0. Ölçüm ve kova sorusu
- Dosya **60** madde · odaksız **56** · `kapsam_genis` **0** · `yer_id` dolu 4 (Brüksel · Strazburg ×2 · Dublin).
- 56 odaksızın **50**'si `sinir_id` taşıyor; 50'nin 50'si `data/d_sinirlar_avrupa_bati.js`
  (`D_SINIRLAR_AVRUPA_BATI`, 159 kayıt, `hat` alanı = geometri) içinde çözülüyor.
  `js/app.js`te `sinir_id` geçen satır **0** ⇒ kamera bu hattı bilmiyor.
- 🔴 **Kova sorusu tahtada (M-5719):** maddelerin çoğu antlaşma; M-5718 Hüküm 1 imza yerini
  `yer_id` yapıyor. Bu dosyada imza yeri çoğu kez konudan UZAK (Viyana 1864 → konu Kongeå;
  Paris 1920 → konu Kuzey Schleswig). Önerim: `yer_id` = imza yeri (veri doğru) + kamera için
  `sinir_id` hat kutusu (js işi). Cevap gelene kadar tablo İKİ sütun taşır: `yer_id` (olay
  yeri) ve "hat" (konu).

## 1. Yöntem
M-5718 ile aynı: madde metni → olayın geçtiği yer → `sehirler` havuzunda TAM ad → maddenin
KENDİ `kaynak:` alanındaki kaynaktan cümle birebir. İmza yeri yalnız antlaşmanın ADINDA
geçiyorsa yazılmaz (M-5718 Ramla emsali) → C.

### Kaynak erişimi (ölçüldü)
| kaynak | durum |
|---|---|
| Digithèque MJP (mjp.univ-perp.fr) | ✓ 200 — 1668aix · 1678nimegue · 1760turin · 1801luneville · 1814paris indirildi |
| Store norske leksikon (snl.no) | ✓ 200 |
| Historisches Lexikon der Schweiz (hls-dhs-dss.ch) | ✗ **403 + Cloudflare bot doğrulaması** — curl ve tarayıcı ikisi de; doğrulama ATLATILMADI. HLS'ye dayanan maddelerde cümle `alınamadı` |
| BnF katalog · Larousse · Magro tezi · Loire-Atlantique arşivi | URL maddede yok / denenmedi |

### Ad tuzağı (ölçüldü)
- **Fribourg (İsviçre) ≠ "Freiburg" (havuzda, Breisgau, Almanya, sahip `almanya`)** — havuzdaki
  Freiburg'u Fribourg Barışı'na yazmak kamerayı yanlış ülkeye götürür. Fribourg atlasta YOK.
- Lausanne havuzda **"Lozan"** adıyla; Stettin **"Stettin (Szczecin)"**; Melilla **"Melîle (Melilla)"**;
  Ceuta **"Sebte (Ceuta)"**; Tartu **"Tartu (Dorpat)"**.

## 2. Parti 1 — madde 1-20

| # | t | başlık (kısa) | kova | `yer_id` önerisi | hat (konu) | kaynak cümlesi (birebir) |
|---|---|---|---|---|---|---|
| 1 | 1291-08-01 | Federal Belge | D | — | — (`sinir_id` yok) | HLS — alınamadı (403). Birlik belgesi; toprak değişikliği yok |
| 2 | 1297-09-12 | Alcañices Antlaşması | **B** (imza) | atlasta yok: **Alcañices** | Portekiz–Kastilya (hat yok) | Magro tezi — indirilmedi |
| 3 | 1415-01-01 | İsviçrelilerin Aargau fethi | **B** | atlasta yok: **Aargau** (bölge; Aarau/Aarburg/Zofingen/Lenzburg/Brugg havuzda yok) | (sinir_id yok) | HLS — alınamadı |
| 4 | 1482-12-23 | Arras Antlaşması | **C** | — (Arras havuzda) | (sinir_id yok) | imza yeri yalnız ADDA; kaynak (Larousse) indirilmedi — Ramla emsali, yazılmadı |
| 5 | 1497-09-17 | Melilla'nın alınması | **A** | `"Melîle (Melilla)"` | dg5-es-ma-melilla | kaynak (Ordu Müzesi · Gozalbes) indirilmedi; olayın yeri başlığın ÖZNESİ (şehrin kendisi alındı) |
| 6 | 1499-09-22 | Basel Barışı | **A** (imza) ⏳ | `"Basel"` | (sinir_id yok) | HLS — alınamadı; madde `d` "Basel'de imzalanan" diyor, kaynak cümlesi doğrulanamadı ⇒ ⏳ |
| 7 | 1516-11-29 | Fribourg Ebedî Barışı | **B** (imza) | atlasta yok: **Fribourg** (havuzdaki Freiburg BAŞKA şehir) | dg5-it-ch-1 | HLS — alınamadı |
| 8 | 1532-01-01 | Bretanya Birleşme Fermanı | **A** (imza) ⏳ | `"Nantes"` | (sinir_id yok) | Loire-Atlantique arşivi — URL yok; madde `d` "Nantes'ta çıkarılan" ⇒ ⏳ |
| 9 | 1536-01-22 | Bern'in Vaud fethi | **B** | atlasta yok: **Vaud** (bölge; Lozan havuzda ama ikinci sefer, itilmedi) | dg5-sa-ch-1 | HLS — alınamadı |
| 10 | 1564-10-30 | Lausanne Antlaşması | **A** (imza) ⏳ | `"Lozan"` | dg5-sa-ch-1 | HLS — alınamadı; `d` "Lausanne'da imzalanan" ⇒ ⏳ |
| 11 | 1570-12-13 | Stettin Barışı | **A** (imza) | `"Stettin (Szczecin)"` | dg6-dk-se-1751-oncesi | SNL: "…ble det undertegnet en fredsavtale i Stettin 13." (cümle "13. desember 1570" ile sürüyor; çıkarıcı noktadan kesti) |
| 12 | 1598-05-02 | Vervins Barışı | **B** (imza) | atlasta yok: **Vervins** | dg5-guneyhol-fr-1 | BnF/Larousse — indirilmedi |
| 13 | 1601-01-17 | Lyon Antlaşması | **C** | — (Lyon havuzda) | dg5-fr-ch-jura-1 | imza yeri yalnız ADDA; BnF kaydı indirilmedi — yazılmadı |
| 14 | 1645-08-13 | Brömsebro Barışı | **B** (imza) | atlasta yok: **Brömsebro** | dg6-dk-se-1751-oncesi | lex.dk — indirilmedi (B olduğu için cümle sonucu değiştirmez) |
| 15 | 1660-11-12 | Llívia sözleşmesi | **B** (imza) | atlasta yok: **Llívia** | d1923-fr-es-llivia | MJP — indirilmedi |
| 16 | 1668-05-02 | Aachen Barışı | **A** (imza) | `"Aachen"` | dg5-guneyhol-fr-1 | MJP 1668aix: "La médiation du Pape permet aux belligérants de conclure rapidement un traité de paix à Aix-la-Chapelle, le 2 mai 1668." |
| 17 | 1678-09-17 | Nijmegen Barışı | **A** (imza) | `"Nijmegen"` | dg5-fr-ch-jura-1 | MJP 1678nimegue: "A Nimegue le dix-septiéme jour de Septembre mil six cens soixante et dix-huit" |
| 18 | 1751-10-02 | Strömstad Sınır Antlaşması | **B** (imza) | atlasta yok: **Strömstad** | dg6-dk-se-stromstad | SNL — indirilmedi |
| 19 | 1752-08-02 | Varese Antlaşması | **B** (imza) | atlasta yok: **Varese** | dg5-it-ch-1 | IBS No. 12 — indirilmedi |
| 20 | 1760-03-24 | Torino Antlaşması | **A** (imza) | `"Torino"` | dg5-sa-fr-2 | MJP 1760turin: "Fait à Turin le vingt-quatrième Mars mil sept cent soixante." |

**Parti 1 (20):** A 5 (kaynak cümlesiyle: #11 #16 #17 #20 + #5 özne) · A⏳ 3 (HLS/arşiv erişilemedi:
#6 #8 #10) · B 9 · C 2 · D 1.
⇒ Kesin uygulanabilir: 5. ⏳ üçü kaynak cümlesi gelince A olur.

## 3. Parti 2 — madde 21-60 (36 odaksız; #36 #52 #53 #60 zaten `yer_id`li, atlandı)

Ek erişim: IBS (fall.fsulawrc.com) **000** — taşıma arızası (D211 ⑤: ölü değil); SNL «riksgrensen»
200 ama Karlstad/Strömstad imza yerini söylemiyor.

| # | t | başlık (kısa) | kova | `yer_id` önerisi | hat (konu) | kaynak cümlesi / not |
|---|---|---|---|---|---|---|
| 21 | 1766-02-23 | Lorraine Fransa'ya katıldı | **B** | atlasta yok: **Lorraine** (dükalık; Nancy havuzda, itilmedi) | dg5-fr-de-1 | Musée Lorrain — indirilmedi |
| 22 | 1792-11-27 | Savoy'un katılması | D | — | dg5-sa-ch-3 | Konvansiyon KARARI |
| 23 | 1795-10-01 | Avusturya Hollandası ilhakı | D | — | dg5-guneyhol-fr-3 | karar |
| 24 | 1797-10-10 | Valtellina'nın katılması | **B** | atlasta yok: **Valtellina · Chiavenna · Bormio** | dg5-it-ch-1 | HLS — alınamadı |
| 25 | 1801-02-09 | Lunéville Antlaşması | **B** (imza) | atlasta yok: **Lunéville** | dg5-fr-de-2 | MJP 1801luneville: "Fait et signé à Lunéville, le 20 Pluviôse An IX de la République française (9 Février 1801)." |
| 26 | 1801-06-06 | Badajoz Antlaşması | **C** | — (Badajoz havuzda) | d1923-es-pt-olivenza | imza yeri yalnız ADDA |
| 27 | 1802-09-11 | Piyemonte ilhakı | D | — | dg5-it-ch-3 | karar |
| 28 | 1810-07-09 | Rambouillet Kararnamesi | D | — | dg5-nl-de | kararname |
| 29 | 1810-11-12 | Valais'nin katılması | D | — | dg5-sa-ch-3 | karar |
| 30 | 1814-05-30 | Birinci Paris Antlaşması | **A** (imza) | `"Paris"` | d1923-fr-ch | MJP 1814paris: "Fait à Paris, le 30 mai de l'an de grâce 1814." |
| 31 | 1815-11-20 | İkinci Paris Antlaşması | **C** | — | dg4-fr-de-1815 | HLS — alınamadı; ad dışında yer yok |
| 32 | 1816-03-16 | Torino Antlaşması (Cenevre) | **A⏳** | `"Torino"` | dg4-sa-ch-cenevre | `d`: "Torino'da … imzaladı" — IBS/HLS alınamadı |
| 33 | 1816-06-26 | Aachen Sınır Antlaşması | **A⏳** | `"Aachen"` | dg4-nl-de-belcika-dogu | `d`: "Aachen'de sınırlarını belirledi" — IBS alınamadı |
| 34 | 1820-03-28 | Kortrijk Antlaşması | **B** (imza) | atlasta yok: **Kortrijk** | dg4-nl-fr-kortrijk | De Lage Landen — indirilmedi |
| 35 | 1824-07-02 | Meppen Antlaşması | **B** (imza) | atlasta yok: **Meppen** | d1923-nl-de | IBS — alınamadı |
| 37 | 1856-12-02 | Bayonne Antlaşması | **A⏳** | `"Bayonne"` | d1923-fr-es-bati | `d`: "Bayonne'da imzalanan" — UNTS indirilmedi |
| 38 | 1860-04-26 | Wad-Ras Antlaşması | **B** (imza) | atlasta yok: **Wad-Ras** | d1923-es-ma-ceuta | konu Sebte (Ceuta) — havuzda, itilmedi |
| 39 | 1861-03-07 | Torino sınır sözleşmesi | **A⏳** | `"Torino"` | dg4-sa-fr-1861 | `d`: "Torino'da imzalanan" — IBS alınamadı |
| 40 | 1862-06-21 | Tanca demarkasyon akdi | **A⏳** | `"Tanca"` | dg3-es-ma-melilla-1894-oncesi | `d`: "Tanca'da imzalanan" — congreso.es indirilmedi; gün kaynaklar arası çelişkili (madde zaten yazıyor) |
| 41 | 1862-12-08 | Dappes Antlaşması | **A⏳** | `"Bern"` | d1923-fr-ch-dappes | `d`: "Bern'de imzalanan" — IBS alınamadı |
| 42 | 1864-09-29 | Lizbon Sınır Antlaşması | **A⏳** | `"Lizbon"` | d1923-es-pt-kuzey | `d`: "Lizbon'da imzalanan" — UNTS indirilmedi |
| 43 | 1864-10-30 | Viyana Antlaşması (Schleswig) | **C** | — (Viyana havuzda) | d1864-dk-de-kongea | imza yeri yalnız ADDA · 🔴 konu Kongeå — kova sorusunun örneği |
| 44 | 1868-07-11 | Bayonne Nihaî Akdi | **C** | — | d1923-fr-es-dogu | imza yeri yalnız ADDA |
| 45 | 1879-06-24 | İsviçre–Almanya sınır antlaşması | D | — | d1923-ch-de | imza yeri metinde yok |
| 46 | 1893-07-21 | Ren düzenlemesi yürürlüğü | D | — | d1893-hab-ch | yürürlük |
| 47 | 1894-03-05 | Merakeş Sözleşmesi | **A⏳** | `"Merakeş"` | d1923-es-ma-melilla | `d`: "Merakeş'te imzalanan" — congreso.es indirilmedi |
| 48 | 1900-02-12 | Kopenhag Sözleşmesi | **C** | — (Kopenhag havuzda) | d1864-dk-de-kongea | imza yeri yalnız ADDA |
| 49 | 1905-10-26 | Karlstad sözleşmeleri | **A⏳** | `"Karlstad"` | d1923-no-se | `d`: "Karlstad'da imzalanan" — SNL «riksgrensen» söylemiyor; UNISPAL yalnız başlık |
| 50 | 1917-12-06 | Finlandiya bağımsızlık ilanı | D | — | d1923-fi-se | ilan |
| 51 | 1918-11-03 | Villa Giusti Ateşkesi | **B** (imza) | atlasta yok: **Villa Giusti** (Padova yakını) | d1918-it-ch-isgal | FRUS — indirilmedi |
| 54 | 1920-01-10 | Eupen-Malmedy Belçika'ya | D | — | d1923-be-de | yürürlük |
| 55 | 1920-01-01 | Saint-Germain yürürlüğü | D | — | d1923-it-at | yürürlük |
| 56 | 1920-01-01 | İtalya–İsviçre sınırı uzadı | D | — | d1923-it-ch-saintgermain | yürürlük |
| 57 | 1920-07-05 | Kuzey Schleswig Danimarka'ya | **A⏳** | `"Paris"` | d1923-dk-de | `d`: "5 Temmuz 1920'de Paris'te imzalanan antlaşmayla" — IBS alınamadı · 🔴 konu Schleswig |
| 58 | 1920-11-12 | Rapallo Antlaşması | **B** (imza) | atlasta yok: **Rapallo** | d1923-it-shs | LNTS kopyası — indirilmedi |
| 59 | 1920-12-31 | Tartu Barışı yürürlüğü | **C** | — | d1923-fi-no-petsamo | 🔴 onay yeri kaynaklar arası ÇELİŞİYOR (LNTS Moskova 31.12.1920 ↔ IBS Helsinki 14.2.1921) — madde zaten yazıyor |

**Parti 2 (36):** A 1 · A⏳ 10 · B 8 · C 6 · D 11.

## 4. TOPLAM — 56 odaksız madde
```
A      6   kaynak cümlesiyle (Aachen · Nijmegen · Torino · Stettin · Paris) + Melilla (fethin öznesi)
A⏳   13   madde `d`si imza yerini AÇIKÇA söylüyor, kaynak cümlesi ALINAMADI (HLS 403/Cloudflare ·
           IBS 000 · UNTS/congreso indirilmedi) — kaynak doğrulanınca A
B     17   atlasta yok: 13 imza yeri (Alcañices · Fribourg · Vervins · Brömsebro · Llívia · Strömstad ·
           Varese · Lunéville · Kortrijk · Meppen · Wad-Ras · Villa Giusti · Rapallo) + 4 bölge
           (Aargau · Vaud · Lorraine · Valtellina) — İTİLMEDİ
C      8   imza yeri yalnız ADDA (Arras · Lyon · Badajoz · İkinci Paris · Viyana · Bayonne 1868 ·
           Kopenhag) + Tartu onay yeri çelişkisi
D     12   karar · ilhak kararnamesi · ilan · yürürlük
```

### Sınav — gerçek `arac/odak_cozum.js` yamalı kopyası (index.html evreni)
```
yalnız A (6 yer_id)           dosya ODAKSIZ 56 → 50 · yeni kırık atıf 0
A + A⏳ (19 yer_id)           dosya ODAKSIZ 56 → 37 · yeni kırık atıf 0
```
19/19 yama eşleşti; önerilen adların hepsi havuzda çözüldü (Lozan · Stettin (Szczecin) ·
Melîle (Melilla) tam adlarıyla).

### 🔴 Kova sorusu (M-5719) bu sayıları DEĞİŞTİRİR
A/A⏳'nın 19 maddesinden en az 3'ünde imza yeri konudan uzak (#30 Paris → Fransa–İsviçre hattı ·
#57 Paris → Schleswig · #41 Bern → Dappes vadisi). `yer_id` olarak DOĞRU, kamera olarak YANILTICI.
Bu dosyanın asıl çaresi `sinir_id` → `D_SINIRLAR_AVRUPA_BATI` hat kutusu: **50/56** maddede hat
VAR ve çözülüyor. Uygulama `js/` işidir (bana kapalı).
