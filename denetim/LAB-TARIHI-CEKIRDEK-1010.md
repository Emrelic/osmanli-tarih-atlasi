# LAB — TARİHÎ ÇEKİRDEK denetimi: 193 ADAY satırında DOĞRU-DÖNEM payı (1010)

## §0 ÖNGÖRÜ (ölçümden ÖNCE)

Zaman damgası: 2026-10-10 06:47:57 +0300  (193 satırın noktaları ve tanık dökümleri henüz okunmadan yazıldı; bu bölüm bir daha düzenlenmeyecek)

Öngörü: 193 ADAY satırının **%18'i (≈35 satır) DOĞRU-DÖNEM** çıkar. **Geniş aralık: %6–%40 (≈12–77 satır).**
- GERÇEK KUSUR ≈ %35 (aralık %15–%55); ÖLÇÜLEMEDİ ≈ kalan (%47; aralık %25–%70).
- Gerekçe: Ö-2 örnekleri (Bamako · Tucson · Port of Spain) 28 satırda yalnız 3 idi (%11), ama YÜKSEK etki bandı uzak tanıklarda yoğunlaşıyordu. 193'ün çoğu ≤10 km, yarısından fazlası şehir; bunlarda "doğru nesne"nin modern PPLA/PPLC olması olağan. Ama DOĞRU-DÖNEM pozitif bir tarihî-çekirdek tanığı istiyor (PPLH/HSTS/CSTL/RUIN, Pleiades, Ṯurayyā, TGN). Bu tanık Avrupa-dışı/Amerika satırlarında seyrek. Bu yüzden pay sınırlı kalır, satırların çoğu ÖLÇÜLEMEDİ'de toplanır.
- Önceki turda yön doğru, büyüklük yanlıştı. Bu yüzden aralık bilerek geniş tutuldu.


## §1 TANIMLAR (VERBATIM — görev metninden; değişiklik yalnız §6'da AYRI öneri olarak)

- **DOĞRU-DÖNEM (no defect):** the atlas point matches (≤N km; state N, suggest 1.5 km and report sensitivity at 1/2/3 km) a record of the historical core of the same place — GeoNames PPLH/PPLQ/"historical"/"old town"/HSTS/CSTL/RUIN, Pleiades location for the relevant period, al-Ṯurayyā town, TGN historic site — AND the scan's claimed "correct object" is the MODERN admin/population centre (PPLA*/PPLC/PPL with population) of the same place.
- **GERÇEK KUSUR:** no historical-core match near the atlas point and the claimed correct object is indeed the same place's relevant-period object (with the usual witness rules HUKUM-KASA-1010 §6.1–§6.5, §9.4: Ṯ p90 8.7 ⇒ single-Ṯ ≥10 km; TGN alone ≥5 km insufficient; resolution coarser than the difference ⇒ ÖLÇÜLEMEDİ; ≤0.05 km coinciding = one family).
- **ÖLÇÜLEMEDİ:** cannot decide.

**N = 1,5 km** (önerilen değer). Duyarlılık 1 / 2 / 3 km için §4'te.

## §2 YÖNTEM VE KAPSAM

**Taban ve sınırlar**
- Taban: `origin/main` @ `8d8e23e3b` (10 Eki 2026 06:40). Ayrık worktree `C:\atlas-cekirdek`'ten okundu, iş sonunda kaldırıldı. `data/`'ya yazılmadı. Commit/push yapılmadı.
- 193 satırın hepsi anahtar (`_kaynak|ad`) ile birebir eşleşti. Tarama tabanına göre **0 koordinat farkı** var.

**Kitle (193 satır)**
- `LAB-AYNI-AD-TARAMA-v2-1010-etki.csv`'deki 206 ADAY satırından 13 satır çıkarıldı:
  - 9 EŞADLI: Brakya · Elba · Knife River · Peşte · Nikarya · Fort Nez Percés · Fort Ross · Fort Langley · Kekionga
  - 1 KESİN'e geçen: Pantelerya
  - 3 Ö-2 satırı: Bamako · Tucson · Port of Spain
- Tsabong ve Alonisos kitlede kalıyor ve **ÖLÇÜLEMEDİ** yazılıyor (koordinatör hükmü, §9.4).

