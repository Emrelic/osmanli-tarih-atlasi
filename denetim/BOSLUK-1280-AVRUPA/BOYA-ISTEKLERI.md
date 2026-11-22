# BOYA İSTEKLERİ — toplu paket (arac/renkler.py BOYALAR = motor dondurma)

Kural (EMRELİC 21 KASIM, 22 Kasım): koşu 40 sürerken `arac/renkler.py` ve `BOYALAR`a dokunan commit `main`e girmez.
Yeni künye isteyen dallar (bu dosyada satırı olanlar) BEKLER; koşu 40 inişi bittikten sonra, koşu 41 BAŞLAMADAN,
tek commit'le `BOYALAR` + bekleyen dallar KASA'dan inecek. Renkler mevcut paletle ayırt edilebilir seçilmeli
(`py arac/renk_olc.py`). Boya anahtarsız künye taşıyan dal kapıdan geçmez (renksiz künye = harita deliği).

Satır biçimi: `devlet-id | ad | f | t | kaynak | ihtiyaç duyan dal | önerilen renk | durum`

| devlet-id | ad | f | t | kaynak | dal | renk | durum |
|---|---|---|---|---|---|---|---|
| ~~naksos-dukaligi~~ | — | — | — | UMIT düzeltmesi (22 Kasım): künye `naksa-dukaligi` (devletler.js:1188, f 1207-01-01, t 1579-01-01) ve BOYALAR anahtarı ZATEN VAR | — | — | GEREKMİYOR |
| bearn-vikontlugu | Béarn Vikontluğu | kaynakta f yok | — | — | — | — | YAZILMADI (f bulunamadı) |
| artois-kontlugu | Artois Kontluğu | 1237/1238 çelişkili (Longnon / EB1911) | 1659 | — | — | — | şimdilik ihtiyaç yok |
| artois-kontlugu (Calais için) | Artois Kontluğu | 1237/1238 çelişkili | 1659 | Curveiller 1996 (ikincil): Calais 1265'te Boulogne'dan ayrıldı → Mahaut de Brabant (†1288) → Artois kontu Robert II; 1347'ye dek Artois'lı | lab-bosluk-duzeltme-2-1122 (BORÇ C62) | önerilmez, paletten `renk_olc.py` ile seçilir | **İSTEK (LAB 23 Kasım):** Calais 1281-1347 şu an `fransa`; kaynakta kralla fief ilişkisi yok. Künye + BOYALAR gelirse Calais dilimi `artois-kontlugu`ya çevrilebilir. Motor dondurması bitince karar (Emre/EMRELİC). Fief bağı için ikinci kaynak (Calais kont-ağası, Longnon) hâlâ borç. |

(UMIT'in kendi satırları: `BOYA-ISTEKLERI-UMIT21.md`. Şu an bekleyen gerçek boya isteği YOK.)
