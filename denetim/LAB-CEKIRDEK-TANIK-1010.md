# LAB — ÇEKİRDEK TANIĞI: 171 ÖLÇÜLEMEDİ satırına yeni tanık ailesi (TGN historic-site + Wikidata köprüsü) (1010)

## §0 ÖNGÖRÜ (ölçümden ÖNCE)

Zaman damgası: 2026-10-10 07:04:17 +0300. Bu bölüm 171 satır için TGN ya da Wikidata sorgusu yapılmadan yazıldı ve bir daha düzenlenmeyecek.

**Kitle:** LAB-TARIHI-CEKIRDEK-1010'un Ö-Ç1 sonrası 171 ÖLÇÜLEMEDİ satırı (169 + Zadar + Nojpetén).

| sınıf | nokta öngörü | GENİŞ aralık |
|---|---|---|
| DOĞRU-DÖNEM | **%5 (≈9 satır)** | %1–%20 (≈2–34) |
| GERÇEK KUSUR | **%4 (≈7 satır)** | %0,5–%15 (≈1–26) |
| ÖLÇÜLEMEDİ | **%91 (≈155 satır)** | %65–%98 (≈111–168) |

**Gerekçe**
- Geçen tur öngörünün altında kaldım: DOĞRU-DÖNEM %18 öngördüm, %3,6 ölçüldü. Bu yüzden nokta öngörüsü düşük, aralık iki yönde de geniş.
- TGN'nin "historic site / deserted settlement / ruins" kayıtları Avrupa ve Akdeniz'de görece yoğun, Afrika ve Amerika iç bölgelerinde seyrek.
- TGN koordinatları çoğu zaman dakika çözünürlüğünde (≈1,8 km). Bu çözünürlük 1,5 km'lik N ile ve ≈1,9 km'lik ortanca farkla çatışır. Bu yüzden kayıt bulunsa bile çoğu ayırt etmeyecek.
- Wikidata köprüsü ağırlıkla GN modern merkez kimliklerine götürür. Bu kimlikler çekirdek tanığı değil. Pleiades/TGN tarihî-yer kimlikleri ise az satırda çıkar.
- Ö-Ç1 koşulu da DOĞRU-DÖNEM'i daraltır.
- Bu yüzden "%88 kanıtsızlık" payı en fazla birkaç puan düşer: öngörü %91 → ≈%85 (aralık %70–%91).


## §1 TANIMLAR (VERBATIM — değişiklik yalnız §6'da öneri olarak)

- **DOĞRU-DÖNEM:** a relevant-period core witness exists AND it is closer to the atlas point than to the modern centre (Ö-Ç1), within N=1.5 km of the atlas point (report 1/2 km sensitivity).
- **GERÇEK KUSUR:** a relevant-period core witness exists and is clearly NOT at the atlas point (usual witness rules HUKUM-KASA-1010 §6.1–§6.5, §9.4; ≤0.05 km coinciding = one family; resolution coarser than the difference ⇒ ÖLÇÜLEMEDİ).
- **ÖLÇÜLEMEDİ:** no witness, or witness doesn't discriminate.

## §2 YÖNTEM

**Taban ve kitle**
- Taban: `origin/main` @ `c062c1bc0` (10 Eki 2026 07:03). Ayrık worktree `C:\atlas-ctanik`'ten okundu, iş sonunda kaldırıldı.
- Kitle 171 satır: LAB-TARIHI-CEKIRDEK-1010'un ÖLÇÜLEMEDİ 169 satırı + Zadar + Nojpetén.
  - 171 satırın hepsi anahtarla eşleşti. Önceki tura göre **0 koordinat farkı** var.
- `data/`'ya yazılmadı. Commit/push yapılmadı.
- GeoNames API kullanılmadı. Bu turda yeni GN dökümü indirilmedi; önceki turun `gnh` taraması yeniden kullanıldı. Zip dosyası yok.

