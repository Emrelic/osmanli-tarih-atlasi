# LAB-KONUM-ADA-TARAMA-1010 — ADA vakalarında kapsayan-kayıt koordinatı taraması

## §0 ÖNGÖRÜ (ölçümden ÖNCE)

Zaman damgası: 2026-10-10 03:50:14 +0300 (hiçbir ölçüm/okuma yapılmadan, KATMAN csv dahi açılmadan yazıldı).

~42 ADA noktası için sayısal öngörü:

| Sınıf | Öngörü |
|---|---|
| KAPSAYAN-KAYIT (kayıt kale/şehir/liman diyor, koordinat ada/ilçe merkezine ≤1 km) | **14** (aralık 10–18) |
| ADA-DOĞRU (kaydın nesnesi adanın kendisi; koordinat = ada merkezi doğal) | **12** (aralık 8–16) |
| ADA-BELİRSİZ (ikisi de değil / gazetteer eşleşmesi yok) | **16** |
| KAPSAYAN-KAYIT içinden KESİN kusur (nesne tanığı ≥ eşik uzakta) | **5** (aralık 3–8) |
| KAPSAYAN-KAYIT içinden ADAY | **5** |
| KAPSAYAN-KAYIT içinden ÖLÇÜLEMEDİ | **4** |

Gerekçe (ölçüm öncesi): 3 örnekte (Pantelerya, Ayamavra, Erciş) desen görüldü; Ege/Akdeniz ada kalelerinin önemli kısmı ada adını taşıdığından bir kısmı "ada kendisi" sayılacak; küçük adalarda kale-ada merkezi mesafesi <5 km olacağından KESİN sayısı sınırlı kalır. GeoNames'e erişimin kısıtlı olabileceği varsayılmıştır.

<!-- §0 sabit; sonuçlar aşağıda eklenir -->

---

