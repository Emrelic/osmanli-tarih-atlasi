# KASA-DER-1010 — Dēr (Tell Aqar / Badra) koordinatı: Ç1 dolgusunun yerine gerçek nokta?

Görev: YILDIRIM BAYEZIT (MIMARI §5.1 · Ç1 onayı sonrası, ÖNCELİKLİ) · Araştırmacı: KASA ·
`data/` DONUK — öneri yazılır.
Soru: antik **Dēr** (Elam-Babil sınır kenti, Zagros eteği; Tell Aqar, Badra yakını) için
kaynaklı koordinat + ikinci tanık var mı? Varsa Ç1 (32,75K · 46,25D, `tur:"bolge"`) düşer.
Eşikler (HUKUM §6.1 / §9.4): Ṯ tek tanıkken ≥10 km sinyal · TGN tek başına ≥5 km sinyal
SAYILMAZ · dakika-yuvarlak ya da `inhabited places` türü TGN kaydı tanık DEĞİL.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
- **Pleiades:** "Der/Dēr" araması KASA-SUMER-NOKTA'da boş döndü; alternatif adlarla (Dūr-ilu,
  Tell Aqar, Badra, Bādarāyā) **bulunur: %50** — bulunursa Babil/Asur bağlamlı bir kayıt.
- **TGN:** "Badra" modern kasaba olarak VAR (inhabited places ⇒ tanık DEĞİL); antik site
  ("Tell Aqar" / "Der") ayrı kayıt olarak **yok: %70**.
- **al-Ṯurayyā:** İslâmî "Bādarāyā/Bākusāyā" (Badra'nın İslâm dönemi adı) kaydı **var: %60** —
  ama İslâmî kasaba antik höyükle aynı yer mi, kaynak söylemeyecek.
- **Akademik:** Dēr'in Badra yakınında olduğunu söyleyen cümle bulunur; **koordinat veren
  akademik cümle bulunmaz.**
- **Sonuç tahmini:** ikinci tanıklı kesin koordinat **çıkmaz (%60)** ⇒ Ç1 KALIR. Çıkarsa:
  Dēr Ç1'den **~60-90 km kuzeydoğuda** (Badra ~33,1K · 45,9D civarı) — çekirdeğin İÇİNDE,
  ve p95'i Ç1 kadar indirip indirmediği ayrıca ölçülür (Ç1'in yeri p95 için seçildi, Dēr'in
  yeri tarih için — aynı kazancı vermeyebilir).

## 1. ÖLÇÜM (2026-10-10)

### 1.0 Sonuç tek cümleyle
**Dēr BULUNDU** — Pleiades 903013 "Deru/Beth Daraya/[Badra]" = **Tall ‘Aqār**,
**33.11928 K · 45.93733 D**; ikinci tanık al-Ṯurayyā `BADARAYA_459E330N_S` (2,18 km, "certain").
Tek başına çekirdek p95'i **148,9 → 113,5 km** indiriyor (Ç1: 111,4) ⇒ **Ç1 dolgusunun
yerini GERÇEK nokta olarak tutabilir** — ama bir dönem çekincesiyle (1.4).

### 1.1 Öngörü sınavı
```
                                öngörü                 ölçüm
Pleiades'te bulunur             %50                    BULUNDU (903013, "Badra" ve "Aqar" aramalarıyla) — TUTTU (şanslı yön)
TGN antik site kaydı yok        %70                    YOK — TUTTU; ayrıca "Badra" TGN'de HİÇ yok (modern kasaba kaydı da yok)
al-Ṯurayyā Bādarāyā var         %60                    VAR ("certain", tür "canton") — TUTTU
ikinci tanıklı kesin koordinat  çıkmaz (%60)           ÇIKTI — TUTMADI
Dēr ↔ Ç1 mesafesi               60-90 km KD            50,4 km — TUTMADI (daha yakın)
p95 Ç1 kadar indirir mi         belki                  113,5 ↔ 111,4 — 2,1 km farkla NEREDEYSE aynı
```

### 1.2 Koordinat tanıkları
| tanık | kayıt | koordinat | reprPoint'e | tür / not |
|---|---|---|---|---|
| Pleiades reprPoint | 903013 | 33.11928, 45.93733 | — | BAtlas 92 A3 |
| Pleiades — OSM | "OSM location of تل العقر" (node 7321216985) | 33.12458, 45.93251 | 0,74 km | höyük |
| Pleiades — CIGS | "CIGS location of Tall ‘Aqār" (Google Earth) | 33.1238, 45.9316 | 0,73 km | höyük — OSM'le **0,12 km** |
| Pleiades — DARMC | location 21956 | 33.10945, 45.94789 | 1,47 km | DARMC (Harvard) |
| **al-Ṯurayyā** | `BADARAYA_459E330N_S` "Bādarāyā" | 33.09968, 45.93688 | **2,18 km** | coord_certainty **"certain"** · top_type_orig **"canton"** (nâhiye) |
| TGN | "Badra" · "Tell Aqar" · "Der" · "Deru" | — | — | **YOK**. "Tell ed-Der" (8723683, 33.1/44.29) = Sippar-Amnanum, BAŞKA YER — karıştırılmamalı |
**Önerilen koordinat:** höyük — OSM ve CIGS ortalaması **33.1242, 45.9320** (iki bağımsız
uydu/harita kaydı 0,12 km tutuyor) ya da Pleiades reprPoint 33.11928/45.93733 (0,73 km fark).
**İkinci tanık değerlendirmesi (HUKUM §6.1 / §9.4):**
- al-Ṯurayyā 2,18 km — Ṯ'nin kendi hatası (LAB: medyan 2,9 · p90 8,7 km) içinde ⇒ **TUTUYOR**,
  sinyal yok.
