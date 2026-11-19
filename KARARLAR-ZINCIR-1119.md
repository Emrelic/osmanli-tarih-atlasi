# KARARLAR — Künye zinciri (öncül/ardıl) — 19 Kasım 2026

Kaynak: Emre'nin bulut oturumundaki kararları (19 Kasım 2026). Bu dosya KARAR kaydıdır; henüz
veri ya da kod değişmedi. Amaç: birbirinin devamı olan künyeler uç uca eklenir, geçişte
"X'ten Y'ye geçilmektedir" penceresi çıkar. Bugün `data/devletler.js`te yapılandırılmış
öncül/ardıl alanı yoktur (ölçüm: 2202 künye, yalnız 8'inde serbest `halef:`/`ardıl:` metni).

## Kural
- Her künyenin en çok **bir** "asıl ardılı" olur.
- Bir yapı birden çok yola çatallanırsa: ya biri asıl yol seçilir, ötekiler **kopan dal** olur;
  ya da **hiçbiri asıl yol olmaz, hepsi eşit kopan** olur (ayrı zincir başı).
- Şüpheli devamlılık zincire BAĞLANMAZ; bağlamamak beyanlı borçtur, yanlış bağlamaktan iyidir.

## Onaylı kararlar (Emre)

### A — doğrusal zincirler (olduğu gibi)
1. Roma Krallığı → Roma Cumhuriyeti → Roma İmparatorluğu
2. Almanya BRD (Batı) → Birleşik Almanya
3. Macaristan Halk Cumhuriyeti → Macaristan Cumhuriyeti
4. Mısır Sultanlığı → Krallığı → Cumhuriyeti → BAC → Mısır Arap Cumhuriyeti
5. Sırbistan Prensliği → Sırbistan Krallığı
6. Rusya Çarlığı → Geçici Hükûmet → Sovyet Rusya/SSCB → Rusya Federasyonu
7. Eski Mısır: Erken Hanedan → Eski Krallık → Orta Krallık → Yeni Krallık

### B — çatallanmalar
| # | Karar |
|---|---|
| B1 | Roma İmparatorluğu → **Bizans** asıl yol; Batı Roma **kopan dal** |
| B2 | Bizans (1204) → **İznik** asıl yol; Latin, Trabzon, Epir **kopan** |
| B3 | Osmanlı → **Türkiye (TBMM/Cumhuriyet)** asıl yol; Ortadoğu mandaları **kopan** |
| B4 | Yugoslavya dağılır; **hiçbiri asıl yol değil**, Sırbistan-Karadağ (FRY) de dâhil hepsi eşit kopan. Sırbistan Yugoslavya'nın devamı SAYILMAZ |
| B5 | SSCB → **Rusya** asıl yol; öteki cumhuriyetler kopan |
| B6 | Almanya 1949: BRD asıl yol; **DDR kopan** |
| B7 | Abbâsî / Büyük Selçuklu / Moğol hanedanları birbirinin ardılı SAYILMAZ |
| B8 | Altın Orda → Kırım, Kazan, Astrahan, Sibir, Kasım: **hepsi eşit kopan**, asıl yol yok |
| B10 | Frank (Karolenj) → Fransa, Almanya, İtalya: **üç eşit kopan**, Fransa devam SAYILMAZ |
| B12 | Hint: Babür → Hindistan ve Pakistan **ikisi de** Babür'ün ardılı olabilir (aşağıda not) |

### C — şüpheli devamlılıklar
- **C1** Türkiye Osmanlı'nın devamıdır (B3 ile aynı).
- **C2** Bizans Roma'nın devamıdır (B1 ile aynı).
- **C3** Moğol İmparatorluğu → **Yuan** asıl yol; İlhanlı, Çağatay, Altın Orda **kopan**.
- **C4** İskender sonrası (Selevkî, Ptolemaios, Antigonos…): hepsi eşit varis, asıl yol yok.
- **C5** Halifelikler (Emevî, Abbâsî, Fâtımî, Endülüs): hepsi ayrı, devam yok.
- **C6** Papalık ile Roma: **asla devam olmaz**, ayrı.

## Claude'un önerdiği, Emre'nin onayını bekleyenler (A bölümü borç: bkz. BORC-DEFTERI A14)

### B9 — Kutsal Roma
Atlas bugün Kutsal Roma'yı zaten `almanya` künyesinin İÇİNDE tutuyor ("Almanya (Kutsal Roma
962-1806)", Emre kararı 14 Ekim 2026; künye 1923'e dek sürüyor). **Öneri: devamı Almanya.**
Gerekçe: İmparatorluğun çekirdeği Alman krallığıdır (Regnum Teutonicum); 1815 Alman
Konfederasyonu ve 1871 Alman İmparatorluğu doğrudan Alman devlet geleneğine bağlanır;
Habsburg Avusturyası ise hanedan devletidir (1804'te ayrı imparatorluk) ve kendi zincirini
taşır: Habsburg → Avusturya-Macaristan → Avusturya Cumhuriyeti. **Habsburg Avusturya kopan**
(ayrı zincir başı). Not: `almanya` künyesi bu yüzden bölünmez, zincir tek düğümdür.

### B11 — Çin hanedanları (akademik uzlaşıya göre Claude'un önerisi)
Modern tarih yazımı (Twitchett–Loewe, *Cambridge History of China*; Ebrey) hanedanlar arası
birleşik dönemleri bir "hanedan devri" (dynastic cycle) olarak zincirler, bölünme dönemlerini
ardıl olarak değil ara dönem (interregnum/çok merkezli dönem) sayar; "meşru varis" (zhengtong)
anlayışı geleneksel/siyasî bir ölçüttür, bilimsel değil. Öneri:
- **Zincir (birleşik hanedanlar):** Qin → Han → (Üç Krallık: kopan) → Jin → (Kuzey-Güney: kopan)
  → Sui → Tang → (Beş Hanedan/On Krallık: kopan) → Song → Yuan → Ming → Qing → Çin Cumhuriyeti.
- Ara dönem devletleri (Üç Krallık, Kuzey-Güney, Beş Hanedan, Liao/Jin/Batı Xia vb.) **kopan**:
  eşit, asıl yol yok.
- Xin (Wang Mang) iki Han arasında ara dönem: kopan; Doğu Han, Batı Han'ın devamıdır.
- 1949 (ÇHC / Tayvan ROC) çatalı AYRI karar bekler.

### B12 notu
Emre hem "parçalayalım, devam ettirmeyelim" hem "Babürün devamı Hindistan da Pakistan da
olabilir" dedi. Kurala uyum için uygulama: Babür'ün **asıl ardılı yok**; Hindistan ve Pakistan
(ve Bangladeş) eşit kopan zincir başı olur. Aksi isteniyorsa Emre düzeltir.

## Sonraki adım (henüz yapılmadı)
1. Şema: künyeye `oncul:` / `ardil:` (+ `kopan:` bayrağı) — `VERI-YAPISI.md` güncellenir.
2. A ve B kararlarının künye id'lerine eşlenmesi (id'ler tek tek doğrulanır).
3. `js/app.js`: geçiş penceresi. Harita motoruna dokunmaz.
4. Betik: `ozet`/`[[id]]` bağlantılarından aday zincir çıkarır, Emre onaylar.
