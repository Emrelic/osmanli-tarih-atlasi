# LAB — AYNI-AD / YANLIŞ-CİNS TARAMASI (1010)

## §0 ÖNGÖRÜ (ölçümden ÖNCE)

Zaman damgası: 2026-10-10T04:15:41+03:00 — hiçbir ölçüm yapılmadan, worktree açılmadan, dump indirilmeden yazıldı. Bu bölüm sonradan DÜZENLENMEZ.

Varsayılan evren: ~4300 nokta.

| Sınıf | Öngörü (nokta) |
|---|---|
| DOĞRU-CİNS | ~1500 |
| CİNS-BELİRSİZ | ~2300 |
| YANLIŞ-CİNS toplam | ~500 |
| — YANLIŞ-CİNS-KESİN | ~40 |
| — YANLIŞ-CİNS-ADAY | ~300 |
| — YANLIŞ-CİNS-ÖLÇÜLEMEDİ | ~160 |

Yanlış-cins türüne göre (YANLIŞ-CİNS toplamı içinde, ~500):

| Yanlış cins | Öngörü |
|---|---|
| idari bölge / ADM | ~200 |
| modern mahalle / PPLX | ~80 |
| nehir/dağ/doğal öğe | ~80 |
| ada (kayıt kale/şehir iken) | ~30 |
| müze/anıt | ~25 |
| demiryolu istasyonu | ~20 |
| otel/konaklama | ~15 |
| havalimanı | ~5 |
| diğer | ~45 |

