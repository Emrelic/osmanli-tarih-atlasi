# SINIR-D-AVRUPA-BATI-0077 — çalışma defteri

Dosyam: `data/d_sinirlar_avrupa_bati.js` (tek; üreticisi `denetim/ARAC-D3BATI-URET-0916.py`).
Koordinatör: YILDIRIM BAYEZIT.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı 2026-09-24 ~13:10)

Görülen: YOK kayıtlarının id/pencere/`not` ilk satırı (72 kayıt: 10'u 1923-09-01'de
etkin, 62'si 1923 öncesi pencerelerde). Hiçbir hat/renk ÖLÇÜLMEDİ.

- **Ö1 · 72 YOK'un en çok 12'si** belgeye bağlanıp ÇİZİLEBİLİR (E/D/C) — darboğaz
  belge değil GEOMETRİ (dayanakların çoğu zaten dolu olmalı).
- **Ö2 · 1923-09-01'de etkin 10 YOK'un en çok 4'ü** çizilebilir: be-lu (1839/1843'ten
  beri değişmemiş → E), es-gib ve es-pt-guney (fiilî → `D`, hukukî görünümde çizilmez),
  it-shs-zara (C). fr-it 1947 öncesi 5 kesim ve it-shs ana hat YOK'ta kalır
  (1947/1954 sonrası geometri 1923'ü göstermez; eski hattın koordinatı çevrimdışı yok).
- **Ö3 · Ölçü (1923-09-01, 5 km iki yan):** pozitif kontrol `d1923-fr-de` ≥ %90
  vermeli; vermezse betik bozuktur (B9). Etkin E hatlarının ağırlıklı ortalaması ≥ %90.
  YOK→E'ye çıkan be-lu ÖNCE ≤ %85 → SONRA ≥ %95.
- **Ö4 · F:** etkin 39 E hattın en çok %40'ı (≤ 16) "iki taraf 1923-09-01'de MC üyesi"
  ölçütünü karşılar — Almanya (1926) ve İrlanda (10 Eylül 1923) dışarıda kalır;
  "MC'ye kayıtlı antlaşma" yarısı 1920 öncesi antlaşmalar için TANIMSIZDIR.

## 1. ÖLÇÜM (24 Eylül 2026)

Alet: `SINIR-D-AVRUPA-BATI-0077-olc.py` (nokta + skor) + `-olc.js` (tarayıcı yarısı).
Pane gizliyken MapLibre çizmediği için `devlet`/`osmanli` kaynağına setData'yı yakalayan
sahte kaynak takılıp `_dYaslaGuncelle` DOĞRUDAN çağrıldı — hesap d_katman.js'in kendisi.
Her 5 km'de bir nokta, 5 km sol/sağ; `boş` (deniz/göl/sahipsiz) orana girmez.

**B9 pozitif kontrol:** `d1923-fr-de` yaslamasız %71,4 (70/98) → yaslamalı %95,9 (94/98).
Alet ateşliyor; iki yön de sınandı (yaslama kapalıyken düşük, açıkken yüksek).

| | ÖNCE | SONRA |
|---|---|---|
| **d1923-be-lu** (YOK → E) | %45,5 (20/44) | **%86,4 (38/44)** |
| 48 hattın toplamı | %91,7 (2927/3192) | %92,3 (2945/3192) |

Öngörü sınavı: Ö1 ✓ (≤12; gerçek 1) · Ö2 ✓ (≤4; gerçek 1) · Ö3 pozitif kontrol ✓,
be-lu ÖNCE ≤%85 ✓, SONRA ≥%95 ✗ (%86 — kalan 5 yanlış üçlü nokta yakınında Almanya) ·
**Ö4 ✗ ÇÜRÜDÜ:** üyelik yarısını 40 etkin E hattın **32'si** karşılıyor (≤16 demiştim);
dışarıda kalan 8: Almanya 5 · Fas 2 · İrlanda 1 (üyelik 10 Eylül > 1 Eylül).
"MC'ye kayıtlı antlaşma" yarısı: 40 hattın dayanağında LNTS künyesi **0** — ölçülemedi.

### 1.1 Yaslamanın düzeltemediği hatlar (1923-09-01) — kök A katmanında
| hat | doğru | yanlış boya | teşhis |
|---|---|---|---|
| ch-at-1 · ch-at-2 | %0 · %0 | Almanya | Vorarlberg'de Avusturya gövdesi YOK (`sağ 0/0 km²`) |
| it-at-1 | %50 | İtalya (Avusturya yanında) | K. Tirol'de Avusturya gövdesi YOK |
| fr-it-1 | %25 | İsviçre (İtalya yanında) | Aosta üst vadisinde İtalya gövdesi YOK |
| fr-ch-savoy-2 | %61 | İsviçre (Fransa yanında) | Chablais İsviçre'ye emilmiş; yön doğrulanamadı |
| be-fr | %86 | Lüksemburg 22 nokta (Belçika yanında) | Belçika Lüksemburg ilinde Belçika gövdesi eksik |
| fi-no-bati | %86 | İsveç 36 | üçlü nokta yakını |
| lu-de (C) · fr-ch-leman (C) | %62 · %41 | — | C yaslanmaz (kural) |
Tarayıcı uyarısı: `şerit kurulamadı (atlandı): d1923-be-nl-2@100, d1923-be-fr@100, d1923-be-lu@100, d1923-fr-es-llivia@100`.

### 1.2 Etkin 10 YOK — neden 9'u kaldı
- es-pt-guney: 1923'te hukukî hat yok, 1926 Lizbon sözleşmesiyle bölündü ⇒ bugünkü çizgi 1923 fiilî hattı DEĞİL.
- es-gib: çitin 1923'ten beri kaymadığına kaynak **bulunamadı** (hat ~1 km, yaslama eşiği 10 km altı).
- it-shs · it-shs-zara · fr-it-DEGISTI ×5: 1947 öncesi hattın koordinatı çevrimdışı YOK. Öneri: CShapes 2.0
  (ETH Zürih, hakemli) 1920-1941 İtalya–Yugoslavya ve 1947 öncesi FR–IT hattı — indirme izni gerekir; C olarak.
- 62 tarihî YOK (1606-1920): ölçüye (1923-09-01) etkisi sıfır; dokunulmadı.
  Fr–Es 1659-1868 için Capdevila (IGN) PDF'i 10 MB sınırını aştı, okunamadı.