**Tanıklar**
- **GeoNames.** Yalnız ülke dökümleri kullanıldı: 71 ülke (`export/dump/<CC>.zip`, işlenip silindi). API kullanılmadı.
  - Atlas noktasına ya da iddia edilen nesneye ≤3,5 km uzaklıktaki tarihî kayıtlar alındı: PPLH/PPLQ/HSTS/CSTL/RUIN/FT/ANS/PAL/WALL ile "old town / stari grad / stare miasto / medina / kastro / historic centre…" adlı kayıtlar.
  - Bunlara v2'nin aynı-ad tanık havuzu (`ayniad2`: GN, PL, TGN, Ṯ) eklendi.
- **Pleiades:** places CSV, çevrimdışı.
- **al-Ṯurayyā:** geojson, çevrimdışı.

**Uygulama kuralları** (tanımın işletilmesi; tanım değişikliği değil)
1. **"Aynı yerin çekirdeği"** (sıkı kol) için kayıt şu iki koşuldan birini sağlamalı:
   - kaydın adı atlas `ad:`'ıyla ortak bir kök taşıyor ve kayıt tarihî cinste,
   - ya da kayıt bir "eski şehir" adlı kayıt.

   Ad eşleşmesi olmayan her tarihî cinsli kaydı sayan kol **gevşek kol**dur.
2. **GN "(historical)" eki** GeoNames'te "artık yok" demek; tarihî çekirdek anlamına gelmiyor.
   - Bu ek yalnız yerleşim (P.*) ya da kale/harabe cinsinde sayıldı.
   - Anıt, müze, havalimanı, köprü, okul, kilise adları dışlandı.
3. **Pleiades "ilgili dönem":** `timePeriodsKeys` ortaçağ ya da 13.–19. yüzyıl/Osmanlı/Abbasi anahtarlarından birini içermeli. Yalnız "modern / twenty-first-ce" yetmez, çünkü Pleiades bunlardan `maxDate 2100` üretiyor. `locationPrecision=rough` olan kayıtlar dışlandı.
4. **Ṯurayyā** kayıtlarında yalnız `coord_certainty=certain` olanlar sayıldı.
5. **Modern merkez:** GN P.PPLA*/PPLC ya da nüfuslu P.PPL. TGN "inhabited place" kaydı, yalnız ≤1 km'de bir GN modern merkezi varsa modern merkez sayıldı.
6. **Çözünürlük:** 0,05°/0,1° ızgarasına yuvarlak koordinat ≈5,5/11 km çözünürlük taşır. Bu çözünürlük N'den ya da ölçülen farktan büyükse kayıt sayılmadı (§9.4).

**Doğrulama**
- Mekanik sonucu DOĞRU-DÖNEM ya da GERÇEK KUSUR çıkan 18 satırın hepsi elle gözden geçirildi. 2 satır düzeltildi:
  - **Cincinnati** DOĞRU-DÖNEM → ÖLÇÜLEMEDİ. Tek tanık 1843 gözlemevi.
  - **San Francisco (Misyon)** GERÇEK KUSUR → ÖLÇÜLEMEDİ. Destek kaydı Civic Center tarihî bölgesi, Misyon değil.
- 28-satır elle denetimle (`LAB-ADAY-YUKSEK-28-1010`) örtüşen 15 satırda o raporun `hukum_1010` hükmü taşındı: 8 GERÇEK KUSUR + 7 ÖLÇÜLEMEDİ. Bu 15 satırın hepsini mekanik sınıflayıcı ÖLÇÜLEMEDİ vermişti. Sınıflayıcı GERÇEK KUSUR için **pozitif bir tarihî-çekirdek tanığı** istiyor. Wikipedia anlatısı ise aile sayılmıyor.

## §3 SONUÇ (payda 193)

| hüküm | sayı | pay | %95 GA (Wilson) |
|---|---|---|---|
| **DOĞRU-DÖNEM** | **7** | **%3,6** | **%1,8 – %7,3** |
| **GERÇEK KUSUR** | **17** | %8,8 | %5,6 – %13,7 |
| **ÖLÇÜLEMEDİ** | **169** | %87,6 | %82,2 – %91,5 |

**DOĞRU-DÖNEM (7):**

