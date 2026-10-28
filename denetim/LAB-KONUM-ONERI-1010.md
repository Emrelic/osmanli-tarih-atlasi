# LAB-KONUM-ONERI-1010: koordinat düzeltme önerisi (tek commit'e hazır, veri YAZILMADI)

> **Yalnız öneri.** `data/` dokunulmadı (KOŞU 22 için donuk). Commit ve push yapılmadı.
> **Taban:** `origin/main` @ `ab9aa9571` (ayrık worktree `C:\atlas-konumoneri`; iş bitince kaldırıldı). Dosya:satır değerleri bu tabandan okundu.
> **Girdi:** `LAB-KONUM-KUSURU-1010.md` (9ca1dba4 ölçümü) ve scratch'teki tanık dökümleri (al-Ṯurayyā 2.521 · Pleiades 34.878). TGN bu turda SPARQL ile ID üzerinden yeniden okundu. GeoNames sayfaları bu turda yeniden okundu.
> **Tanık kuralı (HUKUM-KASA-1010 §6, 10 Ekim güncellemesi):** Ortaçağ sitesi için ikinci tanık şarttır. Bir tanığın okuması, o tanığın kendi hatası biliniyorsa sayılır. al-Ṯurayyā'nın hatası medyan 2,9 km, p90 8,7 km'dir. Bu yüzden Ṯ tek tanık olarak ancak ≥10 km farkta sayılır. Wikipedia tanık sayılmaz ve bu çalışmada kullanılmadı.

## Dosyalar

| dosya | içerik |
|---|---|
| `LAB-KONUM-ONERI-1010.json` | 10 kalem, makine okunur: `{dosya, satir, ad, grup, uygula, eski, yeni, eski_metin, yeni_metin, fark_km, secim_kurali, tanik[], modern_kasaba_taniği}`. `uygula=true` olan 7 kalem aşağıdaki diff'le birebir aynıdır |
| `LAB-KONUM-ONERI-1010.diff` | **7 kalem** (3 KESİN + 4 YAN-KESİN), yalnız kaynak dosyalar: `data/yerlesimler.js` (5), `data/yerlesimler_asya.js` (1), `data/yerlesimler_h2_kuzeyafrika.js` (1). `git apply --check` ab9aa9571'e karşı **GEÇTİ** |
| `LAB-KONUM-ONERI-1010-kusayr-secenekA.diff` | Kusayr için yalnız A seçeneği (TGN). **Karar koordinatörde.** `--check` GEÇTİ |
| `LAB-KONUM-ONERI-1010-ikame-tasi-secenegi.diff` | Tahran ve Şibînülkûm için yalnız "koordinatı taşı" seçeneği. **Karar koordinatörde.** `--check` GEÇTİ |

Üç diff birbirinin satırına dokunmuyor. Üçü birlikte de temiz uygulanıyor (sınandı: 4 dosya, 10 satır). Uygulamadan sonra worktree `git checkout .` ile temizlendi.

### Uygulama sırası (tek commit)
```
git apply denetim/LAB-KONUM-ONERI-1010.diff        # + istenirse kusayr / ikame diff'leri
py arac/paketle.py yenile                          # paket_13 / paket_14 kopyaları
py arac/paketle.py sina
```
🔴 **Main'de paketler ZATEN BAYAT (bizim değişiklikten bağımsız).** Temiz ab9aa9571 üzerinde `paketle.py sina` şunu veriyor: `PAKET İÇERİĞİ KAYNAKLA UYUŞMUYOR: paket_13, paket_14, paket_22, paket_23`. Kaynaklar yerlesimler_h2_kuzeyafrika, ek27, ek29, ok107, anadolu_0914. Bu yüzden paket satırlarını diff'e koymadım. `yenile` komutu bu birikmiş farkı da getiriyor (9 dosya, +131/−177). Commit'e bu farkın da gireceğini bilin.
⚠️ `data/altlik.js` ve petek çıktıları eski koordinatı taşıyor. Bunlar KOŞU ürünü; bir sonraki koşuda yeniden üretilmeleri gerekir. Elle düzenlenmedi.
Yeni 10 koordinatın hepsi `veri-kaynak/motor_kara.geojson` içinde, yani karada (sınandı). Hiçbirinin 20 km içinde başka bir atlas noktası yok.

---

## A · UYGULANACAK 7 KALEM (diff'te)

