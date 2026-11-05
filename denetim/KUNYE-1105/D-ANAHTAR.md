# KUNYE-1105 — `d:` alanında künye id'si yerine boya anahtarı (sabah Emre kararı)

LAB SALI · `lab-1104-kunye` · 6 Kasım 2026 · **ÖNERİ — veriye dokunulmadı.**
Tarama önerisi LAB, ilk ölçüm KASA SALI (origin/main, satır sayımı: 962 satır, 56 anahtar). LAB'ın sınıflaması
dönem dökümü üzerinden (`hayalet/donemler.json`, 5 Kasım 00:20, origin/main, yalnız `s:` alanı) — birim **dönem**,
KASA'nınki **kaynak satırı**; sayılar bu yüzden farklıdır. Tam liste: `D-ANAHTAR.tsv`.

## Ölçüm

- Kural (CLAUDE.md "Veri kuralları"): `s:[{d:"..."}]` içindeki kimlik `devletler.js`teki gerçek `id:` olmalı ve BOYALAR'da tanımlı olmalı.
- **Motor bugün ne yapıyor** (`arac/uret_petek.py:1140-1145`, origin/main): `d:` BOYALAR'da **varsa doğrudan o renkle** boyanır;
  künyenin `harita:` alanına yalnız `d:` BOYALAR'da **yoksa** düşülür. Yani `d:"avusturya"` → BOYALAR `avusturya` rengi.
- Künye id'si olmayan `d:` değerleri: **24 anahtar, 3098 dönem**. Bunlardan `__BOSLUK__` 772 (bilinçli delik, kapsam dışı).
  Kalan **23 anahtar, 2326 dönem**:
  - **RENK_DEĞİŞİR 2212 dönem / 18 anahtar** — anahtarın `harita:` ile bağlı TEK künyesi var, ama o künyenin id'si BOYALAR'da
    **ayrı renkle** tanımlı. `d:`yi id'ye çevirmek **görünür renk değişikliği** yapar.
  - **ÇOKLU 109 dönem / 4 anahtar** — anahtar birden çok künyenin `harita:`sı (sirbistan 4, bulgaristan 5, suud 4,
    arnavutluk 6 künye): hangi id olacağı **döneme göre** seçilir (tarih aralığı ↔ künye f/t), mekanik değil.
  - **KÜNYESİZ 5 dönem / 1 anahtar** — `fransiz-fas` (1946-1956): hiçbir künyenin `harita:`sı değil → künye kararı.
  - **MEKANİK (renk aynı) 0** — renk değiştirmeden düzeltilebilecek tek satır yok.

| anahtar | dönem | bağlı künye | renk (anahtar → künye id) | aralık |
|---|---|---|---|---|
| suleyman-celebi | 626 | fetret-suleyman | #8dd5a2 → #5aa233 | 1402-1411 |
| musa-celebi | 432 | fetret-musa | #1e24e4 → #ec8a4f | 1410-1413 |
| mehmed-celebi | 396 | fetret-mehmed | #f90c15 → #d56c4f | 1402-1413 |
| avusturya | 370 | habsburg | #bdab3f → #198ab4 | 1281-1919 |
| isa-celebi | 180 | fetret-isa | #2424e4 → #42b5f4 | 1402-1403 |
| sirbistan | 58 | ÇOKLU (4) | — | 1281-1457 |
| ceneviz | 40 | cenova | #633c0c → #43a3f8 | 1281-1797 |
| sovalye | 30 | rodos-sovalyeleri | #3c424b → #bcbbfe | 1310-1798 |
| yemen | 30 | yemen-zeydi | #9fb454 → #9ec97a | 1281-1945 |
| sardinya | 30 | sardinya-piyemonte | #24de24 → #28d7fb | 1281-1861 |
| bosna | 30 | bosna-kralligi | #0a0381 → #4b8569 | 1281-1482 |
| bulgaristan | 29 | ÇOKLU (5) | — | 1281-1396 |
| suud | 19 | ÇOKLU (4) | — | 1744-1818 |
| hicaz | 16 | hicaz-kralligi | #78360c → #3fb996 | 1916-1925 |
| atinadukaligi | 11 | atina-dukaligi | #0c3fcc → #b0a503 | 1204-1456 |
| lusignan, milanoduka, fransiz-fas, kaffa, arnavutluk, vollayta, sidamo, cimma | ≤6 | — | — | — |