| satır | çekirdek kaydı | çekirdeğin atlasa uzaklığı | iddia edilen nesne |
|---|---|---|---|
| Fort Laramie | NHS | 0,28 km | Fort Laramie kasabası, 2,85 km |
| Hille | Ṯ al-Ǧāmiʿān | 0,22 km | — |
| Częstochowa | Stare Miasto | 0,46 km | — |
| Hirosaki | Jō Ato (kale kalıntısı) | 0,43 km | — |
| Salvador | Historic Centre HSTS | 0,95 km | — |
| Zadar | Old Town HSTS / Fortress / Iader | 1,11 km | PPLA 1,07 km |
| Nojpetén | Tayasal ANS | 1,24 km | Flores PPLA 1,17 km |

- **Açık 5 satır:** Fort Laramie · Hille · Częstochowa · Hirosaki · Salvador. Bunlarda çekirdek atlasa, modern merkezden belirgin biçimde daha yakın.
- **Sınırda 2 satır:** Zadar · Nojpetén. Bunlarda çekirdek iki noktaya da yaklaşık eşit uzaklıkta. Atlas, Nojpetén'de Flores adasının üstünde, yani özde doğru yerde.

**GERÇEK KUSUR (17):**
- 28-satır elle denetimden 8: Korçula · Ayamavra · Nichicun · Jinan · Çuha · Pusan · Krk · Ûicu.
- Mekanik + elle onaylanan 9:

| satır | iddia edilen nesnedeki çekirdek | atlas–nesne farkı |
|---|---|---|
| Mikonos | Kástro, 0,27 km | 4,33 km |
| Limasol | Frourion Lemesou, 1,38 km | 2,89 km |
| Aden | PL Adane, 0,88 km | 2,23 km |
| İleryoz (Leros) | Leros Castle, 0,43 km | 2,2 km |
| Bozcaada | Bozcaada Kalesi, 0,30 km | 2,12 km |
| Zaculeu | iddia edilen nesne ANS'nin kendisi | 1,71 km |
| Fort Sill | NHS, 0,68 km | 1,49 km |
| Yamurgi (Amorgos) | PL "Chora of Amorgos" 13.–17. yy | 1,89 km |
| Dubrovnik | Historic Old Town, 0,10 km | 1,57 km |

  Bu 9 satırın çoğu tek aileli. Mikonos ve Aden'de iddia edilen kayıt PL, destek GN ⇒ 2 aile. Bu tur çare/KESİN hükmü vermiyor.

**Yeni ADAY toplamı:**
- Hesap: 193 − 7 (DOĞRU-DÖNEM) = **186**.
- Bu 186 satırın 17'si GERÇEK KUSUR, 169'u ÖLÇÜLEMEDİ.

**231 toplamına etkisi:** v2 HEPSİ YANLIŞ 231 = KESİN 8 / ADAY 206 / ÖLÇ 17. Aşağıdaki değişikliklerle **YANLIŞ = 231 − 1 − 3 − 7 = 220** olur (KESİN 9 / ADAY 186 / ÖLÇ 25). Oran 3988 paydasında **%5,79 → %5,52**.

| değişiklik | sayı | YANLIŞ'a etkisi |
|---|---|---|
| Pantelerya → KESİN | 1 | KESİN 8 → 9; YANLIŞ içinde kalır |
| Knife River → DOĞRU-CİNS | 1 | YANLIŞ'tan çıkar |
| 8 eşadlı → YANLIŞ-CİNS-ÖLÇÜLEMEDİ | 8 | ÖLÇ'e geçer; YANLIŞ içinde kalır |
| Ö-2 DOĞRU-DÖNEM | 3 | YANLIŞ'tan çıkar |
| bu turun DOĞRU-DÖNEM'i | 7 | YANLIŞ'tan çıkar |

**ADAY kovası modern-merkez varsayımıyla şişmiş mi? EVET, ama az.**
- Ölçülen şişme **7/193 = %3,6** (GA %1,8–%7,3).
- Üst sınır **gevşek kol 3 km'de 56/193 = %29**. Gevşek kol ad eşleşmesi istemiyor, uzaklık 3 km; komşu yapıları da sayıyor ⇒ tavan, tahmin değil.
- Asıl bulgu şişme değil, **kanıtsızlık**: 193 satırın **%87,6'sında** iki noktanın hiçbirinde ilgili-dönem çekirdek tanığı yok. "Doğru nesne = modern merkez" varsayımı bu satırlarda ne doğrulanabiliyor ne çürütülebiliyor. ADAY sayısı bir kusur sayısı değil, **sınanmamış iddia** sayısıdır.