**Seçim kuralı (her kalemde aynı):** Pleiades `precise` temsil noktası varsa o alınır. Yoksa TGN alınır, en son al-Ṯurayyā. Seçilen nokta denizde kalıyorsa, tanıkların gösterdiği tarihî çekirdeğin bugünkü gazetteer kaydı alınır (yalnız Maskat'ta gerekti). Koordinatlar 4 haneye yuvarlandı.

| # | ad · dosya:satır | ESKİ (dosyadaki metin) | YENİ | fark km | tanıklar (eski→ / yeni→ km) | gerekçe | etki (etki.csv, Voronoi yaklaşığı) |
|---|---|---|---|---|---|---|---|
| 1 | **Merv (Mari)** · `data/yerlesimler.js:2274` | `lat:37.5936, lon:61.8333` | **37.6767, 62.1620** | **30,42** | Pleiades [990688484](https://pleiades.stoa.org/places/990688484) Sultan Kala (mediaeval) 30,42/0 · TGN [7012244](http://vocab.getty.edu/page/tgn/7012244) Merv (deserted) 32,53/3,11 · Ṯ MARW_621E376N_S 25,40/5,15 · modern: GeoNames [1218667](https://www.geonames.org/1218667) Mary 0,3 km eski noktaya | Nokta modern Mary'de duruyor. Üç tarihî tanık 30 km doğudaki Sultan Kala'yı gösteriyor | 1238 moğol: simetrik fark **19.764 km²**, moğol +7.644 · 1300 ilhanlı: 11.232 km², ilhanlı +6.807 / çağatay −3.728 |
| 2 | **Turfan** · `data/yerlesimler_asya.js:2430` | `lat:42.9510, lon:89.1900` | **42.8550, 89.5286** | **29,61** | Pleiades [999273476](https://pleiades.stoa.org/places/999273476) Gaochang 29,60/0,01 · TGN [6003062](http://vocab.getty.edu/page/tgn/6003062) Gaochang (deserted) 29,76/0,34 · modern: GeoNames [1529114](https://www.geonames.org/1529114) Turpan 1,0 | Nokta modern Turpan'da. İki tanık 0,3 km farkla Koço/Gaochang'da birleşiyor | 1300 çağatay: 7.247 km² (çağatay +225 / yuan −328) · 1500 moğolistan: 7.247 km² |
| 3 | **Maskat** · `data/yerlesimler.js:1042` | `lat:23.588, lon:58.408` | **23.6147, 58.5938** | **19,18** | TGN [7018048](http://vocab.getty.edu/page/tgn/7018048) Masqat 23,20/4,04 · Ṯ MASQAT_586E235N_S 23,80/9,01 · konumlandırıcı: GeoNames [11669735](https://www.geonames.org/11669735) "Old Muscat" 19,19/0 · modern: GeoNames [287286](https://www.geonames.org/287286) Muscat 0,4 (Bawshar) | Nokta bugünkü başkent bölgesinde (Bawshar). İki tarihî tanık ~23 km doğudaki eski limanı gösteriyor. ⚠️ **TGN noktası denizde** (motor_kara dışında, kıyıdan 1,7 km): TGN 1′ yuvarlamalı. Bu yüzden iki tanığın gösterdiği tarihî çekirdeğin bugünkü kaydı alındı | 1300 nebhânî: 1.763 km² (sahip değişmiyor) |
| 4 | **Tâif** · `data/yerlesimler.js:1463` | `lat:21.437, lon:40.513` | **21.2700, 40.4160** | **21,14** | Pleiades [869702585](https://pleiades.stoa.org/places/869702585) 21,14/0 · TGN [1084782](http://vocab.getty.edu/page/tgn/1084782) 21,43/0,37 · GeoNames [107968](https://www.geonames.org/107968) 21,12/0,04 · Ṯ TAIF_404E212N_S 26,97/6,07 | Kent ile tarihî site aynı yerde. Nokta ikisinden de ~21 km kuzeyde duruyor (YAN-KESİN: ne modern ne tarihî yerde) | 1300 memlük: 9.002 km² · 1660: osmanlı-tâbi −786 / osmanlı +786 |
| 5 | **Hürmüz Adası** · `data/yerlesimler.js:1712` | `lat:26.861, lon:56.366` | **27.0673, 56.4603** | **24,80** | Pleiades [30251](https://pleiades.stoa.org/places/30251) Organa (island) 24,79/0 · TGN [8891531](http://vocab.getty.edu/page/tgn/8891531) Jazīreh-ye Hormoz 24,71/0,49 · TGN [7017464](http://vocab.getty.edu/page/tgn/7017464) Hormoz 25,25/4,67 · **yanlış ada:** TGN [1007774](http://vocab.getty.edu/page/tgn/1007774) Lārak, eski noktaya 2,9 km | Nokta Lârek adasında duruyor. İki tanık Hürmüz adasının temsil noktasında uyuşuyor | 1300 hürmüz: 5.920 km², hürmüz **+3.775** / ilhanlı **−3.867** |
| 6 | **Silifke** · `data/yerlesimler.js:215` | `lat:36.309, lon:33.938` | **36.3793, 33.9215** | **7,96** | Pleiades [648771](https://pleiades.stoa.org/places/648771) Seleucia ad Calycadnum 7,96/0 · GeoNames [300808](https://www.geonames.org/300808) 7,66/1,17 | Kent ile antik site aynı yerde. Nokta ~8 km güneyde, deltada | 1300 karaman: 532 km² (karaman +186 / kilikya −155) |
| 7 | **Tırgan (Traghan)** · `data/yerlesimler_h2_kuzeyafrika.js:457` | `lat:26.130, lon:14.470` | **25.9610, 14.4339** | **19,16** | Pleiades [354161](https://pleiades.stoa.org/places/354161) Traghen 19,16/0 · GeoNames [2210242](https://www.geonames.org/2210242) Tarāghin 23,53/4,40 | Nokta iki tanığın da ~20 km kuzeyinde. Tanıklar arası 4,4 km. Kural gereği Pleiades seçildi | 1300 kanem-bornu: 3.214 km² |

**Kalem notları (karar gerektirmez, commit mesajına girebilir):**
- **Turfan:** Taşıma, pencerenin başı için doğru (1281'den 14. yüzyıla kadar başkent Koço/Gaochang). 15. yüzyıldan sonra modern Turfan'ın konumu doğru olabilir. Kayıttaki `kd` 1347–1680 Moğolistan merkezi "Turfan" diyor. Bölünme (iki ayrı nokta) bir tarih kaynağı ister; bu turda verilmedi.
- **Hürmüz Adası:** Önerilen nokta adanın temsil noktasıdır. Tarihî kasaba ve Portekiz kalesi adanın kuzey ucunda, bu noktadan ~3–4 km uzaktadır. Bu konum için gazetteer tanığı bulunamadı, bu yüzden önerilmedi. ~1300'den önceki Eski Hürmüz anakaradaydı (Ṯ HURMUZ_569E270N_S, Pleiades 29586 Harmozeia). O ayrı bir noktadır ve bu öneriye girmedi.
- **Maskat:** Seçilen GeoNames "Old Muscat" kaydı tarihî tanık değil, konumlandırıcıdır. Taşıma kararını TGN ve Ṯ veriyor (ikisi de ≥23 km). Old Muscat ile tanıklar arası mesafe 4,0 km (TGN) ve 9,0 km (Ṯ); ikisi de o tanığın bilinen hata bandının içinde.

---

## B · KUSAYR: tanıklar çelişiyor. Karar koordinatörün, aşağıdaki yalnız tavsiyedir

| | koordinat | eski noktaya (26.104, 34.283) | not |
|---|---|---|---|
| TGN [6004056](http://vocab.getty.edu/page/tgn/6004056) Al Quşayr al Qadīm | 26.15, 34.25 | **6,09** | tür: *deserted settlements*. Koordinat 0,05° adımlı (~±3 km) |
| Pleiades [786069](https://pleiades.stoa.org/places/786069) "Myos Hormos?" | 26.156611, 34.24401 | **7,03** | precise; dönem roman, late-antique, modern |
| al-Ṯurayyā QUSAYR_342E261N_S | 26.10673, 34.27748 | 0,63 | tür *villages*. Modern kasabayı veriyor |
| modern: TGN [7029532](http://vocab.getty.edu/page/tgn/7029532) Quseir | 26.1, 34.283 | 0,4 | atlas noktası modern kasabada |

`dosya:satır` = `data/yerlesimler_afrika.js:308` · ESKİ `lat:26.104, lon:34.283` · A seçeneği `26.1500, 34.2500` (6,09 km).

**Değerlendirme:**
1. **TGN ile Pleiades bağımsız mı?** Kısmen. Tanıklar arası 0,95 km. İkisi de aynı arkeolojik alana (Quseir al-Qadim kazısı) işaret ediyor. Pleiades bu alanı antik Myos Hormos ile özdeşleştiriyor ve özdeşleştirmeyi "**?**" ile işaretliyor. Soru işareti alanın KONUMUNA değil ADINA ilişkin: alanın Myos Hormos olup olmadığı tartışmalı, alanın orada olduğu tartışmalı değil. Pleiades'in dönem anahtarları (roman, late-antique) Memlük/Osmanlı limanını kapsamıyor. Bu yüzden Pleiades kaydı bizim penceremiz için bir **konum** tanığıdır, **dönem** tanığı değildir.
2. **Ṯ'nın aksi okuması ne kadar ağır?** Ṯ'nın p90'ı 8,7 km. 6–7 km'lik bir fark Ṯ'nın kendi hatası içinde kalır. Bu yüzden Ṯ'nın "modern kasaba" okuması iki tanığı **çürütemez**. Ama aynı sebeple Ṯ'nın okuması tek başına "taşı" demeye de yetmezdi. Ṯ burada nötr kalıyor.
3. **Dönem sorusu belirleyici.** Quseir al-Qadim'deki kazılar ikinci bir yerleşim evresi gösteriyor: Eyyûbî/Memlük limanı (~12.–15. yy). Kayıt penceresi 1281'de başlıyor; o dönem eski liman kullanımdaydı. Modern Kusayr (Osmanlı kalesi 16. yy) ise pencerenin geri kalanını temsil ediyor. ⇒ Bu bir *nokta yanlış* vakası olmaktan çok *nokta zaman içinde taşınmış* vakasıdır, Turfan'ın küçük ölçekli eşidir. Bu cümlenin kaynağı arkeoloji literatürüdür; bu turda izinli bir kaynakla teyit EDİLMEDİ.
4. **Etki küçük:** simetrik fark 836 km², sahip değişimi yok.

**Tavsiye:** Kusayr'ı bu commit'e **koymayın**. Gerekçe: TGN+Pleiades uyumu konum için yeterli. Ama taşımanın doğru olduğu dönem (Memlük limanı mı, Osmanlı kalesi mi) bir tarih kaynağı istiyor. 6 km'lik taşıma da motor çıktısını neredeyse değiştirmiyor. Koordinatör yine de taşımak isterse `-kusayr-secenekA.diff` hazır. B seçeneği Pleiades noktasıdır (26.1566, 34.2440; 7,03 km). İki seçenek arası fark 0,95 km, yani önemsiz.

---

## C · İKAME (2): nokta modern kenti temsil ediyor, bölgenin tarihî merkezi başka bir kent. Seçenekler sunuluyor, karar verilmedi

### C1 · Tahran → Rey
`data/yerlesimler.js:1348` · ESKİ `lat:35.69, lon:51.39` · ilk `s:` 1281 (ilhanlı), `kd` 1618–1923 k:1 (Kacar başkenti).
Tanıklar (Rey): Pleiades [903104](https://pleiades.stoa.org/places/903104) Rhaga/Ray 35.594267, 51.447163 (eski noktaya 11,85 km) · TGN [7002140](http://vocab.getty.edu/page/tgn/7002140) Rayy 35.5833, 51.4167 (12,12; Pleiades'e 3,02) · Ṯ RAYY_515E356N_S 35.62754, 51.50831 (12,76; Pleiades'e 6,65). **Depoda zaten bir öneri var:** `data/yer_yama.js:532` `eksik_nokta:{ad:"Rey (Ray)", enlem:35.5931, boylam:51.4342}` (Iranica). Bu nokta Pleiades'e 1,18 km uzakta.
Etki (taşı seçeneği): 1300 ilhanlı 2.265 km² · 1500 akkoyunlu −426.

| seçenek | ne yapar | artı | eksi |
|---|---|---|---|
| **(a) taşı** (`-ikame-tasi-secenegi.diff`, 35.5943, 51.4472) | Tahran noktası Rey'e kayar | tek satır | 1789–1923 Kacar başkenti yanlış yerde kalır (12 km). Kayıt adı "Tahran" kalır. Tahran köyü pencerenin başında da vardı ⇒ ad ile konum çelişir |
| **(b) ayrı Rey noktası, kendi dönemiyle** | yeni kayıt `Rey (Ray)`, `s:` ufkun başı (1000) → tahrip/terk; Tahran 1281'den kalır | iki kentin gerçek tarihi ayrı tutulur. `yer_yama.js:532` önerisi zaten bu yönde | Rey'in bitiş yılı ve sahiplik zinciri için kaynak gerekir (1220 Moğol tahribi; sonrası küçük kasaba). Yeni nokta = yeni petek ⇒ daha büyük diff |
| **(c) dokunma** | Tahran 1281+ için zaten doğru | sıfır risk | 1000–1280 penceresinde Rey yok |

### C2 · Şibînülkûm (Menûfiye) → Menûf
`data/yerlesimler_afrika.js:115` · ESKİ `lat:30.552, lon:31.011` · k:3, ilk `s:` 1281.
Tanıklar (Menûf): GeoNames [352354](https://www.geonames.org/352354) Munūf 30.465974, 30.931991 (eski noktaya 12,21 km) · Ṯ MANUF_309E304N_S 30.45505, 30.9195 (13,91; GeoNames'e 1,71). Menûf bugün de duran ve sürekliliği olan bir kent. Bu yüzden GeoNames burada hem modern hem tarihî konumun tanığıdır. Ṯ ≥10 km ⇒ iki tanık uyuşuyor.
Etki (taşı): 1300 memlük, simetrik fark 3.264 km² (hücre 4.867→7.592).

| seçenek | ne yapar | artı | eksi |
|---|---|---|---|
| **(a) taşı** (30.4660, 30.9320) | nokta Menûf'a kayar | Memlük/Osmanlı Menûfiye merkezi doğru yerde olur | merkez Şibînülkûm'e taşındıktan (19. yy) sonrası yanlış yerde kalır. Kayıt adı "Şibînülkûm" kalır |
| **(b) ayrı Menûf noktası** | Menûf: ufuk başı → merkez taşınma yılı. Şibînülkûm: o yıldan sonra | doğru zaman bölünmesi | taşınma yılı için kaynak yok (bu turda aranmadı). Nil deltasında petekler zaten sık |
| **(c) yeniden adlandır + kd** | kaydı "Menûf" yap, Şibînülkûm'ü ayrı ekle | (b)'nin eşdeğeri | `yer_yama_*` ve `yer_yama_vassal_kid_0906.js:180` ad referansları değişir ⇒ en riskli seçenek |

---

## EK · 9 ölçülemeyen site, KASA TGN tanığı

*(Bu ek bu dosyaya kondu, çünkü bu 9 site 4300'lük evrenden geliyor; 89'luk listeden değil.)*
TGN değerleri KASA'nın 10 Ekim SPARQL okumasından alındı (tür = `placeTypePreferred`). Pleiades ve Ṯ dökümleri bu 9 site için 150 km içinde ad eşleşmesi **vermedi** (yeniden sınandı) ⇒ hepsinde TGN tek tanıktır. GeoNames yalnız "atlas modern yerde mi" sorusu için kullanıldı.

| site · dosya:satır (ab9aa9571) | atlas | TGN | km | ek bilgi | kova |
|---|---|---|---|---|---|
| **Gaur (Lakhnautî)** · `data/yerlesimler_asya.js:949` | 24.8680, 88.1330 | [7574110](http://vocab.getty.edu/page/tgn/7574110) ruins 24.8688, 88.1264 | **0,7** | tarihî site kaydı | **TEMİZ-ÖLÇÜLDÜ** (tek tanık, ≤5 km) |
| **Saray (Selitrennoye)** · `data/yerlesimler_h2_rusya.js:377` | 47.183, 47.700 | [6004395](http://vocab.getty.edu/page/tgn/6004395) "Sarai" lost settlements 47.6, 46.8 (0,1° yuvarlamalı) | **82,2** | GeoNames [497701](https://www.geonames.org/497701) Selitrennoye köyü 47.1685, 47.4526: atlasa **18,8 km**, TGN'ye 68,8 km | **ÇELİŞKİLİ.** TGN noktası kaydın kendi adı olan Selitrennoye'den 69 km uzakta ⇒ TGN'nin bu okuması güvenilmez, tanık sayılmadı. ⚠️ Ayrı bulgu: atlas noktası adını taşıdığı köyden 18,8 km doğuda. Bu bir YAN-tipi kusur adayıdır ve tarihî site tanığı ister (Pleiades/Ṯ'da yok) |
| **Yeni Saray (Tsarev)** · `data/yerlesimler_h2_rusya.js:381` | 48.688, 45.383 | [6004219](http://vocab.getty.edu/page/tgn/6004219) "New Sarai" lost settlements 48.67, 45.47 | **6,7** | atlas modern köyde: GeoNames [481090](https://www.geonames.org/481090) Tsarev 2,9 km · TGN [8840578](http://vocab.getty.edu/page/tgn/8840578) modern "Saray" köyü 2,5 km (KASA uyarısı: karıştırılmamalı) | **ADAY (tek tanık).** TGN'nin hata dağılımı ölçülmedi; tek TGN 6,7 km öneriye girmez |
| **Sultâniye** · `data/yerlesimler.js:1848` | 36.4318, 48.7970 | [7029795](http://vocab.getty.edu/page/tgn/7029795) inhabited place 36.383, 48.728 | **8,2** | GeoNames [117799](https://www.geonames.org/117799) Soltaniyeh kasabası atlasa **0,3 km**, TGN'ye 8,2 km. Tarihî site kasabanın içinde | **TEMİZ (TGN hatası).** TGN aynı kasabayı 8,2 km kaydırmış ⇒ bu bir TGN koordinat hatası örneği; kusur değil |
| **Kazan** · `data/yerlesimler.js:1138` | 55.796, 49.106 | [7015156](http://vocab.getty.edu/page/tgn/7015156) modern şehir 55.75, 49.1667 | **6,4** | GeoNames [551487](https://www.geonames.org/551487) atlasa 1,3, TGN'ye 5,1 km | **ÖLÇÜLEMEDİ.** TGN'de yalnız modern şehir var. İske Kazan sorusu yanıtsız; 6,4 km yine bir TGN yuvarlama/temsil farkı |
| **Hotan** · `data/yerlesimler_asya.js:2408` | 37.1170, 79.9280 | [1139089](http://vocab.getty.edu/page/tgn/1139089) "Hetian" modern 37.1075, 79.9355 | 1,2 | Yotkan kaydı yok | **ÖLÇÜLEMEDİ** (tanık modern kenti doğruluyor, tarihî siteyi değil) |
| **Almalık (Almalığ)** · `data/yerlesimler_ortaasya3.js:203` | 44.0500, 80.8500 | yalnız [8573073](http://vocab.getty.edu/page/tgn/8573073) "Almali" 43.4222, 83.5128 = **YANLIŞ YER** | 225,3 | Huocheng [8202204](http://vocab.getty.edu/page/tgn/8202204) idari birim 44.05, 80.8167: 2,7 km (site değil) | **ÖLÇÜLEMEDİ** |
| **Sığnak (Sunak Kurgan)** · `data/yerlesimler_ortaasya3.js:436` | 44.0500, 67.0500 | kayıt yok (Suzak 1059966 başka yer) | — | — | **ÖLÇÜLEMEDİ** |
| **Katye** · `data/yerlesimler_afrika.js:181` | 30.940, 32.633 | yalnız [7540394](http://vocab.getty.edu/page/tgn/7540394) "Bir Qatia" kuyular 30.9667, 32.75 | 11,6 | Memlük menzili ile özdeşliği teyit edilmedi | **ÖLÇÜLEMEDİ.** En çok ADAY-ZAYIF olur; tanık sayılmadı |

**Sonuç:** 9 sitenin hiçbiri iki tanık + ≥5 km şartını karşılamıyor ⇒ **hiçbiri JSON'a veya diff'e girmedi.** Dağılım: 2 TEMİZ (Gaur; Sultâniye, burada hata TGN'de) · 1 ADAY (Yeni Saray) · 1 ÇELİŞKİLİ (Saray) · 5 ÖLÇÜLEMEDİ.
**Yan bulgu (TGN'nin hatası):** Sultâniye (8,2 km) ve Kazan (5,1 km GeoNames'e) vakalarında TGN *inhabited place* kayıtları aynı kenti 5–8 km kaydırıyor. Merv'de de TGN Pleiades'ten 3,1 km, Maskat'ta 4,0 km uzakta ve noktası denizde. ⇒ TGN'nin 0,01–0,1° yuvarlamalı kayıtları için ayrı bir hata ölçümü yapılmadan **tek TGN ≥5 km sinyal sayılmamalı**. Öneri: Ṯ için kullanılan kural TGN için de ölçülsün (Pleiades ≤1,5 km uyumlu noktalarda TGN'nin uzaklık dağılımı). Ölçülmeden kural önerilmiyor.

---

## Öngörü ve ölçüm
Bu tur bir ölçüm değil, ölçülmüş kusurların paketlenmesi. Ayrı öngörü yazılmadı. Beklenmeyen tek bulgu Maskat'taki TGN noktasının denizde çıkması oldu. Main'deki bayat paket durumu da görev dışı bir bulgudur.
