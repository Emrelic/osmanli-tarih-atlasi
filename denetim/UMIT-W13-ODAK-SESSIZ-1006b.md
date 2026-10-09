# UMIT-W13-ODAK-SESSIZ-1006b — sessiz duruş sayacı (SEKME_SESSIZ) + CLAUDE.md §9 eki

Koordinatör hükmü: sayaç açıldı. Ağaç `C:\atlas-w13` = origin/main `e051335c` + ODAK-SEKME-1006 + ODAK-METIN-1006. İş bitince ağacın diff'lerle aynı olduğu doğrulandı (`write-tree` eşit) ve ağaç kaldırıldı.
CLAUDE.md'ye YAZILMADI; diff, HEAD + 1006 kopyasından üretildi.

## 0. ÖNGÖRÜ — koddan ÖNCE mühürlendi
| öngörü | ölçüm | hüküm |
|---|---|---|
| SEKME_SESSIZ 53 (52 sahnede değil + 1 harita kaydı yok), GÖVDE 355 → 302 | **53** (52 + 1) · GÖVDE **302** | ✓ |
| Öteki dallar değişmez (3987 · 14 · 3613 · 1103), toplam 9072 | aynı | ✓ |
| OKUNMAYAN gövde maddelerinden 0–17 arası AYRICA sessiz | **6** (OKUNMAYAN'da sayılır, ayrıca basılır) | ✓ |
| iran 1555 → SESSIZ · poni 1405 → harita kaydı yok · sentetik 1800 → SESSIZ · 1470 → GOVDE · tavan +1 öter | hepsi tuttu | ✓ |
| ODAK-KAPI-SINAV kapı satırları değişmez | aynı | ✓ |

## 1. Ne değişti — `ODAK-SEKME-1006b.diff` (SEKME + METIN üstüne, 389 satır)
### `arac/odak_cozum.js`
- **Yeni dal `SEKME_SESSIZ`:**
  - Nerede: `maddeAc` gövde dalında, kutu yok ve odak/yer_kon yok.
  - Ne zaman: `devletiYay(d.harita || d.id)` boş dönerse. Bunun iki yolu var, ikisi de birebir taklit:
    - `DEVLET_HARITA`da o id yok (`harita_kaydi_yok`)
    - o gün etkin `dnm` yok (`sahnede_degil`)
  - Gün: `tarihAyarla` gibi 1281–1923'e kıstırılır.
- **app.js'ten metinle kesilen iki yeni parça:** `BASLANGIC/BITIS` ve `aktifAralik`. Kesim sonu `"\n}"` seçildi, CRLF'e dayanıklı. İlk denemede `"\n}\n"` CRLF ağaçta tutmadı ve alet doğru biçimde **ÇIKIŞ 2 ÖLÇÜLEMEDİ** verdi.
- **`d` = maddenin İLK künyesi** (tekil sayım). Çok taraflı madde başka sekmeden açılınca sonuç değişebilir. Künye×madde çiftinde sessiz duruş 72 (64 + 8).
- **⚠️ Ölçülemeyen üçüncü `return`:** gövde geometrisi boşsa `devletiYay` yine döner. Bunu sınamak `parcaCoz` ister; sorulmuyor, gövde var sayılıyor. Yanlış temiz yönüdür ve kodda yazılı.
- **OKUNMAYAN gövde maddesi** OKUNMAYAN'da kalır, ama `sessiz:` alanı taşır ve ayrı sayılır (bugün 6).

### `arac/odak_olc.py`
- **Tablo:** SESSIZ satırı ve "SESSİZ ayrımı" eklendi.
- **Kapı:** `sekme_sessiz` tavanı eklendi; desen OKUNMAYAN ile aynı.
  - Tavanda alan yoksa `ⓘ` basar, ötmez.
  - Alan varsa yalnız gerileme öter.
  - İki alan tek döngüde (`SEKME_TAVANLARI`).
- **`--tavan-yaz`:** yeni alanı da yazar.
- **🔴 Yanlış yönlendiren dört metin düzeltildi.** Hepsi yasak bayrağı öneriyordu; artık "ELLE indir" diyor ve `--tavan-yaz`ın evreni genişletip YENİ KAPSAM'ı affettiğini söylüyor:
  - "İYİLEŞME, tavan indirilmeli: `--tavan-yaz`"
  - "beyanlı borç KAPANDI … (`--tavan-yaz`)"
  - "İNCELE … `--tavan-yaz` ile evrene al"
  - tavan `not` alanındaki "--tavan-yaz ile INDIRILIR"
- **Kullanım metni:** `--tavan-yaz`a "YALNIZ İLK KURULUM" uyarısı eklendi.
- Bu metinleri ayrıştıran araç yok; `denetle.py` ve `ARAC-ODAK-TAVAN-INDIR-1001.py`de yalnız yorumda geçiyor.

### `denetim/ARAC-ODAK-SEKME-SINAV-1006.py`
- Altı yeni vaka (S1–S6) ve N5b tutarlılığı eklendi. Ö3 eşitliği `dal/alt` karşılaştırmasına çevrildi, çünkü dal artık `sessiz:` alanı da taşıyor.

## 2. Sınav — iki yönde
| sınav | koşul | sonuç |
|---|---|---|
| `ARAC-ODAK-SEKME-SINAV-1006.py` | | **20/0**, `data/` temiz |
| ↳ ötmeli | S1 iran 1555 → SESSIZ/sahnede_degil · S2 poni 1405 → SESSIZ/harita_kaydi_yok · S3 sentetik akkoyunlu 1800 → SESSIZ · S5 tavan 53 + sentetik → "SEKME_SESSIZ GERİLEDİ 54 > 53" | ✓ |
| ↳ ötmemeli | S4 aynı sentetik 1470 → GOVDE · S6 tavan 53, veri temiz → ✗ yok · N5b 53 = 52 + 1 | ✓ |
| `ODAK-KAPI-SINAV.py` | bugünkü tavan (438/655, Ogaden) | **3/2** — ① ② tavan yazılmadığı için, öncekiyle aynı |
| `ODAK-KAPI-SINAV.py` | önerilen tavan (aşağıda) | **5/0** |
| kapı ölçümü | önerilen tavanla | ihlal YOK, dört satır tavana eşit (325 · 355 · 1103 · 53) |

## 3. CLAUDE.md — `CLAUDE-MD-ODAK-1006b.diff` (CLAUDE-MD-ODAK-1006 üstüne, 28 satır)
- **Bayat cümle zaten gitti:** "⇒ kamera o günün OSMANLI sınırına uçar (`app.js:11835`) …" cümlesini **1006 diff'i zaten kaldırıyor**. Yerine iki yollu tarif geliyor: OLAYLAR → Osmanlı sınırı, sekme → gövde ya da sessiz duruş. Bu cümle HEAD'de hâlâ duruyor, çünkü 1006 henüz uygulanmadı.
- **1006b'nin eklediği:**
  - tavan listesine `SEKME_SESSIZ`
  - 🔴 satırına "`SEKME_SESSIZ` sayar" ve ölçüm notu: *devlet sekmesindeki beyanların HİÇBİRİ Osmanlı kutusuna gitmiyor (W13, 5 Eki)*
  - Sayı yazılmadı (bayatlar): 302/53 CLAUDE.md'ye girmedi, tavan dosyasından okunur.

## 4. D — tavan önerisi (koordinatör ELLE yazar, `--tavan-yaz` YASAK)
`denetim/ODAK-TAVAN.json`:
- `odaksiz`: 325
- `beyanli_yabanci`: 355
- `sekme_okunmayan`: 1103
- **`sekme_sessiz`: 53** (yeni)
- `bilinen_kusur`: `[]`
- `evren`: aynı kalır

🔴 **Tek commit şartı:**
- **Kod zinciri:** ODAK-SEKME-1006 → ODAK-METIN-1006 → ODAK-SEKME-1006b
- **Belge zinciri:** CLAUDE-MD-ODAK-1006 → 1006b
- **Tavan.**

Hepsi aynı committe inmeli. Yalnız kod inerse ODAK-KAPI-SINAV kırmızı yanar (3/2). Yalnız CLAUDE.md inerse belge, inmemiş dalları anlatır.

## 5. Diff denetimi (geçici indeks)
| diff | LF / CR | taban | ileri | `-R` | çıplak main |
|---|---|---|---|---|---|
| `ODAK-SEKME-1006b.diff` | CR **0** | origin/main + SEKME + METIN | **✓** | **✗** | ✗ (beklenen) |
| `CLAUDE-MD-ODAK-1006b.diff` | CR **0** | origin/main + CLAUDE-MD-ODAK-1006 | **✓** | **✗** | |

## 6. Bulunamadı / yan bulgu
- Boş geometri dönüşü ölçülmedi (§1).
- `iran` künyesinin `harita:` anahtarının 1555–1600'de neden çizilmediği hâlâ ölçülmedi. 52 sessiz vakanın kaçının bu tek künyeden geldiğini sayan bir döküm `--json` çıktısında var (`dosyalar[].sessiz[].kunye`); künye/renk sahibine.

## 7. git status
`C:\atlas-w13` kaldırıldı (`worktree list`: 0). Ağaçta diff'lerin dışında değişiklik yoktu.
