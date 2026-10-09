# REN-SOL-YAKA-1006 — Köln · Aachen · Trier, 1794-1814 sahipliği

Tarih: 6 Ekim 2026 · temel `origin/makine/umit` `b2d4c2ff` · YALNIZ ÖLÇÜM + ÖNERİ, veriye yazılmadı.
Tanım: `denetim/UMIT-W41b-P3-5-OCAK1-1006.md:31` (yan bulgu: *"Köln, Aachen ve Trier'in
1794/97-1814 Fransız dönemi hiç yok"*) ve `:76` (*"ölçülmedi, yalnız gözlendi"*).

## 0. Öngörü (ölçümden ÖNCE yazıldı)
- **SAYI: 3/3 yanlış.**
- **MEKANİZMA:** W41b üçünü de 1281-1923 tek `almanya` dönemi olarak gözledi. Fransız dönemi
  (1794 işgal → 1797/1801 devir → 1814 çekilme) hiç kodlanmamışsa üçü de aynı sebeple yanlıştır:
  dilim yok. Öngörü: ne `s:` ne `isg:` Fransız kaydı çıkacak; yanlışlık "yanlış gün" değil
  "eksik dönem".

**Sonuç:** sayı TUTTU (3/3), mekanizma TUTTU (eksik dönem; `isg:` alanı üçünde de yok).
Ek olarak öngörmediğim bir bulgu çıktı (§3.2): atlas KENDİ kronolojisiyle çelişiyor.

## 1. Mükerrer kapısı
`denetim/` altında Köln/Aachen/Trier geçen dosyalar içerikle tarandı (`grep -l`), 1794/1801/1814
ile kesiştirildi: 8 dosya. Hepsi bu kalemi **açık** diye anıyor, hiçbiri hüküm vermiyor:
- `UMIT-W41b-P3-5-OCAK1-1006.md:31,76`: "ölçülmedi, yalnız gözlendi" (TANIM)
- `P07-KUZEY-0914.md:38,80`: "Kaynak ölçülmedi, ayrı kalem" (1806-1814; Mainz da anılıyor)
- `UMIT-W54b-MEMEL-SAAR-1006.md:79,135`: "1793-1815 Fransız dönemi … KAYNAKLANMADI", açık kalem
- `AVRUPA-TEYID-0082-CEVAP.md:149`: 1815 sonrası Prusya (başka soru; bu dilimi sormuyor)
- `D3-AVRUPA-BATI-0916` · `ODAK-KAPAT-AVRUPABATI-1001` · `SINIR-STATU-0075` · `UMIT-W17`: yalnız Aachen
  ADI (1668 / 1816 antlaşmaları), bu dilim değil.

⇒ **Mükerrer DEĞİL**, iş yapıldı.

## 2. ① Bugünkü zincir (ölçüm)
`arac/girdi.py GIRDI_DOSYALARI` dosyaları (`yerlesimler.js`, `yerlesimler_avrupa.js` canlı listede):

| Şehir | Dosya:satır | `s:` | `isg:` | 1794-1814 dilimi |
|---|---|---|---|---|
| Köln | `data/yerlesimler.js:1073` | `1281-01-01 → 1923-10-29 almanya` | yok | `almanya` |
| Aachen | `data/yerlesimler_avrupa.js:377` | `1281-01-01 → 1923-10-29 almanya` | yok | `almanya` |
| Trier | `data/yerlesimler_avrupa.js:378` | `1281-01-01 → 1923-10-29 almanya` | yok | `almanya` |

`data/yer_yama_kademe2.js`teki üç kayıt yalnız `k` (kademe) önerisi, sahiplik değil.

## 3. Atlasın geri kalanı ne diyor (atlas DAYANAK DEĞİL, yalnız tutarlılık için)
### 3.1 Komşu noktalar
- `Liège` (`:360`) ve `Lüksemburg` (`:362`): `1795-10-01 → 1815-06-09 fransa-cumhuriyet`. Yani komşu
  noktalarda Fransız dönemi var, Ren sol yakasında yok.
- `Mainz` (`:379`): o da tek dönem `almanya`. Aynı kusur, **kapsam dışı aday** (Mont-Tonnerre merkezi).
  Bonn/Koblenz/Düsseldorf noktası yok.
### 3.2 🔴 Atlas kendi kronolojisiyle çelişiyor (öngörülmedi)
- `data/kronoloji_sinir_avrupa_bati.js:188`: `t:"1801-02-09"`, `devletler:["fransa-cumhuriyet","almanya"]`,
  `sinir_id:"dg5-fr-de-2"`, b: *"Lunéville Antlaşması — Ren'in sol yakası Fransa'ya"*. Bu dosya
  Değişmez 2 evreninde. Madde okunduğunda haritada **hiçbir şey değişmiyor**: §1'deki amacın
  (kronoloji ile haritanın birbirini doğrulaması) ters hâli. Değişmez 2 bunu görmez, çünkü
  "maddesi olmayan kırılma" sorar, "kırılması olmayan madde" sormaz (2t'nin işi; o da `sinir_id`li
  maddeyi kırılmasız saymıyorsa kör kalır, ÖLÇÜLMEDİ).
- `data/d_sinirlar_avrupa_bati.js:157` `dg5-fr-de-2`: `1792-09-22 → 1814-05-30`, `sinif:"YOK"`, hat yok.
- `data/kronoloji_almanya.js:740` (1803-02-25): *"Ren'in solundaki topraklarını Fransa'ya kaptıran prensler"*.

## 4. ② Kaynak ne diyor
TDV: bu coğrafya TDV'nin taneciği DIŞINDA (Ren sol yakası şehirleri; TDV Osmanlı ve komşuları). Bu
oturumda TDV araması **YAPILMADI**, yokluk hükmü de verilmiyor. Kaynaklar kurumsal ve ADIYLA:

| # | Kaynak (kurum) | Birebir cümle | Neyi tarihliyor |
|---|---|---|---|
| K1 | Lunéville Antlaşması md. VI · Digithèque MJP (Univ. Perpignan) `mjp.univ-perp.fr/traites/1801luneville.htm` | "S. M. l'Empereur et Roi, tant en son nom qu'en celui de l'Empire germanique, consent à ce que la République française possède désormais, en toute souveraineté et propriété, les pays et domaines situés à la rive gauche du Rhin" · "Fait et signé à Lunéville, le 20 pluviôse An IX de la République française (9 Février 1801)" | Hukukî devir: **1801-02-09**, İmparator + Reich adına, tam egemenlik |
| K2 | I. Paris Antlaşması md. 2 · aynı depo `traites/1814paris.htm` | "Le Royaume de France conserve l'intégrité de ses limites telles qu'elles existaient à l'époque du 1er janvier 1792." · "Fait à Paris le 30 mai de l'an de grâce 1814." | Fransa'nın Ren sol yakasından feragati: **1814-05-30** (1792 sınırı onu dışarıda bırakır, ama ÇIKARIM: madde Ren'i adıyla anmıyor) |
| K3 | Kölnisches Stadtmuseum, «Köln wird französisch» | "Am 6. Oktober 1794 ergab sich die Stadt Köln kampflos den französischen Revolutionstruppen." · "Der Einmarsch der Franzosen bedeutete das Ende der Freien Reichsstadt." · "Bis 1815 gehörte Köln damit für gut zwanzig Jahre zu Frankreich." | Köln işgali **1794-10-06** (gün) |
| K4 | Museumsdienst Aachen, Route des Erinnerns «Aachen in der Franzosenzeit» | "1794 besetzten die französischen Armeen der Revolution die Stadt Aachen. Seit 1798 gehörte Aachen zum französischen Reich." | Aachen işgali **1794** (YIL), aidiyet 1798 |
| K5 | Stadt Aachen, aachen.de «Geschichte Aachens» | "1794 hatten die Armeen der Französischen Revolution Aachen besetzt und mitsamt dem linken Rheinufer mit Frankreich vereint." · "Mit dem Wiener Kongress von 1815 wurden die Rheinlande in das Königreich Preußen einbezogen" | 1794 (YIL), birleşme günü yok |
| K6 | Institut für Geschichtliche Landeskunde RLP, regionalgeschichte.net «Trier» | "Im Jahr 1794 wurde die Stadt von französischen Truppen besetzt." · "Nach der offiziellen Abtretung der linksrheinischen Gebiete durch Österreich im Frieden von Campo Formio 1797 etablierte Frankreich eine neue Verwaltungsgliederung." · "Seit dem 6. Januar 1814 war Trier preußisch besetzt." | Trier işgali **1794** (YIL), Prusya işgali **1814-01-06** |
| K7 | LVR + Rheinischer Verein, preussen-im-rheinland.de Zeittafel | "1801: Frieden von Lunéville. Abtretung der linksrheinischen Gebiete an Frankreich wird vom Kaiser und den Reichsständen völkerrechtlich anerkannt." · "1798: … Einrichtung von vier Departements auf dem linken Rheinufer." | K1'i destekler |