> **Yalnız ölçüm.** `data/` dokunulmadı, commit/push yok. Taban: `origin/main` @ `1896b8ecd` (ayrık worktree `C:\atlas-ada`, iş sonunda kaldırıldı; bu sırada origin/main `196c5257c`'ye ilerledi — ölçülen kayıtlar 1896b8ecd'deki hâlleri).
> **Girdi:** `LAB-KONUM-KATMAN-1010.csv` → `karar = ÖLÇÜLEMEDİ-ADA` olan 42 satır (hepsi evren 4300, hepsi `atlas_tur=kale`).
> **Kurallar:** HUKUM-KASA-1010 §6.1 · §6.2 (iç yüz: önce kaydın kendi `tur:`/`ad:` alanı) · §6.3 · §9.4 · eşik-düşer kuralı.
> **Gazetteer erişimi:**
> - GeoNames API: **ERİŞİLEMEDİ** (`demo` hesabının günlük kotası dolu, `api.` ve `secure.` ikisi de). Yerine resmî döküm kullanıldı: `download.geonames.org/export/dump/{GR,HR,IT,TN,TR,YE,IR}.zip` (T.ISL/ISLS, A.ADM*, P.PPL*, S.CSTL/FT).
> - TGN: `vocab.getty.edu/sparql.json`, ad bazlı `luc:term` sorgusu (60 ad, sorgu başına LIMIT 40 ⇒ bazı adalarda TGN kaydı yakalanmamış olabilir: Brač, Fourni, Halki, Hvar-ada, Kasos, Kamaran, Kimolos, Serifos, Anafi, Sifnos için ≤15 km TGN kaydı çıkmadı).
> - Pleiades: yerel `pleiades-places.csv.gz` (featureTypes, reprPoint).
> - al-Ṯurayyā: yerel `thurayya.geojson` (yalnız Kamaran için ≤30 km kayıt var: bölge 2,65).
> Script ve ara çıktılar: `scratchpad\adatarama\` (`rec.py` kayıt okuma · `yakin.py` Pl/GN/Ṯ yakınlık · `tgn_all.txt` · `sinif.py` kapsayan/nesne ayrımı · `tablo.py`+`yaz3.py` CSV).

## §1 Adım 1 — kaydın kendi beyanı (tur:/ad:/not:/kaynak:)

- **42 kaydın 42'si `tur:"kale"`.** Hiçbiri `bolge` değil. Atlas adayı-alan olarak kastettiğinde `bolge` kullanıyor (Rapa Nui, Hawaii, Yeni Sibirya Adaları ⇒ `bolge`); bu 42'de kullanmamış ⇒ kaydın iddiası **nokta-nesne (kale)**.
- `ad:` alanı 40 kayıtta yalnız **ada adı** (Osmanlıca + modern), ayrı bir kale adı taşımıyor. 2 kayıtta (`Marmara Adası`, `Çuha Adası (Kythira)`) ad açıkça **"Adası"** diyor ⇒ `tur` ile `ad` **çelişiyor**.
- `not:` yalnız Elba'da var ve kaydın tek nesne olmadığını kendisi söylüyor: *"1548/1557 sonrası ada BÖLÜNDÜ (Portoferraio Medici'ye, Piombino'nun geri kalanı Appiani'ye…) — bu tek 'piombino' periyodu… BASİTLEŞTİRMEDİR"*.
- `kaynak:` alanları egemenlik (s:/d:) künyesi; hiçbiri koordinatın kaynağını ya da kalenin yerini söylemiyor.

⇒ **ADA-DOĞRU (kaydın nesnesi adanın kendisi) = 0.** Kaydın kendi beyanı hiçbir satırda "ada" değil; en yakın durum iki "Adası" kaydı, onlar da `tur:kale` ile çelişkili olduğu için KAPSAYAN içinde ayrıca işaretlendi.

## §2 Adım 2 — koordinat kapsayan bir kaydın temsil noktası mı? (≤1 km)

Kapsayan sayılanlar: Pleiades `island/archipelago` · GeoNames `T.ISL/ISLS` ve `A.ADM*` · TGN `islands / second level subdivisions / governorates` · Ṯ `regions`. (Paksos'ta ≤1 km'deki iki `T.ISL` Gaios limanının adacıkları, adanın kendisi değil ⇒ sayılmadı; Hvar'da ≤1 km'deki `A.ADM2 Jelsa` aynı adlı kasabayla çakışık ⇒ sayılmadı.)

| sonuç | n |
|---|---|
| ≤1 km kapsayan eşleşmesi VAR | **30** |
| yok (en yakın kapsayan 1,04–4,6 km) | 12 |

En sık kaynak: GeoNames `Dimos X` (ADM3) ve `Nisí X` (T.ISL) noktaları ile Pleiades `X (island)` reprPoint'i. En güçlü eşleşmeler: Pantelerya Pl ada 0,06 · Koçbaba GN ADM3 0,09 · İleryoz Pl ada 0,10 · Santorini Pl ada 0,14 · Krk GN ada 0,16.

## §3 Sonuç tablosu (sınıf × kova)

| sınıf | kova | n | adlar |
|---|---|---|---|
| **KAPSAYAN-KAYIT** | **KESİN** | **7** | Krk 5,99–6,34 · Pantelerya 5,62–5,94 · Paros 4,67–4,75 · Mikonos 4,33 · Nio 4,23–4,30 · İpsara 3,29–4,11 · Sömbeki 3,42–3,87 |
| KAPSAYAN-KAYIT | ADAY | 14 | Ayamavra 13,8 · Çuha Adası 10,1 · Marmara Adası 6,6–6,9 · Termiye (İKAME: Kastro tis Orias 7,4 / Chora 1,9) · Egina (İKAME: Palaiochora 1,7 / Egina 5,9) · Sifnos (İKAME: Kastro 3,4) · Kemeran 3,2 · Namfi 3,0 · Kulluk 3,0 · Kimolos 2,7 · İleryoz 2,2–2,5 · Bozcaada 2,1–2,4 · Sire 2,1–2,4 · Koçbaba 2,1–2,2 |
| KAPSAYAN-KAYIT | ÖLÇÜLEMEDİ | 9 | nesne belirsiz: Brakya · Elba · Mliyet · Nikarya · Kaşot (tanık yalnız antik) · Santorini (nokta Fira'ya da 0,57) — fark <2 km: Yamurgi 1,9 · Herke 1,9 · Çamlıca 1,2–1,5 |
| **ADA-DOĞRU** | — | **0** | — |
| ADA-BELİRSİZ | nesnede (kusur yok) | 4 | Paksos (Gaios 0,10) · İskopelos (0,11–0,61) · Fornoz (0,24–0,39) · Batnoz (Skala/Phora 0,66–0,78) |
| ADA-BELİRSİZ | ek bulgu | 5 | **Hvar 19,0–20,8 (KESİN adayı, yeni desen)** · Cerbe 7,7–8,6 · İmroz 7,8–7,9 (önceki ADAY) · İstanbulya 2,5–3,1 · Vis 2,9–3,0 |
| ADA-BELİRSİZ | nesne belirsiz | 3 | Kerkene · Kiş · Sokotra |

Toplam 42 = 30 KAPSAYAN + 0 ADA-DOĞRU + 12 ADA-BELİRSİZ. Satır satır ayrıntı: `LAB-KONUM-ADA-TARAMA-1010.csv`.

### Kova ölçütleri (bu turda nasıl uygulandı)

- **KESİN** = KAPSAYAN-KAYIT **ve** nesne adlı, kesin ve uzun süre tanıklanmış (adanın tek kastro/chora'sı, pencere boyunca aynı yerde) **ve** iki ayrı tanık ailesi (Pleiades + GeoNames/TGN) nesnede ≤1 km uyuşuyor **ve** fark ≥3 km. Eşik-düşer kuralı uygulandı: 5 km tabanı aranmadı. Kararı veren şey, atlas noktasının **ada/ilçe temsil noktası** olması; o noktada hiçbir aday nesne yok.
- **ADAY** = desen var ama şunlardan biri eksik: tek tanık ailesi (çoğunlukla yalnız GeoNames PPLA3; §6 modern yerleşim için yeter ama hata payı ölçülmedi) · fark 2–2,5 km (Bozcaada, Koçbaba, Sire, İleryoz: Pleiades/GN/TGN hata dağılımı bilinmediği için §6.1 gereği KESİN denmedi) · kaydın kendi `ad:`ı ile `tur:`u çelişiyor (Marmara, Çuha ⇒ nesne kesin değil, eşik düşmez) · pencere iki nesneyi kapsıyor (§6.3 ⇒ çare **İKAME**: Egina, Sifnos, Termiye).
- **ÖLÇÜLEMEDİ** = nesnenin kimliği kayıttan ve tanıklardan çıkmıyor, ya da fark <2 km (tanıkların bilinmeyen hatası içinde).
- §9.4: TGN `inhabited places` hiçbir yerde tek başına ikinci tanık sayılmadı. KESİN'lerin hepsinde Pleiades + GeoNames var; TGN yalnız ek.
- §6.1 Ṯ kuralı: bu 42'de Ṯ'nin nokta-nesne kaydı yok (yalnız Kamaran bölge kaydı), uygulanacak satır çıkmadı.

### Pencere (§6.3)
KESİN 7'nin hepsinde nesne (kasaba+kale) 1281–1923 boyunca aynı yerde ⇒ çare **TAŞIMA**. İKAME gerektirenler: Egina (Palaiochora → Egina kasabası, 1826 civarı), Sifnos (Kastro → Apollonia, 1836 civarı), Termiye (Kastro tis Orias → Chora, 1537 civarı), olası Çuha (Paliochora 1537 öncesi), Santorini (Skaros → Fira, tanıksız), Brakya (Nerežišća → Supetar). Bu tarihler genel bilgidir, tanıkla teyit edilmedi.

## §4 Desen ve yeni bulgu

1. **KAPSAYAN-KAYIT deseni yaygın:** ADA sınıfının **30/42'si (%71)**. Koordinat ya adanın Pleiades `island` reprPoint'inden, ya GeoNames `Nisí X` / `Dimos X` noktasından, ya da TGN ada kaydından alınmış. Pantelerya, Ayamavra ve Erciş tek tek örnekler değil; Ege/Adriyatik ada kalelerinin büyük kısmında aynı yöntemle üretilmiş görünüyor.
2. **Desen ≠ kusur:** 30'un 9'u ölçülemiyor, 14'ü aday. Küçük adalarda kastro ada merkezine 1–2 km olabiliyor (Yamurgi, Çamlıca, Herke), orada desen var ama kusur ölçülemiyor.
3. 🔴 **YENİ DESEN — AD-EŞİ KAYIT (Hvar):** Hvar (Lesina) noktası 43.164/16.699, GeoNames **10236444 "Hvar" S.HTL (bir otel)** kaydına **0,21 km**. Jelsa kasabasının içinde (Jelsa PPLA2 0,56). Hvar kasabası ve Fortica kalesi GN 3199180 ile **20,8 km**, TGN 7015484 ile 19,0 km batıda. Kapsayan kayıt değil; adı aynı olan **başka türden bir kayıt** seçilmiş. Nesne kesin, adlı ve 1281–1923 kesintisiz (Venedik → Avusturya → …) ⇒ eşik düşer. Tanıklar GN + TGN-inhabited (§9.4 gereği TGN ikinci tanık sayılmaz) ⇒ biçimsel kova **ADAY**, fark büyüklüğü (≥19 km) ile **KESİN adayı**. Önerilen yer GN 3199180 (43.1725, 16.4428). Doğrulanmadı: diff hazırlanmadı.
4. **Cerbe:** nokta Erriadh kasabasında (1,53), ne ada merkezinde (Pl 3,84) ne Houmt Souk/Borj el Kebir'de (7,65–8,55). Tek tanık ailesi (GN) ⇒ ADAY.

## §5 Öngörü ile karşılaştırma

| kalem | §0 öngörü | ölçüm | sapma |
|---|---|---|---|
| KAPSAYAN-KAYIT | 14 (10–18) | **30** | aralığın çok üstünde, **yanıldım** |
| ADA-DOĞRU | 12 (8–16) | **0** | **yanıldım**: kaydın kendi `tur:` alanını okumadan "adı ada olan kayıt adanın kendisidir" varsaymışım; 42'nin hepsi `tur:kale` |
| ADA-BELİRSİZ | 16 | 12 | yakın |
| KESİN | 5 (3–8) | 7 | aralıkta |
| ADAY | 5 | 14 | üstünde (ADA-DOĞRU sandığım kayıtlar buraya geldi) |
| ÖLÇÜLEMEDİ | 4 | 9 | üstünde |

En büyük hata ADA-DOĞRU öngörüsü. Koordinatörün yeni ölçütünün (önce `tur:`/`ad:`) ne kadar belirleyici olduğunu bu sapma gösteriyor: §6.2'nin iç yüzü okunmadan yapılan tahmin 12 satırı yanlış sınıfa koymuştu.

## §6 Açık kalanlar

- Pleiades / GeoNames / TGN'nin kendi hata dağılımı hâlâ ölçülmedi (§6.1). 2–2,5 km'lik 4 aday bu yüzden ADAY'da bekliyor.
- TGN taraması ad bazlı ve LIMIT 40; 10 adada ≤15 km TGN kaydı çıkmadı. Kesin bir "TGN'de yok" değil.
- GeoNames API bugün erişilemedi; döküm dosyaları kullanıldı (aynı veri, çevrimdışı).
- Hvar için ayrı bir LAB-KONUM-ADAY turu önerilir (Pleiades'te Hvar kasabası kaydı aranmalı; Pharus 197433 = Stari Grad, başka nesne).
- KESİN 7 için diff hazırlanmadı (görev yalnız ölçüm).