## Neden karar Emre'nin

Düzeltme sonucu ya **renk değiştirir** (çoğunluk) ya da **künye seçimi** ister. Renk değişikliği haritada görünür;
`renkler.py` motor tuzu olduğu için "id'nin rengini anahtarın rengine eşitle" yolu da tam koşu (7-8 saat) ister.

## Seçenekler (her anahtar için ya da toplu)

- **(a) Tek polity, tek renk:** `d:` → künye id'si; künyenin kendi BOYALAR rengi geçerli olur. Kural sağlanır;
  aynı devlet artık tek renkte (bugün örn. Cenova anakara mavi, Ege/Kırım kolonileri kahverengi). Yalnız veri; haritaya
  HAVVA koşusuyla yansır.
- **(b) Ayrı yapı, ayrı künye:** anahtarın temsil ettiği yapı gerçekten ayrı polity ise (EMRELİC'in Ceneviz örneği:
  Sakız Maonası, Gazaria/Kefe kolonileri; Rodos şövalyeleri vs. Hospitalier tarikatı) ayrı künye açılır, `d:` o id olur,
  renk korunur. Yeni künye BOYALAR'a girmeli → motor tuzu.
- **(c) Bilinçli tasarım olarak beyan:** Fetret çelebileri gibi bilerek ayrı boyanan dilimler (künyeleri VAR: fetret-*)
  için `d:` → `fetret-*` id'si ve künye renklerinin anahtar renkleriyle eşitlenmesi (renkler.py, tam koşu) ya da kural
  istisnası olarak beyan (`denetle` tavanı).

**LAB önerisi:**
- Fetret çelebileri: (c), künye renkleri anahtar renklerine eşitlenir — Fetret görsel ayrımı bilinçli.
- avusturya → habsburg ve tek-künyeli küçükler: (a).
- ceneviz: (b) — Ceneviz kolonileri ayrı idarî yapı, EMRELİC değerlendirmesi.
- ÇOKLU dörtlü: tarih aralığına göre (a) — KASA betikle önerir, LAB denetler.
- fransiz-fas: künye VAR — `fas-fransiz-himayesi` (1912-03-30 → 1956-03-02, harita:"fas"; ölçüldü). 5 dönem (1946-1956) → (a) d:"fas-fransiz-himayesi"; renk 'fas' anahtarına düşer mi, künye id BOYALAR'da mı — KASA sınasın.

## Ek: mükerrer künye — renk farkı yüzünden Emre kararı (6 Kasım)

- `nebhani` «Nebhânîler (Uman)» 1281 → 1624, BOYALAR `#60121b` — yerleşimlerde 20 kaynak satırı (yerlesimler.js 9, yerlesimler_h2_afrika.js 11).
- `nebhani-umman` «Nebhânîler (Umman Meliklikleri)» 1154 → 1624, BOYALAR `#f480cf` — yalnız kendi künye satırı.
- EMRELİC kuralı: referansı çok olan id kalır (`nebhani`), f 1154'e genişler; renkler farklı olduğu için birleşme Emre'ye. `nebhani-umman` BOYALAR girdisi kullanılmayan girdi olarak kalır (renkler.py motor tuzu).

Kararla birlikte `denetle.py`ye "`d:` künye id'si mi" denetimi eklenmesi önerilir (bugün 2326 dönem sessiz geçiyor).

- **burundi / burundi-krallik** (6 Kasım): aynı monarşi (1680 → 1966), iki künye, BOYALAR renkleri farklı (#3024d2 / #a8cc24) → birleşme renk değiştirir; Emre kararı. O zamana dek bitişik (1962-07-01).