**Hüküm (kaynak):** 1794'ten 1801'e kadar **işgal**, 1801-02-09'dan (Lunéville) itibaren **ilhak**
(Fransız egemenliği), 1814'te askerî çekilme ve 1814-05-30'da hukukî feragat.
⚠️ **Başlangıç yılında kaynaklar AYNI ŞEYİ TARİHLEMİYOR, ÇELİŞKİ DEĞİL:** K6 1797'yi (Campo Formio:
*Avusturya'nın* devri), K4 1798'i (idarî bağlama), K1/K7 1801'i (*İmparator ve Reich'ın* devri) verir.
Üç farklı hukukî adım. Tam egemenliği tek başına tarihleyen ve metni birebir okunan tek belge K1.
⚠️ K3'ün "Bis 1815" sözü, şehrin aidiyetinin genel anlatısıdır. Gün vermiyor, K2 ile çelişki
sayılmadı (Prusya'nın fiilî ilhakı 1815; Fransız egemenliği K2 ile 1814'te bitiyor).

## 5. ③ Fark
| Şehir | Atlas | Kaynak | Fark |
|---|---|---|---|
| Köln | 1794-1814 `almanya` | işgal 1794-10-06 (K3) → ilhak 1801-02-09 (K1) → feragat 1814-05-30 (K2) | **YANLIŞ**: 7 yıl işgal + 13 yıl Fransız egemenliği yok |
| Aachen | 1794-1814 `almanya` | işgal 1794 (K4/K5, günsüz) → 1801-02-09 → 1814-05-30 | **YANLIŞ**, aynı |
| Trier | 1794-1814 `almanya` | işgal 1794 (K6, günsüz) → 1801-02-09 → Prusya işgali 1814-01-06 (K6) → 1814-05-30 | **YANLIŞ**, aynı |