- ⚠️ Ama Ṯ kaydının türü **"canton"** — İslâm dönemi Bādarāyā İDARİ BİRİMİ, höyük değil.
  §9.4'ün TGN için koyduğu "neyi işaret ettiği de sorulur" ölçütü Ṯ'ye uygulanırsa bu kayıt
  höyük için tam tanık DEĞİL, **kasaba/nâhiye** tanığı. Kimlik bağı (Dēr = Beth Daraya =
  Badra = Bādarāyā) Pleiades'in ad listesinden geliyor; Ṯ kendisi Dēr demiyor.
- Pleiades'in İÇİNDE iki bağımsız konum (OSM + CIGS, 0,12 km) + DARMC (2,2 km) var — bu,
  Sümer noktalarında koordinatörün kabul ettiği desen.
⇒ Koordinat için tanık yeterli; kesin ifade: **"Pleiades (OSM+CIGS+DARMC) + al-Ṯurayyā
nâhiye kaydı (2,18 km)"**.

### 1.3 Yoğunluk etkisi (motor_kara · 0,05° hücre merkezi · R=6371,0088 — LAB yöntemi)
```
çekirdek (3584 kara hücre)   p95     azamî
26 nokta                     148,9   194,5
+ Ç1 (dolgu)                 111,4   177,7
+ Dēr (gerçek)               113,5   177,7
+ Dēr + Ç1                   111,4   177,7     ⇒ ikisi birlikte Ç1'e bir şey eklemiyor
Dēr ↔ Ç1                     50,4 km
```
⇒ Dēr, Ç1'in işini **2,1 km kayıpla** görüyor (gürültü ±2-3 km içinde) ve eşiğin 36,5 km
altında. **Ç1 düşebilir; `BEKLENEN_SAHIPSIZ`a +1 gerekmez.**

### 1.4 🔴 DÖNEM ÇEKİNCESİ — Dēr MÖ hangi yüzyıldan beri tasdikli?
- Pleiades adların ve konumun tasdik dönemleri: **archaic · classical · hellenistic · roman ·
  late-antique** — en erken "archaic" (Pleiades sözleşmesinde ~MÖ 750-550). **MÖ 3.-2. binyıl
  tasdiki Pleiades'te YOK.**
- Akademik tanıklık (Okay Pekşen, *Tarih İncelemeleri Dergisi* XXXVI/2 (2021) 621-641):
  > "The reason underlying Sargon’s attack on the city of Dēr was the strategic location of
  > the city at a road connection between Babylonia and Susa."
  > "The battle is narrated in Babylonian chronicles as follows: “The second year of
  > Merodach-baladan (II): Humban-nikash (I), king of Elam, did battle against Sargon (II),
  > king of Assyria, in the district of Dēr, effected an Assyrian retreat, (and) inflicted a
  > major defeat upon them."
  ⇒ Yeni Asur dönemi (II. Sargon) — MÖ 1. binyıl. Cümlede YIL yok (Merodach-baladan'ın "2.
  yılı" bir saltanat yılı; miladî yıla çevirmek türetme olur — yazılmadı).
- ⇒ Dēr'in **MÖ 3. binyıl Sümer kutusunda VAR olduğuna dair bu turda kaynak `bulunamadı`.**
  MIMARI §5: "var olmayan nokta yoğunluk sayılmaz". `kur:` yazılmazsa motor Dēr'i
  `UFUK[0]`'tan beri sahnede sayar — yani MÖ 3000'de var sayar, ve bu **kaynaksız bir varlık
  iddiası** olur.
- Ç1 ise `tur:"bolge"` — zamandan bağımsız bir dolgu, varlık iddiası taşımıyor.
  ⇒ **Gerçek nokta her zaman dolgudan iyidir** (HUKUM) — ama ancak gerçek noktanın o
  DÖNEMDE var olduğu kaynaklıysa. MÖ 1. binyıl için Dēr kesin daha iyi; MÖ 3. binyıl için
  Dēr + `kur:` yok = örtük kaynaksız iddia.

## 2. ③ İSTİYORUM — koordinatör kararı
a) **Seçenek 1 (önerim):** Dēr'i gerçek nokta olarak öner, `kur:` alanını **MÖ 1. binyıl alt
   sınırıyla** (Pekşen + Pleiades "archaic") beyanlı yaz, VE Ç1'i **MÖ 3.-2. binyıl için**
   koru (dolgu Dēr'in tasdik öncesi boşluğunu kapatır). Ç1 + Dēr birlikte p95 111,4 — Ç1'in
   tek başına değeriyle aynı; sahipsiz sayaç +1 kalır.
   Seçenek 2: Dēr'i `kur:`suz yaz, Ç1'i düşür — sahipsiz sayaç 0, ama Dēr MÖ 3000'den beri
   "var" sayılır (kaynaksız).
   Seçenek 3: Dēr'in MÖ 3. binyıl tasdikini ayrıca ara (çivi yazılı kaynaklarda Dēr ED/Akad
   döneminden bilinir — ama bunu söyleyen izinli kaynak bu turda açılmadı).
b) TGN'de Badra/Tell Aqar/Dēr HİÇ yok — HUKUM §6.1'in "TGN ikinci tanık" yolu bu site için
   kapalı; Pleiades-iç + Ṯ deseni kabul edilsin mi?