KESİN içindeki öngörü dağılımı: kategorik (otel/havalimanı/istasyon/müze) ~25, kategorik-olmayan ≥5 km ~15.
Kaynaksız s: hipotezi öngörüsü: YANLIŞ-CİNS oranı kaynaksız kayıtlarda kaynaklılara göre ~1.5× (oran oranı GA alt sınırı 1'in üstünde).
Hvar öngörüsü: KESİN (otel kategorisi).


<!-- §0 sabit; aşağıdakiler ölçümden SONRA eklendi -->

---

> **Yalnız ölçüm.** `data/`'ya yazılmadı (KOŞU 22 çalışıyor), commit/push yok.
> **Taban:** `origin/main` @ `2ce5dc315`, ayrık worktree `C:\atlas-ayniad` (iş sonunda kaldırıldı). Nokta evreni `girdi.yukle()` = **4300**. `denetle.py::kaynaksizlik_olc` sonucu: `s_tasiyan 4148 · kayit_kaynaksiz 2301 · donem_ici 460 · hicbiri 1841`. "Kaynaksız s:" = **`hicbiri` (1841)**, yani denetle'nin "kaynaksız `s:` kaydı" diye bastığı sayı.
> **CSV:** `denetim/LAB-AYNI-AD-TARAMA-1010.csv` (4300 satır). Kolonlar: sınıf · alt-kova · yanlış cins · eşleşen kayıt (kaynak/id/fc/km) · doğru-nesne tanıkları · aile · km aralığı · ortak-kaynak notu · kaynaksızlık bayrakları.
> **Scriptler:** `scratchpad\ayniad\`: `dump.py` (nokta + kaynaksızlık) · `ortak.py` (ad varyantları, `arac/ad_esanlam.py::sadelestir` üstüne) · `gn_tara.py` (GeoNames dökümü) · `pl_th.py` (Pleiades/Ṯ) · `tgn.py` (TGN) · `sinif.py` (sınıflama) · `rapor.py`.

## §1 SINIF TANIMLARI, VERBATIM (uygulanan tanımın kendisi, değiştirilmedi)

- **YANLIŞ-CİNS-KESİN:** atlas coordinate ≤1 km from a gazetteer record with the SAME/near-same name but of a WRONG KIND relative to the record's own tur:/ad: claim, AND the correct object located by ≥2 independent witness families with distance ≥5 km — OR the matched wrong-kind record is categorically incompatible with any historic settlement object (hotel/lodging, airport, railway station, museum) and the correct object is located by ≥2 families at any distance ≥1 km (coordinator's ruling on Hvar: "a hotel cannot be a castle or a town" ⇒ object error, not a distance question).
- **YANLIŞ-CİNS-ADAY:** wrong-kind match ≤1 km, but correct object has only one witness family, or distance <5 km for non-categorical wrong kinds (island, admin district, river/mountain, modern neighbourhood).
- **YANLIŞ-CİNS-ÖLÇÜLEMEDİ:** wrong-kind match ≤1 km, correct object not locatable by any accepted witness.
- **DOĞRU-CİNS:** nearest same-name record ≤1 km is of the right kind.
- **CİNS-BELİRSİZ:** no same-name record ≤1 km, or kind cannot be determined. ("not found" ≠ "doesn't exist" — §3.)

Etiket, eşiğiyle birlikte okunur: **KESİN = ≥2 bağımsız aile ∧ ≥5 km (kategorik olmayan) / ≥1 km (otel·havalimanı·istasyon·müze).** Hiçbir eşik değiştirilmedi.

### §1.1 Tanımı uygularken verdiğim mekanik kararlar (beyan: bunlar tanım DEĞİŞİKLİĞİ değil, okuma biçimi)
1. **"En yakın" kuralı:** ≤1 km'deki aynı-ad kayıtlardan cinsi *nötr* olanlar atlanır (ör. `liman` kaydı için ada; Pleiades `findspot/unknown`; Ṯ `xroads/quarters`). Kararı, cinsi belli olan ilk kayıt verir.
2. **Tanım boşluğu:** en yakın kayıt yanlış cins, ama **doğru-cins aynı-ad kayıt da ≤1 km'de**. Kategorik olmayanlarda tanım harfiyen ADAY der (mesafe <5 km). Kategoriklerde (doğru nesne <1 km) hiçbir sınıf tutmuyor. İkisini de **ADAY** içinde, `doğru-cins kayıt da ≤1 km (tanım boşluğu)` alt-kovasıyla tuttum: beş sınıf aynen kalsın, boşluk da görünsün. **208 nokta** (bkz. §6 öneri).
3. **"Bağımsız aile":** GeoNames · Pleiades · al-Ṯurayyā · TGN dört ayrı ailedir. İki ailenin tanık noktası **≤0,05 km** çakışıyorsa **tek aile** sayıldı. Ölçüldü: 6 vakada GN ↔ TGN koordinatı ondalığına kadar aynı (Puri, Jinan, Port Lincoln, Bairnsdale, Marree, Ikela), ortak NGA/GNS kökenli. Bu, tanımdaki "independent" kelimesinin uygulanmasıdır. Uygulanmasaydı KESİN **10** olurdu (bu 6 eklenirdi).
4. **§6.2 aynı nesne:** aileler ancak tanık noktaları birbirine **≤10 km** ise "aynı nesneyi gösteriyor" sayıldı (Ṯ p90 8,7 km).
5. **§9.4:** TGN `inhabited places` kaydı `tur:kale` için tanık sayılmadı. **Dakika-yuvarlak** TGN koordinatı (lat·60 ve lon·60 tama ±0,02) hiçbir kayıt için tanık sayılmadı. 124 TGN satırının 82'si yuvarlaktı.
6. **§6.1:** yalnız Ṯ tanıklı ve <10 km olan ADAY'lar "gürültü" diye alt-etiketlenecekti. Bu taramada **0** vaka çıktı.
7. **§6.3 İKAME:** pencerenin birden çok nesneyi kapsayıp kapsamadığı mekanik olarak ÖLÇÜLMEDİ. Hiçbir KESİN/ADAY satırı "taşı" önerisi değildir.
8. **§6.4 iç yüz:** "doğru cins", kaydın kendi `tur:`'una göre okundu:
   - `sehir/kasaba/koy/kale`: yerleşim + kale/harabe/tarihî site doğru. Yanlış: ada · idari · doğal · PPLX · L-alan · R-yol · başka S-yapı · 4 kategorik.
   - `liman`: yerleşim + liman yapısı (H.HBR, L.PRT, iskele) doğru, ada nötr.
   - `bolge/konfederasyon`: yalnız 4 kategorik yanlış, gerisi doğru ya da nötr.
   - `ad:` içindeki "Adası", "Kalesi" gibi cins sözcükleri ayrıca işaretlenmedi.
9. **Ad eşleşmesi:** `ad` + parantez içi alternatifler + `ad_esanlam.js` eşanlamları. Parantez içi bir ad başka bir atlas kaydının çekirdek adıysa ve o kayıt >20 km uzaktaysa **ayırt edici** sayılıp eşleşmeden çıkarıldı (ör. `Yenişehir (Bursa)` → "bursa" kullanılmadı). "Near-same" = cins sözcükleri (Airport, Station, Hotel, Nisí, Otok, Dimos, İlçesi, Kalesi …) atıldıktan sonra eşitlik.

## §2 SONUÇ: öngörü ↔ ölçüm

| Sınıf | §0 öngörü | **ölçüm** |
|---|---|---|
| DOĞRU-CİNS | ~1500 | **2252** |
| CİNS-BELİRSİZ | ~2300 | **1690** (1684'ünde ≤1 km aynı-ad kaydı yok · 6'sında yalnız nötr kayıt) |
| YANLIŞ-CİNS toplam | ~500 | **358** |
| KESİN | ~40 | **4** |
| ADAY | ~300 | **338** (130'u tek aile ya da 2+ aile eşik altı · **208'i tanım boşluğu**) |
| ÖLÇÜLEMEDİ | ~160 | **16** |

Yanlış cinse göre (YANLIŞ-CİNS = 358):

| Yanlış cins | §0 | **ölçüm** (KESİN / ADAY / ÖLÇ.) | ADAY'ın tanım-boşluğu payı |
|---|---|---|---|
| idari bölge / ADM | ~200 | **155** (1 / 151 / 3) | 110 |
| demiryolu istasyonu | ~20 | **54** (2 / 52 / 0) | 35 |
| havalimanı | ~5 | **46** (1 / 44 / 1) | 21 |
| ada (kale/şehir/kasaba/köy için) | ~30 | **25** (0 / 20 / 5) | 0 |
| diğer: başka yapı (S) | ~45 ("diğer") | **25** (0 / 25 / 0) | 13 |
| otel/konaklama | ~15 | **17** (0 / 17 / 0) | 12 |
| nehir/dağ/doğal öğe | ~80 | **17** (0 / 14 / 3) | 6 |
| modern mahalle / PPLX | ~80 | **7** (0 / 5 / 2) | 4 |
| müze/anıt | ~25 | **6** (0 / 5 / 1) | 5 |
| diğer: alan/bölge (L) | ("diğer") | **6** (0 / 5 / 1) | 2 |

KESİN içi: §0 "kategorik ~25 · kategorik olmayan ~15" dedi, ölçüm **kategorik 3 · kategorik olmayan 1**.

Öngörünün en büyük çürümesi ÖLÇÜLEMEDİ (160 → 16) ve KESİN (40 → 4) oldu. Yanlış-cins eşleşmesi çıkan noktaların neredeyse hepsinde doğru-cins aynı-ad kaydı da *bulunuyor*. Sorun "doğru nesne yok" değil: doğru nesne ya çok yakın (≤1–2 km) ya da tek aileli. Havalimanı (5 → 46) ve istasyon (20 → 54) öngörüden büyük çıktı: Arktik, Afrika ve Amazon'daki küçük yerleşimlerde GeoNames'in "X Airport" kaydı yerleşimle aynı adı taşıyor ve 0,1–1 km'de duruyor.

## §3 KESİN: 4 nokta (adıyla)

| Ad | tur | yanlış cins: eşleşen kayıt | doğru nesne tanıkları | kaynaksız? |
|---|---|---|---|---|
| **Zaklise (Zakynthos)** | kale | idari: GN 8133854 *Dimos Zakynthos* A.ADM3 **0,52 km** | PL 531154 settlement/arch. **10,58** · GN 251280 PPLA2 **10,63** km | evet |
| **Ahvaz** | sehir | istasyon: GN 144447 *Īstgāh-e Rāh-e Āhan-e Ahvāz* S.RSTN 0,69 | GN 144448 PPLA 1,43 · PL 912865 1,49 km | evet |
| **Rabat** | liman | istasyon: GN 11185341 *Rabat Railway Station* S.RSTN 0,69 | GN 2538475 PPLC 1,16 · PL 275696 2,39 km | hayır |
| **Sanirajak (Hall Beach)** | sehir | havalimanı: GN 6296301 *Hall Beach Airport* S.AIRP 0,10 | GN 5969475 PPLL 1,62 · TGN 7593721 2,12 km | hayır |

⚠️ **Etiket tanımıyla birlikte okunur:** Ahvaz ve Rabat **kategorik kolun ≥1 km eşiğiyle** KESİN çıktı. İkisinde de atlas noktası büyük bir şehrin merkez istasyonuna 0,7 km, GN şehir centroid'ine 1,2–1,4 km uzakta, yani şehrin İÇİNDE. Bu ikisinde "nesne hatası" iddiası **zayıf**; sonucu tanım üretiyor (bkz. §6). Zaklise gerçek bir KAPSAYAN-KAYIT vakası (§6.4b deseni): nokta adanın ilçe centroid'inde, kale/kasaba 10,6 km doğuda. Sanirajak'ta nokta pistin üstünde, yerleşim 1,6–2,1 km uzakta.

### §3.1 Hvar sağlaması: **KESİN ÇIKMADI, ADAY (tek aile)**
```
eşleşme      GN 10236444 "Hvar" S.HTL (otel)  0,21 km   ← kategorik yanlış cins: TUTUYOR
doğru nesne
  GN         3199180 Hvar P.PPLA2             20,80 km  ← 1. aile
  TGN        7015484 Hvar inhabited places    18,96 km  ← SAYILMADI: (a) tur:kale için inhabited (§9.4)
                                                           (b) 43.1833/16.4667 dakika-yuvarlak (§9.4)
  Pleiades   Hvar kasabası / Fortica kaydı YOK (Pharos 197433 = Stari Grad, başka nesne)
  Ṯ          kayıt yok (bölge dışı)
⇒ aile sayısı 1 < 2  ⇒  tanım gereği ADAY
```
Kategorik kol **mesafe şartını** kaldırıyor, **iki aile şartını kaldırmıyor.** Hvar ancak ikinci bir kabul edilmiş aile bulunursa KESİN olur: ör. Fortica/Španjola kalesi için TGN `forts` kaydı ya da Pleiades'te ortaçağ Lesina kaydı. Bu turda aranıp bulunamadı (TGN'de "Hvar" 2 satır, "Lesina" 4 satır döndü). Bu "yok" değil, "bulunamadı"dır.
Aynı sebeple önceki ADA taramasında KESİN çıkan Krk burada ADAY (GN 6,13 km, tek aile). Pantelerya bu taramada ≤1 km'de aynı-ad *yanlış cins* eşleşmesi vermedi.


## §4 KAYNAKSIZ `s:` ÇAPRAZ TABLOSU (koordinatörün hipotezi)

Evren: `s:` taşıyan 4148 kayıt. Kaynaksız = `kaynaksizlik_olc` → `hicbiri` (1841). YANLIŞ-CİNS = KESİN + ADAY + ÖLÇÜLEMEDİ. (`s:` taşımayan 152 kaydın 1'i YANLIŞ-CİNS-ÖLÇÜLEMEDİ; tabloya girmedi.)

| | YANLIŞ-CİNS | değil | n | oran |
|---|---|---|---|---|
| **kaynaksız (hicbiri)** | 142 | 1699 | 1841 | **7,7 %** |
| **kaynaklı** | 215 | 2092 | 2307 | **9,3 %** |

**Oran oranı (RR) = 0,83 · %95 GA 0,68–1,01** (log-Wald). ⇒ **YANLIŞ-CİNS kaynaksız kayıtlarda YOĞUNLAŞMIYOR.** Nokta tahmini ters yönde, GA 1'i kıl payı içeriyor. §0 öngörüm RR ≈ 1,5 idi: **çürüdü.**

Duyarlılık (aynı etiketler, farklı evren/ölçüt):

| varyant | kaynaksız | kaynaklı | RR (%95 GA) |
|---|---|---|---|
| yalnız cinsi ölçülebilenler (CİNS-BELİRSİZ hariç) | 142/1079 = 13,2 % | 215/1523 = 14,1 % | 0,93 (0,77–1,14) |
| tanım-boşluğu ADAY'ları hariç (208 nokta) | 52/1751 = 3,0 % | 97/2189 = 4,4 % | **0,67 (0,48–0,93)** |
| kaynaksız = `kayit_kaynaksiz` (2301) | 180/2301 = 7,8 % | 177/1847 = 9,6 % | 0,82 (0,67–0,995) |
| yalnız KESİN | 2/1841 | 2/2307 | (n çok küçük, hesaplanmadı) |

⚠️ **Karıştırıcı, beyan:** kaynaksız kayıtlar gazetteer'de daha az bulunuyor (CİNS-BELİRSİZ payı **%41,4** ↔ kaynaklılarda **%34,0**). Yani "kaynaksız ⇒ daha az yanlış cins" kısmen "kaynaksız ⇒ adı daha az eşleşiyor" demek. Ölçülebilenlerle sınırlayınca fark kayboluyor (RR 0,93). Dürüst okuma: **iki grup arasında fark yok; kaynaksızlık bu kusur sınıfını öngörmüyor.**
📌 **Yemen (KAMPANYA-SUMER-2000 §11):** oradaki korelasyon **sahiplik** (s: zinciri) hatasıydı, koordinat-cinsi değil. Bu ölçüm onu ne doğrular ne çürütür. İki farklı soru: "kaynaksız s: bir yanlışlık tahmini mi?" sorusu **egemenlik** için açık kalıyor (`KAYNAKSIZ-ORNEKLEM-1010`). **Koordinatın nesnesi** için ise bu tabloya göre hayır. Yemen kutusundaki 20 noktadan yalnız **Kemeran (Kamaran)** YANLIŞ-CİNS çıktı (ADAY, ada, kaynaksız). Taiz · Ebha · Mukalla · Aseb DOĞRU-CİNS; Hudeyde · Sana · Moha · Aden vd. CİNS-BELİRSİZ.

## §5 LİSTELER (adıyla)

Biçim: `Ad (eşleşen kaynak id fc km → doğru nesne km [aileler])`. ᴷ = kaynaksız `s:` (hicbiri). Tam satırlar CSV'de.

### YANLIŞ-CİNS-KESİN — adıyla, yanlış cinse göre

**demiryolu istasyonu — 2**

- Rabat (GN 11185341 S.RSTN 0.69 km → doğru nesne 1.16–2.39 km [GN+PL])
- Ahvaz (GN 144447 S.RSTN 0.69 km → doğru nesne 1.43–1.49 km [GN+PL]) ᴷ

**idari bölge/ADM — 1**

- Zaklise (Zakynthos) (GN 8133854 A.ADM3 0.52 km → doğru nesne 10.58–10.63 km [GN+PL]) ᴷ

**havalimanı — 1**

- Sanirajak (Hall Beach) (GN 6296301 S.AIRP 0.10 km → doğru nesne 1.62–2.12 km [GN+TGN])


### YANLIŞ-CİNS-ADAY — adıyla, yanlış cinse göre

**idari bölge/ADM — 151**

- *tek aile* (34): Ikela (GN 216030 A.ADM3 0.52 km → doğru nesne 18.05 km [GN] · ortak-kaynak: TGN) · Jinan (GN 1805751 A.ADM2 0.47 km → doğru nesne 11.12 km [GN] · ortak-kaynak: TGN) ᴷ · Bamako (GN 2460594 A.ADM1 0.00 km → doğru nesne 5.28 km [GN]) · Xiangyang (GN 1790585 A.ADM2 0.53 km → doğru nesne 4.27 km [GN]) ᴷ · İpsara (Psara) (GN 8133829 A.ADM3 0.70 km → doğru nesne 4.11 km [GN]) · Cehol (Chengde) (GN 2038086 A.ADM4 0.44 km → doğru nesne 3.15 km [GN]) ᴷ · Kingston (GN 3489853 A.ADM1 0.84 km → doğru nesne 2.87 km [GN]) ᴷ · Fort Edmonton (GN 11807182 A.ADM2 0.57 km → doğru nesne 2.81 km [GN]) · Oruro (Villa de San Felipe de Austria) (GN 11494547 A.ADM3 0.26 km → doğru nesne 2.54 km [GN]) · Fesi (Feshi) (GN 2315819 A.ADM3 0.83 km → doğru nesne 2.46 km [GN]) · Koçbaba (Serifos) (GN 8133682 A.ADM3 0.09 km → doğru nesne 2.16 km [GN]) ᴷ · Hopedale (Agvituk) (GN 12874586 A.ADM2 0.57 km → doğru nesne 2.04 km [GN]) · Lin'an (Jianshui) (GN 10259841 A.ADM4 0.59 km → doğru nesne 1.94 km [GN]) · Delhi (GN 8335421 A.ADM2 0.58 km → doğru nesne 1.75 km [GN]) · Lubutu (GN 210959 A.ADM3 0.52 km → doğru nesne 1.70 km [GN]) · Częstochowa (GN 7530964 A.ADM2 0.17 km → doğru nesne 1.63 km [GN]) · Dubrovnik (GN 7577034 A.ADM2 0.15 km → doğru nesne 1.57 km [GN]) · Gisborne (GN 2190766 A.ADM2 0.49 km → doğru nesne 1.53 km [GN]) · Invercargill (GN 2189530 A.ADM1H 0.48 km → doğru nesne 1.50 km [GN]) · Ayacyo (Ajaccio) (GN 6452235 A.ADM4 0.77 km → doğru nesne 1.49 km [GN]) ᴷ · Mbarara (Nkore) (GN 7732072 A.ADM3 0.33 km → doğru nesne 1.41 km [GN]) · Victoria (Fort Victoria) (GN 12031879 A.ADM3 0.63 km → doğru nesne 1.32 km [GN]) · Akra (GN 98820 A.ADM2 0.17 km → doğru nesne 1.30 km [GN]) · Salvador (Bahia) (GN 6321026 A.ADM2 0.97 km → doğru nesne 1.18 km [GN]) ᴷ · Bathurst (Banjul) (GN 2413875 A.ADM1 0.48 km → doğru nesne 1.13 km [GN]) · Arequipa (GN 8350798 A.ADM3 0.28 km → doğru nesne 1.11 km [GN]) ᴷ · Bytown (Ottawa) (GN 8581623 A.ADM2 0.35 km → doğru nesne 1.10 km [GN]) · Nauru (Yaren) (GN 2110418 A.ADM1 0.04 km → doğru nesne 1.07 km [GN]) · Uluborlu (GN 8632176 A.ADM2 0.28 km → doğru nesne 1.05 km [GN]) ᴷ · Rivne (Równe) (GN 9289988 A.ADM2 0.87 km → doğru nesne 1.03 km [GN]) · Tulagi (GN 12041887 A.ADM2 0.93 km → doğru nesne 1.03 km [GN]) · İzyum (GN 9197254 A.ADM2 0.86 km → doğru nesne 1.02 km [GN]) · Şavşat (GN 8631400 A.ADM2 0.92 km → doğru nesne 1.01 km [GN]) ᴷ · Arhavi (GN 8631449 A.ADM2 0.70 km → doğru nesne 1.00 km [GN]) ᴷ

- *2+ aile ama < 5 km* (7): Nio (İos) (GN 8133833 A.ADM3 0.25 km → doğru nesne 4.22–4.30 km [GN+PL]) ᴷ · Kulluk (Salamis) (GN 8133766 A.ADM3 0.28 km → doğru nesne 2.98–4.35 km [GN+PL]) ᴷ · Palu (GN 8631570 A.ADM2 0.92 km → doğru nesne 1.52–1.70 km [GN+PL]) · Roma (GN 3169071 A.ADM3 0.29 km → doğru nesne 1.50–1.77 km [GN+PL]) ᴷ · Lyon (GN 6454573 A.ADM4 0.44 km → doğru nesne 1.29–1.53 km [GN+PL]) ᴷ · Zadar (Zara) (GN 11055010 A.ADM2 0.29 km → doğru nesne 1.07–1.15 km [GN+PL]) · Zaragoza (GN 6362983 A.ADM3 0.42 km → doğru nesne 1.06–1.18 km [GN+PL])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (110): Mesudiye (Milas) (GN 8631642 A.ADM2 0.15 km → doğru nesne 0.98 km [GN]) · Pasuruan (GN 1632031 A.ADM2 0.92 km → doğru nesne 0.98 km [GN]) ᴷ · Ambovombe (Antandroy) (GN 8693313 A.ADM2 0.83 km → doğru nesne 0.97 km [GN]) · Benî Mellâl (GN 6546819 A.ADM3 0.63 km → doğru nesne 0.96 km [GN]) ᴷ · el-Menîa (El Goléa) (GN 11203916 A.ADM2 0.08 km → doğru nesne 0.94 km [GN]) · Aksaray (GN 7732073 A.ADM2 0.78 km → doğru nesne 0.90–1.10 km [GN+PL]) · Kabinda (GN 215522 A.ADM3 0.52 km → doğru nesne 0.90 km [GN]) · Özalp (Saray) (GN 8630847 A.ADM2 0.56 km → doğru nesne 0.90 km [GN]) · Moroto (GN 7732233 A.ADM3 0.42 km → doğru nesne 0.89 km [GN]) · Sarh (Fort-Archambault) (GN 7732978 A.ADM2 0.41 km → doğru nesne 0.89 km [GN]) · Bengkulu (Bencoolen) (GN 1649147 A.ADM1 0.71 km → doğru nesne 0.88 km [GN]) ᴷ · Mulhouse (GN 6441541 A.ADM4 0.17 km → doğru nesne 0.88 km [GN]) ᴷ · Toulon (GN 6612862 A.ADM4 0.71 km → doğru nesne 0.85 km [GN]) ᴷ · Nancy (GN 6454307 A.ADM4 0.09 km → doğru nesne 0.85 km [GN]) ᴷ · Beyrut (GN 276780 A.ADM1 0.69 km → doğru nesne 0.85–1.91 km [GN+PL]) · Yogyakarta (GN 1621175 A.ADM2 0.55 km → doğru nesne 0.85 km [GN]) ᴷ · Masindi (GN 8644149 A.ADM3 0.76 km → doğru nesne 0.83 km [GN]) · Çemişgezek (GN 8631582 A.ADM2 0.18 km → doğru nesne 0.83–2.00 km [GN+PL]) · Nairobi (GN 7667649 A.ADM2 0.00 km → doğru nesne 0.83 km [GN]) · Stuttgart (GN 6690189 A.ADM4 0.41 km → doğru nesne 0.83–4.62 km [GN+PL]) ᴷ · Maseru (GN 11428652 A.ADM2 0.63 km → doğru nesne 0.81 km [GN]) · Breslau (Wrocław) (GN 7531292 A.ADM3 0.34 km → doğru nesne 0.81 km [GN]) ᴷ · Rocky Mountain House (GN 11807325 A.ADM2 0.26 km → doğru nesne 0.80 km [GN]) · Bilbao (GN 6362368 A.ADM3 0.32 km → doğru nesne 0.79 km [GN]) · Grenoble (GN 6454071 A.ADM4 0.22 km → doğru nesne 0.79–1.26 km [GN+PL]) ᴷ · Vecde (Oujda) (GN 11878986 A.ADM3 0.76 km → doğru nesne 0.79 km [GN]) ᴷ · Yalta (GN 8449687 A.ADM2 0.27 km → doğru nesne 0.78 km [GN]) ᴷ · Temeşvar (GN 8334795 A.ADM2 0.40 km → doğru nesne 0.77 km [GN]) · Gemena (GN 2315727 A.ADM3 0.37 km → doğru nesne 0.77 km [GN]) · Foggia (GN 6541857 A.ADM3 0.45 km → doğru nesne 0.77 km [GN]) ᴷ · Lisala (GN 211732 A.ADM3 0.74 km → doğru nesne 0.76 km [GN]) · Herat (GN 9166336 A.ADM2 0.01 km → doğru nesne 0.75–1.33 km [GN+PL]) · Sion (Sitten) (GN 7287176 A.ADM3 0.48 km → doğru nesne 0.75 km [GN]) · Mosi (Moshi) (GN 8299555 A.ADM2 0.25 km → doğru nesne 0.74 km [GN]) · Kabalo (GN 215667 A.ADM3 0.37 km → doğru nesne 0.69 km [GN]) · Kassel (GN 6547484 A.ADM4 0.41 km → doğru nesne 0.69 km [GN]) ᴷ · Varna (GN 726048 A.ADM2 0.33 km → doğru nesne 0.69–0.88 km [GN+PL]) ᴷ · Erzincan (GN 315372 A.ADM1 0.68 km → doğru nesne 0.68–1.21 km [GN+PL]) · Digor (GN 8631364 A.ADM2 0.31 km → doğru nesne 0.67 km [GN]) · Kerç (GN 8449692 A.ADM2 0.65 km → doğru nesne 0.66 km [GN]) ᴷ · Zamość (GN 7532192 A.ADM3 0.39 km → doğru nesne 0.66 km [GN] · ortak-kaynak: PL) · Caen (GN 6427109 A.ADM4 0.10 km → doğru nesne 0.66–0.69 km [GN+PL]) ᴷ · Bergamo (GN 6542116 A.ADM3 0.62 km → doğru nesne 0.65–0.79 km [GN+PL]) · Limoges (GN 6451740 A.ADM4 0.06 km → doğru nesne 0.64–1.12 km [GN+PL]) ᴷ · Diinsoor (GN 9179677 A.ADM2 0.47 km → doğru nesne 0.63 km [GN]) ᴷ · Silopi (GN 438989 A.ADM2 0.45 km → doğru nesne 0.63 km [GN]) · Sapporo (GN 2128291 A.ADM2 0.61 km → doğru nesne 0.61 km [GN]) ᴷ · Tarija (GN 11494535 A.ADM3 0.52 km → doğru nesne 0.61 km [GN]) · Fort Portal (Toro) (GN 7732226 A.ADM3 0.35 km → doğru nesne 0.61 km [GN]) · Hunayfire (Khenifra) (GN 2544331 A.ADM2 0.32 km → doğru nesne 0.60 km [GN]) ᴷ · İhtiman (GN 730918 A.ADM2 0.05 km → doğru nesne 0.58 km [GN]) ᴷ · Torun (Toruń) (GN 7532549 A.ADM3 0.51 km → doğru nesne 0.58 km [GN]) ᴷ · Flensburg (GN 6551295 A.ADM4 0.50 km → doğru nesne 0.57 km [GN]) ᴷ · Alacahisar (Kruševac) (GN 788974 A.ADM3 0.31 km → doğru nesne 0.56 km [GN]) ᴷ · Bolgrad (Bolhrad) (GN 711842 A.ADM2 0.39 km → doğru nesne 0.53 km [GN]) · Ravenna (GN 6540121 A.ADM3 0.36 km → doğru nesne 0.53–0.57 km [GN+PL]) ᴷ · Bayanhongor (GN 6619073 A.ADM2 0.15 km → doğru nesne 0.52 km [GN]) ᴷ · Tours (GN 6454060 A.ADM4 0.28 km → doğru nesne 0.51–0.72 km [GN+PL]) ᴷ · Ljubljana (GN 3239318 A.ADM1 0.43 km → doğru nesne 0.51–0.55 km [GN+PL]) · Hokitika (GN 2189871 A.ADM1H 0.51 km → doğru nesne 0.51 km [GN]) · Hannover (GN 6559065 A.ADM4 0.38 km → doğru nesne 0.51 km [GN]) ᴷ · Loja (GN 10793173 A.ADM3 0.39 km → doğru nesne 0.49 km [GN]) · Böğürdelen (Šabac) (GN 3343732 A.ADM3 0.27 km → doğru nesne 0.49–0.65 km [GN+PL]) ᴷ · Pamplona (GN 6359749 A.ADM3 0.14 km → doğru nesne 0.49–0.57 km [GN+PL]) ᴷ · Graz (GN 7871499 A.ADM3 0.46 km → doğru nesne 0.47 km [GN]) · Cizre (GN 438774 A.ADM2 0.34 km → doğru nesne 0.46–0.55 km [GN+PL]) · Erfurt (GN 6549746 A.ADM4 0.39 km → doğru nesne 0.45 km [GN]) ᴷ · Lozan (GN 7286283 A.ADM3 0.21 km → doğru nesne 0.45 km [GN]) ᴷ · Hoima (Bunyoro) (GN 8644142 A.ADM3 0.04 km → doğru nesne 0.44 km [GN]) · Rēzekne (Rositten) (GN 11352806 A.ADM2 0.34 km → doğru nesne 0.43 km [GN]) · Prome (Pyay) (GN 11154312 A.ADM3 0.42 km → doğru nesne 0.43 km [GN]) ᴷ · Boma (GN 2316700 A.ADM3 0.00 km → doğru nesne 0.42 km [GN]) ᴷ · Vezzân (Ouezzane) (GN 11282023 A.ADM2 0.33 km → doğru nesne 0.41 km [GN]) ᴷ · Menorka (Mahon) (GN 6533953 A.ADM3 0.35 km → doğru nesne 0.41 km [PL]) · Papeete (GN 10295213 A.ADM2 0.34 km → doğru nesne 0.40 km [GN]) · Kemah (GN 8631610 A.ADM2 0.39 km → doğru nesne 0.40–0.57 km [GN+PL]) · Poitiers (GN 6445329 A.ADM4 0.38 km → doğru nesne 0.39–0.61 km [GN+PL]) ᴷ · Valladolid (GN 6362308 A.ADM3 0.38 km → doğru nesne 0.38 km [GN+PL]) · Bordo (GN 6455058 A.ADM4 0.04 km → doğru nesne 0.38 km [GN]) ᴷ · Caçu (GN 6323930 A.ADM2 0.32 km → doğru nesne 0.37 km [GN]) · Kelkit (GN 8631619 A.ADM2 0.18 km → doğru nesne 0.36 km [GN]) · Dijon (GN 6453767 A.ADM4 0.14 km → doğru nesne 0.35–0.62 km [GN+PL]) ᴷ · La Rochelle (GN 6455645 A.ADM4 0.08 km → doğru nesne 0.34 km [GN]) ᴷ · Fülek (Fiľakovo) (GN 12057339 A.ADM3 0.28 km → doğru nesne 0.34 km [GN]) · Rennes (GN 6432801 A.ADM4 0.06 km → doğru nesne 0.34–0.53 km [GN+PL]) ᴷ · Annemasse (GN 6451007 A.ADM4 0.25 km → doğru nesne 0.33 km [GN]) · Lübeck (GN 3249071 A.ADM3 0.18 km → doğru nesne 0.33 km [GN]) ᴷ · Angers (GN 6452361 A.ADM4 0.18 km → doğru nesne 0.31–0.65 km [GN+PL]) ᴷ · Lille (GN 6454414 A.ADM4 0.16 km → doğru nesne 0.29 km [GN]) ᴷ · Aix-en-Provence (GN 6452134 A.ADM4 0.27 km → doğru nesne 0.29–0.44 km [GN+PL]) ᴷ · Bastia (Korsika) (GN 6448138 A.ADM4 0.05 km → doğru nesne 0.26 km [GN]) ᴷ · Leipzig (GN 6548737 A.ADM4 0.22 km → doğru nesne 0.26 km [GN]) ᴷ · Metz (GN 6454365 A.ADM4 0.11 km → doğru nesne 0.25–0.26 km [GN+PL]) ᴷ · Palermo (GN 6542127 A.ADM3 0.05 km → doğru nesne 0.24–0.92 km [GN+PL]) ᴷ · Split (Spalato) (GN 3190259 A.ADM2 0.00 km → doğru nesne 0.23–0.54 km [GN+PL]) · Gölköy (Habsamana) (GN 8631634 A.ADM2 0.12 km → doğru nesne 0.22 km [GN]) · Sydney (GN 6619279 A.ADM2 0.14 km → doğru nesne 0.21 km [GN]) · Udbina (GN 11049294 A.ADM2 0.11 km → doğru nesne 0.20 km [GN]) · Cahors (GN 6449211 A.ADM4 0.07 km → doğru nesne 0.20–0.37 km [GN+PL]) ᴷ · Avignon (GN 6455379 A.ADM4 0.19 km → doğru nesne 0.19–0.24 km [GN+PL]) ᴷ · Feldkirch (GN 7873741 A.ADM3 0.13 km → doğru nesne 0.18 km [GN]) · St. Vith (Sankt Vith) (GN 2787316 A.ADM4 0.12 km → doğru nesne 0.17 km [GN]) · Suruç (GN 8630789 A.ADM2 0.12 km → doğru nesne 0.15–0.24 km [GN+PL]) ᴷ · Narbonne (GN 6453642 A.ADM4 0.09 km → doğru nesne 0.11–0.13 km [GN+PL]) ᴷ · Nikki (Borgu) (GN 11790013 A.ADM3 0.00 km → doğru nesne 0.08 km [GN]) · Nagoya (GN 1856053 A.ADM2 0.07 km → doğru nesne 0.07 km [GN]) ᴷ · Edo (Tokyo) (GN 1850144 A.ADM1 0.06 km → doğru nesne 0.06 km [GN]) ᴷ · Montpellier (GN 6454034 A.ADM4 0.03 km → doğru nesne 0.05 km [GN]) ᴷ · Knin (GN 11054516 A.ADM2 0.05 km → doğru nesne 0.05 km [GN]) · Nürnberg (GN 6556832 A.ADM4 0.02 km → doğru nesne 0.04 km [GN]) ᴷ

**demiryolu istasyonu — 52**

- *tek aile* (17): Lopburi (GN 9198961 S.RSTN 0.56 km → doğru nesne 3.66 km [GN]) ᴷ · Chicago (Fort Dearborn) (GN 8593788 S.RSTN 0.38 km → doğru nesne 3.53 km [GN]) · Lutsk (Łuck) (GN 702566 S.RSTN 0.64 km → doğru nesne 2.11 km [GN]) · Bairnsdale (GN 8829143 S.RSTN 0.26 km → doğru nesne 1.89 km [GN] · ortak-kaynak: TGN) · Montreal (Ville-Marie) (GN 8604593 S.RSTN 0.23 km → doğru nesne 1.77 km [GN]) ᴷ · Puri (GN 11861340 S.RSTN 0.96 km → doğru nesne 1.76 km [GN] · ortak-kaynak: TGN) ᴷ · Jyväskylä (GN 11978378 S.RSTN 0.42 km → doğru nesne 1.35 km [GN]) · Vladivostok (TGN 9107396 istasyon 0.56 km → doğru nesne 1.23 km [GN]) ᴷ · Vladimir (GN 7042439 S.RSTN 0.96 km → doğru nesne 1.15 km [GN]) ᴷ · Bhopâl (GN 1275840 S.RSTN 0.97 km → doğru nesne 1.14 km [GN]) ᴷ · Xochimilco (GN 11560960 S.MTRO 0.78 km → doğru nesne 1.12 km [GN]) ᴷ · Jasenovaç (Jasenovac) (GN 3215462 S.RSTP 0.75 km → doğru nesne 1.12 km [GN]) · Quebec (GN 8504573 S.RSTN 0.62 km → doğru nesne 1.12 km [GN]) ᴷ · Madras (Chennai) (GN 1274959 S.RSTN 0.70 km → doğru nesne 1.06 km [GN]) ᴷ · Bhâgalpûr (GN 11861535 S.RSTN 0.57 km → doğru nesne 1.02 km [GN]) ᴷ · Maoka (Kholmsk) (GN 12141491 S.RSTN 0.91 km → doğru nesne 1.01 km [GN]) · Tsumeb (GN 3352592 S.RSTN 0.89 km → doğru nesne 1.00 km [GN])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (35): Hakodate (GN 2130187 S.RSTN 0.60 km → doğru nesne 0.99 km [GN]) ᴷ · Sena (GN 1027097 S.RSTN 0.74 km → doğru nesne 0.97 km [GN]) · Daugavpils (Dünaburg) (GN 10629640 S.RSTN 0.51 km → doğru nesne 0.94 km [GN]) ᴷ · Winton (GN 8827596 S.RSTN 0.79 km → doğru nesne 0.94 km [GN]) · Taegu (Daegu) (GN 7902005 S.RSTN 0.59 km → doğru nesne 0.91 km [GN]) ᴷ · Sterlitamak (GN 7045245 S.RSTN 0.25 km → doğru nesne 0.91 km [GN]) ᴷ · Ceduna (GN 8827929 S.RSTN 0.21 km → doğru nesne 0.91 km [GN]) · Xinyang (GN 1903428 S.RSTN 0.43 km → doğru nesne 0.91 km [GN]) · Freiburg (GN 11002083 S.RSTN 0.14 km → doğru nesne 0.83 km [GN]) ᴷ · Emerald (GN 8827006 S.RSTN 0.37 km → doğru nesne 0.81 km [GN]) · Beaufort West (GN 1020640 S.RSTN 0.31 km → doğru nesne 0.80 km [GN]) · Bîdar (GN 11858109 S.RSTN 0.67 km → doğru nesne 0.75 km [GN]) ᴷ · Okahandja (GN 11821144 S.RSTN 0.43 km → doğru nesne 0.75 km [GN]) · Mantova (GN 10626710 S.RSTN 0.66 km → doğru nesne 0.72–0.73 km [GN] · ortak-kaynak: PL) ᴷ · Toyohara (Vladimirovka) (GN 2119440 S.RSTN 0.10 km → doğru nesne 0.72 km [GN]) · Croydon (GN 8827812 S.RSTN 0.29 km → doğru nesne 0.68 km [GN]) · Glasgow (GN 6952651 S.RSTN 0.57 km → doğru nesne 0.66 km [GN]) ᴷ · Ostrovica (Stara Ostrovica, Kulen Vakuf) (GN 3271322 S.RSTNQ 0.35 km → doğru nesne 0.61 km [GN]) · Barcaldine (GN 8827127 S.RSTN 0.19 km → doğru nesne 0.61 km [GN]) · Sasari (Sassari) (GN 11126645 S.RSTN 0.48 km → doğru nesne 0.59 km [GN]) · Dumfries (GN 6952484 S.RSTN 0.34 km → doğru nesne 0.54 km [GN]) ᴷ · Plymouth (GN 6953345 S.RSTN 0.20 km → doğru nesne 0.50 km [GN]) ᴷ · Bourg-Saint-Maurice (GN 8288152 S.RSTN 0.20 km → doğru nesne 0.49 km [GN]) · Edinburg (GN 6952537 S.RSTN 0.11 km → doğru nesne 0.48 km [GN]) ᴷ · Blackall (GN 8827452 S.RSTN 0.45 km → doğru nesne 0.48 km [GN]) · Ulm (GN 6254964 S.RSTN 0.32 km → doğru nesne 0.44 km [GN]) ᴷ · Bari (GN 3182346 S.RSTN 0.18 km → doğru nesne 0.42–1.36 km [GN+PL]) ᴷ · Carlisle (GN 6952236 S.RSTN 0.23 km → doğru nesne 0.41 km [GN]) ᴷ · Oslo (GN 6692410 S.RSTN 0.23 km → doğru nesne 0.33 km [GN]) · Pine Creek (GN 8826970 S.RSTN 0.31 km → doğru nesne 0.33 km [GN]) · Luzern (GN 8199054 S.RSTN 0.05 km → doğru nesne 0.28 km [GN]) ᴷ · Abrene (Pıtalovo) (GN 584363 S.RSTN 0.04 km → doğru nesne 0.27 km [GN]) · San Luis de la Paz (GN 3985620 S.RSTN 0.18 km → doğru nesne 0.22 km [GN]) · Perth (GN 8829399 S.RSTN 0.08 km → doğru nesne 0.21 km [GN]) · Nijmegen (GN 6640058 S.RSTN 0.06 km → doğru nesne 0.08–0.48 km [GN+PL]) ᴷ

**havalimanı — 44**

- *tek aile* (23): Kiş (Kish) (TGN 8992844 havalimani 0.21 km → doğru nesne 5.35 km [GN]) ᴷ · Tikiġaq (Point Hope) (GN 5871776 S.AIRP 0.18 km → doğru nesne 2.68 km [GN]) · Ulundi (Zululand) (GN 6296933 S.AIRP 0.39 km → doğru nesne 2.47 km [GN]) · Tabatinga (GN 6300678 S.AIRP 0.41 km → doğru nesne 2.41 km [GN]) · Oxford House (GN 7668134 S.AIRP 0.26 km → doğru nesne 2.04 km [GN]) · Kavieng (Käwieng) (GN 7668083 S.AIRP 0.29 km → doğru nesne 1.96 km [GN]) · Tişît (Tichitt) (GN 7668283 S.AIRP 0.74 km → doğru nesne 1.95 km [GN]) · Kaoma (Mankoya) (GN 6297011 S.AIRP 0.00 km → doğru nesne 1.85 km [GN]) · Berens River (GN 6301444 S.AIRP 0.95 km → doğru nesne 1.76 km [GN]) · Sena Madureira (GN 8260768 S.AIRQ 0.70 km → doğru nesne 1.71 km [GN]) · Lamu (GN 6297314 S.AIRP 0.99 km → doğru nesne 1.67 km [GN]) ᴷ · Puvirnituq (GN 6296255 S.AIRP 0.23 km → doğru nesne 1.67 km [GN]) · Fond du Lac (Athabasca Gölü) (GN 7668154 S.AIRP 0.17 km → doğru nesne 1.61 km [GN]) · Reyes (Maropa) (GN 6300784 S.AIRP 0.76 km → doğru nesne 1.58 km [GN]) · Am Timan (GN 6297099 S.AIRP 0.52 km → doğru nesne 1.52 km [GN]) · Puerto Deseado (GN 6300571 S.AIRP 0.61 km → doğru nesne 1.30 km [GN]) · Aranos (GN 13371452 S.AIRF 0.48 km → doğru nesne 1.28 km [GN]) · Dodoma (GN 6297354 S.AIRP 0.10 km → doğru nesne 1.19 km [GN]) · Forte Príncipe da Beira (GN 8506757 S.AIRF 0.30 km → doğru nesne 1.18 km [GN]) · Kuujjuarapik (Great Whale River) (GN 6296197 S.AIRP 0.91 km → doğru nesne 1.11 km [GN]) · Grand Cess (Kru) (GN 2570330 S.AIRF 0.17 km → doğru nesne 1.11 km [GN]) · Kangirsuk (Payne Irmağı) (GN 7910211 S.AIRP 0.39 km → doğru nesne 1.09 km [GN]) · Monte Alegre (Pará) (TGN 9089809 havalimani 0.27 km → doğru nesne 1.02 km [GN])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (21): Nuiqsut (Kuukpikmiut, Colville deltası) (GN 5870433 S.AIRP 0.97 km → doğru nesne 0.98 km [GN]) · Boulia (GN 7730244 S.AIRP 0.37 km → doğru nesne 0.97 km [GN]) · Concepción (Chiquitos) (GN 6300770 S.AIRP 0.22 km → doğru nesne 0.96 km [GN]) · Funafuti (GN 6299953 S.AIRP 0.82 km → doğru nesne 0.96 km [GN]) · Vitim (Vitimskoye zimov'e / Vitimskiy ostrog) (GN 8555940 S.AIRP 0.87 km → doğru nesne 0.94 km [GN]) · Coldfoot / Wiseman (GN 5878266 S.AIRP 0.71 km → doğru nesne 0.90 km [GN]) · Rağa (GN 8533065 S.AIRP 0.46 km → doğru nesne 0.85 km [GN]) ᴷ · Borroloola (GN 7730876 S.AIRP 0.63 km → doğru nesne 0.85 km [GN]) · Quang Ngai (GN 8260892 S.AIRP 0.00 km → doğru nesne 0.83 km [GN]) ᴷ · Bandundu (GN 6297143 S.AIRP 0.24 km → doğru nesne 0.77 km [GN]) · Iliamna / Nondalton (Dena'ina) (GN 5870142 S.AIRP 0.58 km → doğru nesne 0.75 km [GN]) · Halls Creek (GN 7668721 S.AIRP 0.43 km → doğru nesne 0.68 km [GN]) · Thargomindah (GN 7668777 S.AIRP 0.57 km → doğru nesne 0.67 km [GN]) · Panniqtuuq (Pangnirtung / Kekerten) (GN 6301492 S.AIRP 0.12 km → doğru nesne 0.59 km [GN]) · New Amsterdam (Berbice) (GN 7731448 S.AIRP 0.45 km → doğru nesne 0.55 km [GN]) ᴷ · Pofadder (GN 3362756 S.AIRF 0.37 km → doğru nesne 0.53 km [GN]) · Urucará (GN 8545744 S.AIRF 0.15 km → doğru nesne 0.52–1.04 km [GN+TGN]) · Compostela (GN 4013086 S.AIRF 0.00 km → doğru nesne 0.45 km [GN]) ᴷ · Kobuk (Kuuvaŋmiit) (GN 5866557 S.AIRP 0.20 km → doğru nesne 0.31 km [GN]) · La Palma (Darién) (GN 3707069 S.AIRF 0.26 km → doğru nesne 0.30 km [GN]) · Elorza (GN 3642391 S.AIRF 0.12 km → doğru nesne 0.17 km [GN])

**diğer: başka yapı (S) — 25**

- *tek aile* (12): Sennar (GN 6297345 S.STNM 0.13 km → doğru nesne 5.65 km [GN]) · El Paso del Norte (GN 5523469 S.BLDG 0.18 km → doğru nesne 5.21 km [GN]) · Mavinga (GN 12422105 S.TRIG 0.98 km → doğru nesne 4.08 km [GN]) · Cincinnati (Losantiville) (GN 4508731 S.BLDG 0.65 km → doğru nesne 2.69 km [GN]) · Kanchanaburi (GN 6301133 S.STNM 0.52 km → doğru nesne 2.65 km [GN]) ᴷ · Kalabo (GN 915470 S.SCH 0.52 km → doğru nesne 2.57 km [GN]) · York (Toronto) (GN 8014951 S.BLDG 0.11 km → doğru nesne 2.27 km [GN]) · Sept-Îles (GN 6144313 S.PO 0.77 km → doğru nesne 1.34 km [GN]) · Kambambe (Cambambe) (GN 2242802 S.DAM 0.36 km → doğru nesne 1.21 km [GN]) · Fort Duquesne (Pittsburgh) (GN 5190078 S. 0.03 km → doğru nesne 1.20 km [GN]) · Kakonda (Caconda) (GN 12328813 S.TRIG 0.31 km → doğru nesne 1.08 km [GN]) · Songkhla (GN 1606148 S.CMPRF 0.94 km → doğru nesne 1.03 km [GN]) ᴷ

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (13): Natashquan (GN 6086228 S.PO 0.83 km → doğru nesne 0.86 km [GN]) · Kabompo (GN 6297025 S.STNM 0.00 km → doğru nesne 0.82 km [GN]) · Port-la-Joye (Charlottetown) (GN 6296102 S.STNM 0.73 km → doğru nesne 0.75 km [GN]) · Kuujjuaq (Fort Chimo) (GN 5994518 S.PO 0.12 km → doğru nesne 0.70 km [GN]) · Jaén (GN 13580191 S.TRAM 0.06 km → doğru nesne 0.70–1.09 km [GN+PL]) · Ağordat (GN 6297258 S.STNM 0.62 km → doğru nesne 0.66 km [GN]) ᴷ · Bole (GN 6296421 S.STNM 0.52 km → doğru nesne 0.63 km [GN]) · Tuzla (Larnaka) (PL 707556 cemetery 0.31 km → doğru nesne 0.60 km [GN]) ᴷ · Birni-N'Konni (GN 6296451 S.STNM 0.00 km → doğru nesne 0.45 km [GN]) · Trois-Rivières (GN 6169142 S.PO 0.18 km → doğru nesne 0.31 km [GN]) · Blanc-Sablon (GN 5903663 S.PO 0.29 km → doğru nesne 0.30 km [GN]) · New Amsterdam (New York) (GN 4833132 S.BLDG 0.02 km → doğru nesne 0.16 km [GN]) ᴷ · Los Ángeles (El Pueblo) (GN 5368373 S.BLDG 0.07 km → doğru nesne 0.11 km [GN])

**ada — 20**

- *tek aile* (15): Ayamavra (Lefkada) (GN 258437 T.ISL 0.84 km → doğru nesne 13.79 km [GN]) ᴷ · Çuha Adası (Kythira) (GN 259709 T.ISL 0.31 km → doğru nesne 10.06 km [GN]) ᴷ · Marmara Adası (GN 741729 T.ISL 0.64 km → doğru nesne 6.94 km [GN]) ᴷ · Krk (Veglia) (GN 3197206 T.ISL 0.15 km → doğru nesne 6.13 km [GN]) · Egina (Aegina) (PL 579844 island 0.36 km → doğru nesne 5.88 km [GN]) ᴷ · Mikonos (GN 257055 T.ISL 0.85 km → doğru nesne 4.34 km [GN]) ᴷ · Kaşot (Kasos) (GN 260844 T.ISL 0.49 km → doğru nesne 3.22 km [PL]) · Kemeran (Kamaran) (GN 74012 T.ISL 0.79 km → doğru nesne 3.17 km [GN]) ᴷ · Namfi (Anafi) (GN 265132 T.ISL 0.79 km → doğru nesne 3.04 km [GN]) ᴷ · Murted (Kea) (GN 260347 T.ISL 0.10 km → doğru nesne 2.72 km [GN]) ᴷ · Yamurgi (Amorgos) (GN 265141 T.ISL 0.61 km → doğru nesne 1.89–1.91 km [GN] · ortak-kaynak: PL) ᴷ · Elafonisos (Cervi) (GN 262818 T.ISL 1.00 km → doğru nesne 1.63 km [GN]) · Sifnos (Yavuzca) (GN 253923 T.ISL 0.55 km → doğru nesne 1.59 km [GN]) ᴷ · Nojpetén (Tayasal / Flores) (GN 7303734 T.ISL 0.24 km → doğru nesne 1.17 km [GN]) ᴷ · Rab (Arbe) (GN 3192177 T.ISL 0.72 km → doğru nesne 1.05 km [GN])

- *2+ aile ama < 5 km* (5): Paros (PL 599868 island 0.20 km → doğru nesne 4.67–4.75 km [GN+PL]) · Kimolos (Argentiera) (PL 589868 island 0.33 km → doğru nesne 2.67–4.32 km [GN+PL]) ᴷ · Sire (Syros) (GN 253775 T.ISL 0.62 km → doğru nesne 2.20–2.35 km [GN+PL]) ᴷ · İleryoz (Leros) (PL 599764 island 0.10 km → doğru nesne 2.20–2.52 km [GN+PL]) · Termiye (Kythnos) (GN 259706 T.ISL 0.62 km → doğru nesne 1.90–2.31 km [GN+PL]) ᴷ

**otel/konaklama — 17**

- *tek aile* (5): Hvar (Lesina) (GN 10236444 S.HTL 0.21 km → doğru nesne 20.80 km [GN]) · Hakata (Fukuoka) (GN 10228977 S.HTL 0.60 km → doğru nesne 1.76 km [GN]) ᴷ · Port Lincoln (GN 10099133 S.HTL 0.60 km → doğru nesne 1.49 km [GN] · ortak-kaynak: TGN) · Fort Calgary (GN 6485295 S.HTL 0.57 km → doğru nesne 1.26 km [GN]) · Marree (Hergott Springs) (GN 10235184 S.HTL 0.49 km → doğru nesne 1.07 km [GN] · ortak-kaynak: TGN)

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (12): San Sebastián (GN 6480362 S.HTL 0.05 km → doğru nesne 0.75 km [GN]) · Tolanaro (Fort Dauphin) (GN 10115927 S.HTL 0.26 km → doğru nesne 0.73 km [GN]) · Innsbruck (GN 6474232 S.HTL 0.19 km → doğru nesne 0.71 km [GN]) · Kesriye (Kastoria) (GN 9407258 S.HTL 0.53 km → doğru nesne 0.56 km [GN]) · Helsingborg (GN 6464422 S.HTL 0.34 km → doğru nesne 0.53 km [GN]) ᴷ · Klaipėda (Memel) (GN 10086665 S.HTL 0.51 km → doğru nesne 0.52 km [GN]) · Kirkwall (Orkney) (GN 10277450 S.HTL 0.40 km → doğru nesne 0.43 km [GN]) ᴷ · Lubango (GN 10284675 S.HTL 0.30 km → doğru nesne 0.41 km [GN]) · Tartu (Dorpat) (GN 10098167 S.HTL 0.17 km → doğru nesne 0.37 km [GN]) · Kumamoto (GN 10231042 S.HTL 0.30 km → doğru nesne 0.36 km [GN]) ᴷ · Ferrara (GN 6527305 S.HTL 0.17 km → doğru nesne 0.25–0.26 km [GN] · ortak-kaynak: PL) ᴷ · Monterey (Alta California) (GN 6510306 S.HTL 0.03 km → doğru nesne 0.07 km [GN])

**nehir/dağ/doğal öğe — 14**

- *tek aile* (8): Pemaquid (GN 4974920 H.STM 0.99 km → doğru nesne 3.42 km [GN]) · North West River (Labrador) (GN 6091055 H.STM 0.57 km → doğru nesne 1.68 km [GN]) · Sellûm (GN 359866 H.BAY 0.74 km → doğru nesne 1.50 km [GN]) ᴷ · Soçi (Sâşe) (GN 491421 H.STM 0.71 km → doğru nesne 1.34 km [GN]) · Lorengau (Manus) (GN 2092162 H.STM 0.74 km → doğru nesne 1.28 km [GN]) · İrkutsk (GN 2023470 H.STM 1.00 km → doğru nesne 1.17 km [GN]) ᴷ · Atapupu (GN 1936721 H.HBR 0.20 km → doğru nesne 1.10 km [GN]) · Telegraph Creek (Tlegohin) (GN 6162577 H.STM 0.68 km → doğru nesne 1.00 km [GN])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (6): Pori (GN 11876673 H.HBR 0.38 km → doğru nesne 0.94 km [GN]) · Meiktila (GN 1309789 H.LK 0.62 km → doğru nesne 0.88 km [GN]) ᴷ · Fort McLeod (Britanya Kolumbiyası) (GN 6070702 H.STM 0.63 km → doğru nesne 0.74 km [GN]) · Pangani (GN 150790 H.STM 0.41 km → doğru nesne 0.61 km [GN]) · Unalaska (Iliuliuk) (GN 5877200 H.LK 0.45 km → doğru nesne 0.53 km [GN]) · Lincoln (GN 12612299 T.HLL 0.17 km → doğru nesne 0.18 km [GN]) ᴷ

**modern mahalle/PPLX — 5**

- *tek aile* (1): Fort Langley (GN 5955879 P.PPLX 0.15 km → doğru nesne 9.31 km [GN])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (4): Durban (GN 7871275 P.PPLX 0.54 km → doğru nesne 0.92 km [GN]) · Yafa (GN 293253 P.PPLX 0.47 km → doğru nesne 0.49–0.94 km [PL+TH]) · Bundaberg (GN 11523833 P.PPLX 0.35 km → doğru nesne 0.47 km [GN]) · Tlacopan (Tacuba) (GN 3516437 P.PPLX 0.13 km → doğru nesne 0.15 km [TGN]) ᴷ

**müze/anıt — 5**

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (5): Exeter (GN 6619872 S.MUS 0.75 km → doğru nesne 0.77–0.98 km [GN+PL]) ᴷ · Visby (Gotland) (GN 11821979 S.MUS 0.53 km → doğru nesne 0.67 km [GN]) ᴷ · Grand Portage (GN 6346462 S.MUS 0.56 km → doğru nesne 0.58 km [GN]) · Cebelitarık (Gibraltar) (GN 10280706 S.MUS 0.18 km → doğru nesne 0.53 km [GN]) · Setúbal (GN 11790702 S.MUS 0.28 km → doğru nesne 0.42 km [GN]) ᴷ

**diğer: alan/bölge (L) — 5**

- *tek aile* (3): Sutter's Fort (Sacramento) (GN 5400436 L.PRK 0.33 km → doğru nesne 132.09 km [GN]) · Fort Ross (Kaliforniya) (GN 5350097 L.PRK 0.12 km → doğru nesne 31.86 km [GN]) · Grand Rapids (Saskatchewan Irmağı ağzı) (GN 5964665 L.AREA 0.97 km → doğru nesne 4.73 km [GN])

- *doğru-cins kayıt da ≤1 km (tanım boşluğu)* (2): Mingan (GN 6074646 L.RESV 0.25 km → doğru nesne 0.67 km [GN]) · Kahnawake (GN 5988641 L.RESV 0.17 km → doğru nesne 0.19 km [GN])


### YANLIŞ-CİNS-ÖLÇÜLEMEDİ — adıyla

- Santorini (PL 599973 island 0.14 km) ᴷ [kale] — ada
- Aynaroz (Athos) (PL 501365 peninsula 0.10 km) [kale] — nehir/dağ/doğal öğe
- Anadolu Hisarı (TGN 7740061 mahalle 0.36 km) [kale] — modern mahalle/PPLX
- Rumeli Hisarı (GN 740477 P.PPLX 0.41 km) [kale] — modern mahalle/PPLX
- Herke (Halki) (GN 260143 T.ISL 0.26 km) [kale] — ada
- Bozbaba (Ay Strati) (GN 263959 T.ISL 0.15 km) [kale] — ada
- Brakya (Brač) (GN 3203594 T.ISL 0.64 km) [kale] — ada
- Ganghwa (GN 8573797 A.ADM3 0.73 km) ᴷ [kale] — idari bölge/ADM
- Solovki (Solovetsky) (GN 7668514 S.AIRP 0.52 km) ᴷ [kale] — havalimanı
- Bâdis (Peñón de Vélez) (GN 2509770 T.ISL 0.12 km) ᴷ [kale] — ada
- Paksos (Paxos) (GN 11836243 S.MUS 0.13 km) [kale] — müze/anıt
- Reducción de la Concepción (Salado) (GN 3838321 H.STMI 0.42 km) [sehir] — nehir/dağ/doğal öğe
- Killiniq (Port Burwell) (GN 5991969 L.AREA 0.39 km) [sehir] — diğer: alan/bölge (L)
- Fort St. Pierre (Rainy Lake) (GN 5042543 H.RSV 0.40 km) [kale] — nehir/dağ/doğal öğe
- Pecos Pueblo (Cicuye) (GN 5483697 A.ADMD 0.79 km) [sehir] — idari bölge/ADM
- Banaba (Ocean Island) (GN 7521585 A.ADM2 0.47 km) [liman] — idari bölge/ADM

## §6 TANIM ÖNERİLERİ (AYRI BÖLÜM: UYGULANMADI, yukarıdaki sayıların hiçbiri bunlarla hesaplanmadı)

Etiket gider, tanım kalır. Aşağıdakiler yalnız öneridir; kabul edilirse **yeni adla** (ör. `KESİN-v2`) uygulanmalı, eski etiket yeniden tanımlanmamalı.

1. **Tanım boşluğu (208 nokta):** "en yakın kayıt yanlış cins, ama doğru-cins aynı-ad kayıt da ≤1 km'de". Öneri: **DOĞRU-CİNS** sayılsın ya da ayrı bir adla anılsın (`YAN-YANA-CİNS`). Örnekler: Roma (ADM3 0,29 · şehir 1,50–1,77), Lyon, Zaragoza, Palu. Bunlar nesne hatası değil, aynı yerde iki kayıt. Bugünkü tanımla ADAY'ın %62'sini bu kova oluşturuyor.
2. **Kategorik kolun ≥1 km eşiği büyük şehirde yanlış pozitif üretiyor:** Ahvaz ve Rabat'ta nokta şehrin merkez istasyonunda, şehir centroid'i 1,2–2,4 km. "Otel bir kale olamaz" hükmü Hvar'da doğru, çünkü nokta **başka bir kasabada** (20 km). Rabat'ta nokta aynı şehrin içinde. Öneri: kategorik kol ya "≥1 km **ve** doğru nesnenin yerleşim alanı dışında" olsun, ya da `tur`/nüfus ölçeğine bağlı bir eşik (ör. PPLA/PPLC için ≥3 km) kullansın. Bu öneriyle KESİN listesinden 2 nokta (Ahvaz, Rabat) çıkar.
3. **"Bağımsız aile" tanıma yazılı olarak girsin:** GN ↔ TGN koordinatı ≤0,05 km çakışıyorsa tek aile (6 vaka ölçüldü). Bu turda uygulandı (§1.1-3), çünkü tanım "independent" diyor. Ama sayısal ölçüt tanımda yazılı değil, yazılmalı.
4. **Hvar tipi (kategorik + tek aile + büyük mesafe):** Hvar 20,8 km · Ikela 18,05 (GN≡TGN) · Jinan 11,12 (GN≡TGN) · Ayamavra 13,8 · Çuha 10,1. Öneri: kategorik yanlış cins **ve** ≥10 km ise tek aile + kaydın kendi `ad:`'ı (§6.4, birinci tanık) yeterli sayılsın. Bu, §6.5'in "kimlik ↔ koordinat" ayrımına uyuyor: kimliği `ad:`, koordinatı GN söylüyor, ve ≥10 km Ṯ'nin tek tanık eşiği. Uygulanırsa Hvar KESİN olur. Uygulamadım.
5. **≤1 km penceresi şehir ölçeğinde dar:** 1684 noktada ≤1 km'de aynı-ad kaydı yok. Bunların bir kısmı adı eşleşen ama 1–3 km'deki şehir centroid'leri (ör. Yenişehir/Bursa 1,7 km). Cins sorusu için bu pencere uygun, ama CİNS-BELİRSİZ'in büyüklüğünü "bilinmeyen cins" diye okumamak gerekir.

## §7 ERİŞİM VE KAPSAM SINIRLARI

- **GeoNames API kullanılmadı** (demo kotası dolu). Yerine resmî ülke dökümleri `download.geonames.org/export/dump/<CC>.zip` kullanıldı: atlas noktalarının 120 km çevresindeki **201 ülke**, toplam ~12 M satır, US 2,24 M dahil. `allCountries.zip` indirilmedi. Zip'ler işlenip silindi; yalnız ≤150 km'deki aynı-ad satırları tutuldu (13 455 satır). Ülke atama `cities500` ile yapıldı. 120 km'den uzaktaki komşu ülkedeki bir tanık kaçmış olabilir.
- **Pleiades:** yerel `pleiades-places/names.csv.gz` (34 878 konumlu yer) → 564 aynı-ad eşleşmesi. Antik adlar ağırlıkta; Osmanlı/modern adların çoğu orada yok.
- **al-Ṯurayyā:** yerel geojson (2521 yer) → yalnız **57** eşleşme. Arapça transliterasyon (Ḥalab ↔ Halep) çekirdek normalleştiriciyle tutmuyor. Ṯ bu taramada **pratikte devre dışı bir aile**. Bunun yüzünden KESİN'e ulaşmak zorlaştı.
- **TGN:** yalnız 81 aday için çalıştırıldı (ADAY tek aile ∧ eşik üstü + ÖLÇÜLEMEDİ), 122 ad sorgusu, 0 hata. **39 sorgu LIMIT 40'a dayandı** ⇒ o adlarda TGN kaydı kaçmış olabilir. TGN toplu taramada kullanılmadı ⇒ DOĞRU-CİNS/CİNS-BELİRSİZ kararlarında TGN yok.
- **Ad eşleşmesi:** `arac/ad_esanlam.py::sadelestir` + ø/ł/đ/ß ön-eşlemesi + cins-sözcüğü atma. Türkçe exonym (Budin, Belgırad, Halep …) GeoNames alternatenames'te yoksa nokta CİNS-BELİRSİZ'e düşer. **"Bulunamadı" ≠ "yok".** 1684 "≤1 km kayıt yok" satırının hiçbiri "doğru konum" ya da "yanlış konum" diye okunmamalı.
- **Ölçülmeyenler:** §6.3 İKAME (pencere içi nesne değişimi); Pleiades/GN/TGN hata dağılımları (HUKUM §6.1'in açık kalemi); ADAY satırlarının elle doğrulanması. Hiçbir satır taşıma önerisi değildir; diff hazırlanmadı.