Bu bir "çelişki" değil (iki kaynak gerekirdi), **atlasın hatası** (D207).

## 6. Önerilen düzeltme (UYGULANMADI) → `denetim/REN-SOL-YAKA-1006-KOORD.diff`
Sahibi KOORDİNATÖR (`yerlesimler*.js`). `git apply --check` temiz, CR 0, temel `b2d4c2ff`.
Üretici: `denetim/ARAC-REN-SOL-YAKA-1006-DIFF.py` (salt okur; HEAD içeriğinden kurar, zincir
beklenen tek dönem değilse durur).
```
üçü için s:  1281-01-01 → 1801-02-09 almanya
             1801-02-09 → 1814-05-30 fransa-cumhuriyet   kaynak: K1 birebir
             1814-05-30 → 1923-10-29 almanya             kaynak: K2 birebir
Köln   isg:  1794-10-06 → 1801-02-09 fransa-cumhuriyet   kaynak: K3 birebir
Aachen isg:  1794-01-01 → 1801-02-09 fransa-cumhuriyet   kaynak: K4 birebir · GÜN bulunamadı
Trier  isg:  1794-01-01 → 1801-02-09 fransa-cumhuriyet   kaynak: K6 birebir · GÜN bulunamadı
       isg:  1814-01-06 → 1814-05-30 prusya              kaynak: K6 birebir
```
- **s: mi isg: mi:** 1794-1801 **isg** (hukukî devir yok, K1 öncesi), 1801-1814 **s** (K1 "en toute
  souveraineté et propriété").
- 1814 sonrası `almanya`, `prusya` DEĞİL: atlasın bugünkü Ren geleneği korundu (W41b:30). Prusya
  1815 sorusu AYRI kalem (`AVRUPA-TEYID-0082-CEVAP.md:149`), bu diff onu çözmüyor.
- ⚠️ **Aachen/Trier `1794-01-01`:** kural gereği (gün bilinmiyorsa YYYY-01-01). Bedeli: işgal
  haritada gerçekten ~8-9 ay ERKEN görünür (Aachen Ocak-Eylül 1794 Avusturya elinde). Seçenek (b):
  kurumsal gün bulunana kadar `isg:`i bu iki şehirde YAZMAMAK (eksik ama yanlış değil). **Önerim:
  (b).** 01-01 işgali, aynı 1794'te 8 ay sonraki Köln işgalinden önce gösterir ve kronolojiyle
  hiçbir maddeyle eşleşmez. Diff (a)'yı taşıyor; (b) için iki `isg:` öbeği silinir.
- Köln/Aachen 1814 ocak çekilmesi: kurumsal gün **bulunamadı** ⇒ o iki şehirde Fransız `s:`
  1814-05-30'a kadar sürer, ara işgal yazılmadı.

### 6.1 Öngörü: diff inerse kapı ne der (ÖLÇÜLMEDİ, koşturulmadı)
- `1801-02-09` kırılmaları (×3): `kronoloji_sinir_avrupa_bati.js:188` (taraf fransa-cumhuriyet+almanya)
  ±30 gün içinde ⇒ **karşılanır**.
- `1814-05-30` kırılmaları (×3): Değişmez 2 evreninde fransa+almanya maddesi YOK (aynı gün yalnız
  `:218` fr-ch maddesi var) ⇒ 2s'te **+3 AÇIK** beklenir. Gerekli: Paris 1814 md. 2'ye dayalı bir
  `kronoloji_sinir` maddesi (UMIT/kronoloji sahibi).
- `isg:` başlangıçları (Köln 1794-10-06, Trier 1814-01-06; seçenek (a)'da +2 tane 1794-01-01):
  Değişmez 2i evreninde madde YOK ⇒ **+2 (b) / +4 (a) işgal açığı** beklenir. Gerekli: "1794 Ren sol
  yakasının Fransız işgali" maddesi (Köln günü K3) ve "1814-01-06 Trier" maddesi.
- Değişmez 8: `dg5-fr-de-2` `sinif:YOK` ⇒ D8 muaf (C/YOK hattı), etki beklenmez.
- Yalnız veri koşusu gerekir, motor tuzuna dokunulmuyor.

## 7. Bulunamayanlar (ADIYLA, 6 Ekim 2026)
- **Aachen 1794 işgal günü:** kurumsal kaynakta yok. Kurumsal olmayan aday değerler 22 ve 23
  Eylül 1794 (arama özetleri, Wikipedia/yerel blog; KULLANILMADI, kendi aralarında da farklı).
  `aachen.de/De/kultur_freizeit/kultur/geschichte/aachen_europa/300_franzosenzeit.html` **404**.
  `aachen.de/.../stadtarchiv/archivgeschichte/` yalnız yıl veriyor.
- **Trier 1794 işgal günü:** kurumsal kaynakta yok (K6 yalnız yıl). Aday 9 Ağustos 1794 (arama
  özeti; kurumsal sayfada okunamadı, KULLANILMADI). `trier.de` zaman tablosu URL'si (broker.jsp)
  ilgisiz sayfa döndü. `museum-trier.de` 2004 sergi sayfası yalnız "zwischen 1794 und 1814".
- **Köln ve Aachen 1814 çekilme günleri:** aday Köln 14/15 Ocak, Aachen 17 Ocak 1814 (arama
  özetleri; kurumsal sayfa okunamadı, KULLANILMADI).
- **LVR portalı** `rheinische-geschichte.lvr.de` (chronicle/1794, Roerdepartement, Saardepartement)
  ve `kuladig.de`: **ECONNREFUSED** (taşıma arızası, ölü değil; curl `000`). Yeniden denenmeli,
  en güçlü aday kaynak bu.
- **Britannica** Cologne/Aachen/Trier: **403**.
- `mjp.univ-perp.fr/constit/1801luneville.htm` **404** (doğrusu `traites/`).
- **TDV:** aranmadı (coğrafya kapsam dışı). Yokluk hükmü yok.

## 8. Kapsam dışı adaylar (ölçülmedi)
- `Mainz` (`yerlesimler_avrupa.js:379`): aynı tek dönem `almanya`; aynı kusur, aynı diff kalıbı uyar.
- `Liège`/`Lüksemburg` Fransız dönemi 1815-06-09'da bitiyor; K2 md. 2 (1792 sınırı) ile 1814-05-30
  daha yakın olabilir. Ölçülmedi.
- Değişmez 2t'nin `kronoloji_sinir_avrupa_bati.js:188`i (haritada karşılığı yok) görüp görmediği.