**Yeni tanık ailesi: TGN (vocab.getty.edu SPARQL)**
- Sorgular ada dayalı (`luc:term`). Satır başına en çok 5 terim kullanıldı: `ad:` ve iddia edilen nesnenin adı.
  - Kutu filtresi: atlas noktası ile iddia edilen nesneyi saran kutu, ±0,08° / ±0,1°.
  - Her sorgu `LIMIT 40`. **OFFSET ile sayfalama yapılmadı.**
- Toplam **304 ad sorgusu** atıldı. **40 sınırına takılan sorgu yok** (CSV `tgn_cap` = hayır, 171/171).
- Köprüden gelen 127 TGN kimliği ayrıca kimlikle çekildi (30'luk VALUES, LIMIT 40).
  - Bir parti tam 40 satır döndü, yani sınıra dayandı. Eksik kalan 9 kimlik 10'luk partilerle yeniden sorgulandı: 1'i geldi; 8'inin TGN'de koordinatı yok, bu yüzden tanık olamaz.
- **Tanık sayılma koşulları** (üçü birden gerekir):
  1. Yer türü historic / deserted / archaeological / fort / castle / ruins / mission / old town / citadel vb. Siyasi ve idari türler dışlandı ("former … political entities", "Diqu", "Empire").
  2. Adı (prefLabel + altLabel) satır adıyla ortak bir kök taşıyor.
  3. Koordinat dakikaya yuvarlak değil. Dakikaya yuvarlak koordinatın çözünürlüğü ≈1,85 km; bu N=1,5 km'den büyük olduğu için §9.4 gereği sayılmadı.

**Wikidata = YALNIZ KÖPRÜ, tanık değil**
- WDQS kesinti nedeniyle "1 istek/dk" sınırı uyguluyordu (HTTP 429). Bu yüzden satır başına sorgu bırakıldı.
  - Yerine **tek bir toplu sorgu** atıldı: P1667 ya da P1584 taşıyan ve P625'i olan tüm öğeler (TGN 97.158, Pleiades 14.997).
- P625, öğeyi **yalnız bulmak** için kullanıldı: A ya da D noktasına ≤3 km. Hiçbir yerde kanıt olarak kullanılmadı.
  - Tanık her zaman hedef gazetteer kaydıdır: TGN SPARQL ya da çevrimdışı Pleiades dökümü.
- P1566 (GN) köprüsü çalıştırılmadı. GN ülke dökümleri her iki noktanın 3,5 km çevresinde zaten doğrudan tarandı; köprü yalnız bu kayıtlara geri götürürdü.
- 1 dk sınırından önce 7 satır için satır başına sorgu atılmıştı. Bu sonuçlar kullanılmadı.

**Hükmün yeni aileye bağlanması**
- Sınıflayıcı önceki turun kurallarıyla iki kez çalıştırıldı: yeni tanıklar olmadan ve yeni tanıklarla.
- Bir satır ÖLÇÜLEMEDİ'den yalnız iki koşul birlikte sağlanırsa çıkar: hüküm **yeni tanık yüzünden** değişmiş olmalı ve sonuç elle gözden geçirilmiş olmalı.
- Önceki el hükümleri korunur: Cincinnati, 28-satır denetiminin 7 ÖLÇ'ü ve Zadar/Nojpetén (Ö-Ç1 koordinatör hükmü).

## §3 SONUÇ (payda 171)

| hüküm | sayı | pay | %95 GA (Wilson) |
|---|---|---|---|
| **DOĞRU-DÖNEM** | **1** | %0,6 | %0,1 – %3,2 |
| **GERÇEK KUSUR** | **0** | %0 | %0 – %2,2 |
| **ÖLÇÜLEMEDİ** | **170** | %99,4 | %96,8 – %99,9 |

**DOĞRU-DÖNEM (1): San Francisco (Misyon San Francisco de Asís)**
- Tanık: TGN 8697993 "San Francisco de Asís Mission" (tür: missions (settlements)). Koordinatı 6 ondalık hassasiyetinde.
- Tanık atlas noktasına **0,52 km**, modern merkeze (GN 5391959, PPLA2) 1,32 km uzakta ⇒ Ö-Ç1 sağlanıyor.
- Nasıl bulundu: TGN ad sorgusu "Asis".
- Önceki turun el notu ("atlas ≈ Mission Dolores, ≈0,5 km") ilk kez bir gazetteer tanığıyla destekleniyor.

**Tanık bulundu ama ayırt etmiyor (ÖLÇÜLEMEDİ kalanlar)**
- **Nojpetén:** TGN 7441537 Tayasal (deserted settlement). Atlasa 0,97 km, Flores'e 1,17 km; ayrım payı ≈0,2 km.
  - Koordinatör hükmü korunur. Mekanik olarak N = 1 / 1,5 / 2 km'de DOĞRU-DÖNEM çıkıyor (bkz. §6 Ö-T1).
- **Forte Príncipe da Beira:** TGN 9087988 iddia edilen nesneye 0,04 km, atlasa 1,14 km.
  - GN kaydıyla arasında 0,02 km var ⇒ tek aile.
  - N = 1,5 km içinde kaldığı için ÖLÇÜLEMEDİ. N = 1,0 km'de GERÇEK KUSUR olur; ama bu önceki turun GN tanığıyla da aynıydı.
- **Sellûm (Fort As Sallūm), Himeji (deserted settl.), Tişît (Tichitt / Ḍahr Tîchît):** tarihî TGN kaydı iki noktaya da >2 km uzakta ⇒ ayırt etmiyor.

**Kaynak verimi**
- TGN kaydı dönen satır: 152/171. Dönen kayıtlar çoğunlukla modern türde: 192 "inhabited places", 50 istasyon, 28 idari birim…
- Tarihî türde ve adı eşleşen TGN kaydı yalnız **6 satırda** çıktı. Bunlardan yalnız 1'i ayırt edici.
- Wikidata köprüsü 92/171 satırda P1667/P1584 taşıyan öğe buldu. Bu öğeler 127 TGN ve 419 Pleiades kimliğine götürdü.
  - **Köprüden kabul edilen tanık: 0.** Köprünün götürdüğü TGN kayıtları modern yerleşim ya da idari birim. Pleiades kayıtları ise adı eşleşmeyen çevre yapılar (Roma kuleleri, Astypalaia kalesi vb.).
  - Pleiades kayıtları önceki turda çevrimdışı dökümden coğrafi olarak zaten taranmıştı.

**Duyarlılık (171 satır, tüm tanıklar)**

| N | DD / GK / ÖLÇ (mekanik) | el ve koordinatör hükümleriyle |
|---|---|---|
| 1,0 km | 2 / 2 / 167 (DD: Nojpetén, SF · GK: Zadar, Forte P.d.Beira) | 1 / 0 / 170 |
| **1,5 km** | 3 / 0 / 168 (DD: SF, Nojpetén, Cincinnati) | **1 / 0 / 170** |
| 2,0 km | 4 / 3 / 164 (DD: +Hakata · GK: Samandıra, Sifnos, Campeche) | 1 / 0 / 170 |

- N = 1 ve 2 km'deki ek DD/GK satırlarının **hiçbiri yeni aileden gelmiyor**. Hepsi önceki turun GN tanıklarının N'e duyarlılığından geliyor.
- Yeni aile yalnız San Francisco'yu değiştiriyor; o da her N'de aynı sonucu veriyor.

## §4 YENİ ADAY TOPLAMI VE KİLİT SAYI

- **ADAY:** Ö-Ç1 sonrası 188 − 1 (San Francisco → DOĞRU-DÖNEM) = **187**. Bunun 17'si GERÇEK KUSUR, 170'i ÖLÇÜLEMEDİ.
- **Toplam YANLIŞ:** 222 → **221** (KESİN 9 / ADAY 187 / ÖLÇ 25). 3988 paydasında %5,57 → **%5,54**.

**🔴 "%88 kanıtsızlık" yeniden hesabı (iki eksen yan yana)**

| ölçü | önceki rapor (193) | Ö-Ç1 sonrası, bu tur ÖNCESİ (188) | bu tur SONRASI (187) |
|---|---|---|---|
| HÜKÜM ekseni: ÖLÇÜLEMEDİ / ADAY | 169/193 = %87,6 | 171/188 = **%91,0** | 170/187 = **%90,9** |
| katı: iki noktada da ilgili-dönem çekirdek tanığı YOK / ADAY | — | 167/188 = **%88,8** | 167/187 = **%89,3** |

- Katı sayıda yeni aile, **tanıksız 167 satırın hiçbirine** 1,5 km içinde tanık getirmedi.
- Katı oran %88,8'den %89,3'e çıkıyor. Tek sebep, tanıklı bir satırın (San Francisco) paydadan çıkması.
- Başlık kuralıyla: **ADAY — SINANMAMIŞ İDDİA (%90,9'unda çekirdek tanığı YOK) = 187** (katı okuma: %89,3). Sayılar HÜKÜM sütunundan okunuyor, mekanik etiketten değil.

**221 toplamına etkisi**
- Kanıtlı kusur yalnız **26 satır (%11,8)**: KESİN 9 + GERÇEK KUSUR 17.
  - GERÇEK KUSUR 17'nin 8'i gazetteer tanığına değil, WP anlatısına dayanan el hükmü.
- **195 satır (%88,2) ölçüm açığı:** ADAY-ÖLÇ 170 + ÖLÇ 25.
- Sonuç: 221 bir "kusur sayısı" olarak okunamaz. 221 = 26 kanıtlı kusur + 195 sınanmamış iddia.
- İkinci bir tanık ailesi (TGN + Wikidata köprüsü) bu açığı **kapatmadı**: 171 satırın yalnız 1'i kapandı (%0,6).

## §5 §0 İLE KARŞILAŞTIRMA

| sınıf | öngörü (aralık) | ölçüm |
|---|---|---|
| DOĞRU-DÖNEM | %5 (%1–%20) | **%0,6** (1) |
| GERÇEK KUSUR | %4 (%0,5–%15) | **%0** |
| ÖLÇÜLEMEDİ | %91 (%65–%98) | **%99,4** |
| kanıtsızlık payı | %91 → ≈%85 (%70–%91) | %91,0 → %90,9 (katı %88,8 → %89,3) |

- **Yine aralığın DIŞINDA kaldım, yine aynı yönde:**
  - DOĞRU-DÖNEM (%0,6) ve GERÇEK KUSUR (%0) alt sınırın altında.
  - ÖLÇÜLEMEDİ (%99,4) üst sınırın üstünde.
- Kanıtsızlık payı aralığın içinde ama üst uçta. Öngördüğüm ≈6 puanlık düşüş gerçekleşmedi.
- **Sebep:** TGN bu satırlar için neredeyse yalnız "inhabited place" kaydı tutuyor, bunlar da çoğunlukla dakika çözünürlüğünde. Tarihî-çekirdek türünde ad eşleşen kayıt yalnız 6 satırda çıktı. Wikidata köprüsü de beklendiği gibi modern kayıtlara götürdü.
- **Ders:** üç turdur yeni tanık ailesinin verimini fazla tahmin ediyorum. Sonraki öngörülerde nokta değer "≈0 değişim" alınmalı.

## §6 ÖNERİLER (AYRI — UYGULANMADI)

- **Ö-T1 (tanım, Ö-Ç1'e ek):** "daha yakın" koşuluna **asgari bir ayrım payı** eklenmesi önerilir: d(çekirdek, merkez) − d(çekirdek, atlas) ≥ 0,5 km.
  - Gerekçe: Nojpetén'de yeni TGN tanığı Ö-Ç1'i mekanik olarak 0,2 km farkla sağlıyor. Koordinatörün "eşit uzaklık" hükmü ancak böyle bir payla mekanikleşir.
- **Ö-T2 (kaynak):** 167 tanıksız satırda gazetteer'ler tükendi.
  - Kalan yol tarihî harita ya da plan gibi birincil kaynaklar. Bu bir çekirdek-tanığı turu değil, ayrı bir kaynak işi.
  - Bu satırların ADAY kovasından ayrı bir **"SINANAMAZ (gazetteer tükendi)"** kovasına alınması önerilir.
- **Ö-T3:** TGN yalnız adla sorgulandı (görev kuralı). Bu yüzden adı farklı tarihî alanlar kaçıyor; San Francisco'daki misyon ancak "Asis" terimiyle yakalandı.
  - Kutu içinde, tür süzgeçli ve adsız bir TGN taraması ayrı bir ölçüm olarak önerilir. Risk: Getty uç noktasında coğrafi indeks yok, sorgu zaman aşımına uğrayabilir.

## §7 DOSYALAR

- Bu rapor ve `denetim/LAB-CEKIRDEK-TANIK-1010.csv` (171 satır). CSV sütunları:
  - `hukum` + `gerekce`, `hukum_1km` / `hukum_2km`
  - mekanik eski/yeni hükümler (1 / 1,5 / 2 km)
  - `tanik_yeni_tarihi`: kimlik, tür, A/D uzaklığı, çözünürlük, nasıl bulundu
  - `tgn_sorgular` (terim:sonuç sayısı, CAP işareti) ve `tgn_cap`
  - `kopru_nasil_buldum` (Wikidata Q → hedef kimlik) ve `kopru_tanik_kabul`
- Scriptler `scratchpad\ctanik\` altında:
  - `dump.py` · `kitle.py`
  - `yakin.py`: Wikidata toplu köprü
  - `getty.py` / `tgnh.py`: TGN sorguları
  - `sinif2.py`: önceki turun `cekirdek\sinif.py` kurallarının üstüne yeni aile + Ö-Ç1
  - `yaz2.py`

## §EK — Ö-T2 bölünmesi

(10 Ekim koordinatör hükmü: **Ö-T2 ONAYLANDI.** Yeni kova **SINANAMAZ** = ilgili dönemin çekirdek tanığı yok. Bu ek rapor yazıldıktan sonra eklendi; §0–§7 metni ve `LAB-CEKIRDEK-TANIK-1010.csv` değiştirilmedi. Satır satır kova ataması ayrı dosyada: `denetim/LAB-KOVA-UZLASTIRMA-1010.csv`, 227 satır = 221 YANLIŞ + 6 DOĞRU-DÖNEM, sütun `kova_1010`.)

**Uzlaştırma (CSV'lerden yeniden sayıldı, doğrulandı):**

`221 = 26 KANITLI (9 KESİN + 17 GERÇEK) + 195 SINANAMAZ  ✔ toplam korunuyor`

- Doğrulama kaynakları: KESİN 9 = `LAB-AYNI-AD-TARAMA-v2-1010-etki.csv` `sinif_ek=KUSUR-KESİN` 8 + Pantelerya. GERÇEK 17 ve ADAY-ÖLÇÜLEMEDİ 170 = `LAB-TARIHI-CEKIRDEK-1010.csv` 193 satırı; buna bu turun `hukum` sütunu ve Ö-Ç1 hükmü (Zadar, Nojpetén) uygulandı, 6 DOĞRU-DÖNEM çıkarıldı. YANLIŞ-CİNS-ÖLÇÜLEMEDİ 25 = v2 `hepsi=YANLIŞ-CİNS-ÖLÇÜLEMEDİ` 17 + 8 eşadlı.
- Kimlik (`i`) tekrarı yok. 227 satırın 227'si tekil.

**KANITLI 26'nın iç bölünmesi (§4 kırmızı çizgi):**

`KANITLI 26 = KESİN 9 + GERÇEK-TANIKLI 9 (17−8) + GERÇEK-VİKİPEDİ-ANLATISI 8`

- **GERÇEK-VİKİPEDİ-ANLATISI (8):** Korçula (Kurzola) · Ayamavra (Lefkada) · Nichicun (HBC iç karakolu) · Jinan · Çuha Adası (Kythira) · Pusan · Krk (Veglia) · Ûicu (Uiju).
  - Sekizi de `LAB-ADAY-YUKSEK-28` `hukum_1010` el hükmünden taşındı. Mekanik sınıflayıcı sekizine de ÖLÇÜLEMEDİ verdi: iki noktada da gazetteer çekirdek tanığı yok.
  - Dikkat: 6'sının `kaynak_url`'si Wikipedia. **Ayamavra** ve **Pusan**'ınki ise GN ülke dökümü. Bu ikisinin GN kaydı modern kasaba ya da şehir; kale ve liman konumu kaynak anlatısına dayanıyor (Ayamavra'da kale sayfası 404, Pusan'da kaynak fetch edilmedi). Bu yüzden ikisi de bu alt kovada. Kova adı "Vikipedi" ama doğru okuma "gazetteer tanığı yok, el anlatısı".
- **GERÇEK-TANIKLI (9):** Mikonos · Limasol · Aden · İleryoz (Leros) · Bozcaada · Zaculeu · Fort Sill · Yamurgi (Amorgos) · Dubrovnik. Bunlarda mekanik sıkı kol, iddia edilen nesnede bir çekirdek tanığı buldu ve sonuç elle onaylandı.
- **KESİN (9):** Ulubat · Zaklise (Zakynthos) · Egina (Aegina) · Tshane · Sanirajak (Hall Beach) · Uqsuqtuuq (Gjoa Haven) · Xieng Khouang · Hvar (Lesina) · Pantelerya.

**SINANAMAZ 195 nereden geldi (kova bölünme beyanı, §3.4⑥):**

| köken | sayı | not |
|---|---|---|
| ADAY-ÖLÇÜLEMEDİ, mekanik (tanık yok ya da ayırt etmiyor) | 160 | `LAB-TARIHI-CEKIRDEK` mekanik ÖLÇ; `LAB-CEKIRDEK-TANIK` turu değiştirmedi |
| ADAY-ÖLÇÜLEMEDİ, 28-satır el hükmü | 7 | Kefalonya · Alonisos · Marmara Adası · Tsabong · Sennar · Kiş · İthaki |
| ADAY-ÖLÇÜLEMEDİ, Ö-Ç1 koordinatör hükmü (DD → ÖLÇ) | 2 | Zadar · Nojpetén |
| ADAY-ÖLÇÜLEMEDİ, el düzeltmesi | 1 | Cincinnati (tek tanık 1843 gözlemevi) |
| *ara toplam ADAY-ÖLÇÜLEMEDİ* | *170* | §4'teki 170 |
| YANLIŞ-CİNS-ÖLÇÜLEMEDİ, v2 | 17 | v2 `hepsi` sınıfı |
| YANLIŞ-CİNS-ÖLÇÜLEMEDİ, eşadlı (28-satır) | 8 | Brakya · Elba · Peşte · Nikarya · Fort Nez Percés · Fort Ross · Fort Langley · Kekionga |
| *ara toplam YANLIŞ-CİNS-ÖLÇÜLEMEDİ* | *25* | |
| **SINANAMAZ** | **195** | |

- **"195" sabit bir sayı değildir.** Üç farklı tür ÖLÇÜLEMEDİ'nin toplamıdır. Ayrıca bir kısmında tanık var ama ayırt etmiyor (§4 katı okuma: ADAY-ÖLÇ 170'in 167'sinde iki noktada da tanık yok). Yeni bir tanık ya da tanım değişikliği bu üç kökeni farklı etkiler; o yüzden sayı her zaman bu tabloyla birlikte okunmalı.
- 221 dışında kalanlar (sayılmadı): DOĞRU-DÖNEM 6 (Fort Laramie · Hille · Częstochowa · Hirosaki · Salvador · San Francisco) · Ö-2 DOĞRU-DÖNEM 3 (Bamako · Tucson · Port of Spain) · Knife River (DOĞRU-CİNS).

**Ö-T1 KOŞULLU — 0,5 km ayrım payı (iki sayı yan yana)**

Koşul: d(çekirdek, modern merkez) − d(çekirdek, atlas) ≥ 0,5 km. A = çekirdek↔atlas, D = çekirdek↔iddia edilen modern merkez (`iddia_dogru_nesne`).
- San Francisco ve Nojpetén-TGN için A/D, `LAB-CEKIRDEK-TANIK-1010.csv` `tanik_yeni_tarihi` sütunundan okundu.
- Diğer satırlarda CSV yalnız A'yı taşıyor (`cekirdek_atlas_1.5km`). Bu satırların D'si önceki turun önbelleğinden (`scratchpad\cekirdek\sonuc.json` + gnh/Ṯ koordinatları, script `otm.py`) aynı `km()` formülüyle hesaplandı. Çekirdek olarak atlasa en yakın sıkı-kol kaydı alındı.

| satır | çekirdek | A | D | D−A | paysız | 0,5 km paylı |
|---|---|---|---|---|---|---|
| Fort Laramie | GN NHS | 0,28 | 2,60 | 2,32 | DD | DD |
| Hille | Ṯ al-Ǧāmiʿān | 0,22 | 2,57 | 2,36 | DD | DD |
| Częstochowa | GN Stare Miasto | 0,46 | 1,46 | 1,00 | DD | DD |
| Hirosaki | GN Jō Ato | 0,43 | 1,68 | 1,25 | DD | DD |
| Salvador | GN Historic Centre | 0,95 | 1,90 | 0,95 | DD | DD |
| San Francisco | TGN Mission | 0,52 | 1,32 | 0,80 | DD | DD |
| Nojpetén | TGN Tayasal / GN Tayasal | 0,97 / 1,24 | 1,17 / 1,70 | **0,20 / 0,45** | mekanik DD, hüküm ÖLÇ (koordinatör) | ÖLÇ (mekanik) |
| Zadar | GN Old Town Centre | 1,11 | 0,13 | −0,98 | ÖLÇ | ÖLÇ |

| DOĞRU-DÖNEM | paysız (Ö-Ç1) | 0,5 km paylı (Ö-T1) |
|---|---|---|
| HÜKÜM ekseni | **6** | **6** |
| mekanik eksen | 7 (6 + Nojpetén) | 6 |

- **0,5 km payla 0 satır DOĞRU-DÖNEM'den ADAY'a düştü (HÜKÜM ekseni).**
- Mekanik eksende 1 satır düştü: **Nojpetén.** Bu satır koordinatör hükmüyle zaten ÖLÇÜLEMEDİ'ydi. Pay, o hükmü mekanikleştiriyor ve iki tanığında da (TGN 0,20 · GN 0,45 km) eşiğin altında kalıyor.
- En dar kalan DD satırı San Francisco (0,80 km). Pay 0,8 km'ye çıkarılırsa sınırda; ≥1,0 km'de San Francisco, Salvador (0,95) ve Częstochowa (1,00, sınırda) tehlikeye girer.
- Ö-2 satırlarında (Bamako · Tucson · Port of Spain) bu CSV'lerde ölçülmüş bir çekirdek–merkez çifti yok. Ö-T1 bu satırlara mekanik olarak uygulanamaz, kapsam dışı.

## §EK — Öngörü kalibrasyonu

- Üç tur üst üste öngörü **aynı yönde** ıskaladı: tanık bulunabilirliği sistematik olarak fazla tahmin edildi.
  - Bu dosya zincirindeki son iki tur: LAB-TARIHI-CEKIRDEK'te DOĞRU-DÖNEM %18 öngörüldü, %3,6 ölçüldü; LAB-CEKIRDEK-TANIK'ta DOĞRU-DÖNEM %5 / GERÇEK KUSUR %4 öngörüldü, %0,6 / %0 ölçüldü. İkisinde de ölçüm aralığın alt sınırının altında (bkz. §5 "üç turdur").
- **Yeni bir tanık ailesi için ölçülmüş taban oran = 1/171 ≈ %0,6.**
- Sonraki öngörü bu taban orandan başlamalı. Daha yüksek bir beklenti varsa gerekçesi açıkça yazılmalı.
- **Wikidata köprüsü:** 92 satır → 127 TGN + 419 Pleiades kimliği → kabul edilen tanık 0; köprüye yeni bütçe ayrılmaz (koordinatör hükmü).