## §4 DUYARLILIK (mekanik, elle düzeltme ve 28-satır taşıması ÖNCESİ)

| N | sıkı: DD / GK / ÖLÇ | gevşek: DD / GK / ÖLÇ |
|---|---|---|
| 1,0 km | 5 / 11 / 177 | 23 / 30 / 140 |
| **1,5 km** | **8 / 10 / 175** | 32 / 26 / 135 |
| 2,0 km | 11 / 9 / 173 | 43 / 19 / 131 |
| 3,0 km | 18 / 5 / 170 | 56 / 12 / 125 |

- N büyüdükçe GERÇEK KUSUR satırları DOĞRU-DÖNEM'e kayıyor. Sebep: 193 satırda atlas–modern merkez farkının ortancası **≈1,9 km** (p10 1,1 · p90 4,7 km). Bu yüzden 2–3 km'lik bir pencere, modern merkezin hemen yanındaki çekirdeği atlas noktasına da "yakın" sayıyor.
- N = 3 km ölçülen farkların çoğundan büyük. Ayırt edici değil ⇒ **N = 1,5 km önerisi korunur**.

## §5 §0 İLE KARŞILAŞTIRMA

| sınıf | öngörü | ölçüm |
|---|---|---|
| DOĞRU-DÖNEM | %18 (aralık %6–%40) | **%3,6** (GA %1,8–%7,3) |
| GERÇEK KUSUR | %35 | %8,8 |
| ÖLÇÜLEMEDİ | %47 | %87,6 |

- **DOĞRU-DÖNEM öngörüsü TUTMADI:** ölçüm aralığın alt sınırının da altında. Yalnız gevşek kol (1,5 km'de %16,6, 3 km'de %29) öngörü aralığına giriyor.
- **Yön doğru:** "satırların çoğu ÖLÇÜLEMEDİ'de toplanır" beklentisi tuttu.
- **Büyüklük yine yanlış:** ÖLÇÜLEMEDİ'yi küçük, GERÇEK KUSUR'u büyük tahmin ettim. Sebep: tarihî-çekirdek tanıkları (PPLH/HSTS/Pleiades-ortaçağ/Ṯ) Avrupa-dışı ve Amerika satırlarında beklediğimden de seyrek.

## §6 ÖNERİLER (AYRI — UYGULANMADI)

- **Ö-Ç1 (tanım):** DOĞRU-DÖNEM'e "çekirdek atlasa, modern merkezden daha yakın" koşulu eklenmesi önerilir. Bu koşul, N ≥ atlas–merkez farkı olduğunda kendiliğinden düşen satırları ayırır. Etkisi: 7 → 5 (Zadar ve Nojpetén sınırda kalır).
- **Ö-Ç2 (tanık):** 169 ÖLÇÜLEMEDİ satırın tanığı yeni bir aileden gelebilir. Aday kaynaklar: TGN "historic site" SPARQL'i (bu turda yeni TGN sorgusu yapılmadı) ve Wikidata P625 + "old town" (Q676050) ilişkisi.

**Elle gözle görülen ama tanıksız kalanlar** (sayılara katılmadı):
- **Cincinnati:** atlas noktası nehir kıyısındaki çıkış yerinde.
- **San Francisco (Misyon):** WP'ye göre atlas noktası Mission Dolores'e ≈0,5 km. WP aile sayılmıyor.

  İkisi de özde DOĞRU-DÖNEM olabilir ⇒ olası tavan 9/193.

## §7 DOSYALAR
- Bu rapor + `denetim/LAB-TARIHI-CEKIRDEK-1010.csv` (193 satır, `hukum` + `hukum_kaynagi` + mekanik 1/1,5/2/3 km ve gevşek kol sütunları).
- Scriptler `scratchpad\cekirdek\`: `dump.py` · `pop.py` · `tan.py` · `gnh.py` (döküm taraması) · `sinif.py` · `yaz.py`.
