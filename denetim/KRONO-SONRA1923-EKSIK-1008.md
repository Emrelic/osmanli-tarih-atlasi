# KRONO-SONRA1923-EKSIK-1008 — 1923-1945 toprak olaylarının eksik kronoloji maddeleri

Makine UMIT · ağaç `C:\atlas-ks1923` (temel `origin/makine/umit` 8b2f5415) · 9 Ekim 2026
Kaynak listesi: `denetim/ZAMAN-Z5-1008.md` ② (satır 119-122). Diff UYGULANMADI, commit yok.

## ① Önce ölçüm: madde gerçekten yok mu?
Evren: `data/` altında `kronoloji*` · `olaylar*` · `devletler.js` = **185 dosya**, t ∈ [1920, 1947) **1.006 madde**
(çok taraflı + tek künyeli dosyalar + künye-içi `kronoloji:` listeleri, node `vm` ile yüklendi; üç yazım biçimi sorunu yok).

| olay | çok taraflı / dosya maddesi | künye-içi | hüküm |
|---|---|---|---|
| Hatay kuruluşu 1938-09-02 | YOK (1937-05-29 ve 1938-07-05 maddeleri var) | `hatay-devleti` | yazıldı |
| Hatay ilhakı 1939-06-23 | YOK | `turkiye-cumhuriyeti` · `hatay-devleti` | yazıldı |
| Burma ayrılışı 1937 | YOK | YOK | yazıldı |
| Mançukuo kuruluşu 1932 | YOK (1932-09-15 tanıma maddesi var) | `mancukuo` 1932-03-09 (Pu Yi'nin göreve başlaması) | 1932-03-01 ilanı yazıldı |
| Saar plebisiti 1935 | YOK (yalnız 1920 maddeleri var) | `saar-havzasi-mandasi` 1935-01-13 · 1935-03-01 | iki madde yazıldı |
| II. Viyana Hakemliği 1940-08-30 | YOK (1938 I. Hakemlik, 1944/1945 geri dönüş var) | `romanya-kralligi` | yazıldı |
| Maan 1925 | YOK | YOK | yazıldı (yıl hassasiyetli) |
| **Rio Protokolü 1942** | **VAR** — `kronoloji_cok_1923_1945.js` 1942-01-29 *"Rio Protokolü: Ekvador tartışmalı Amazon topraklarının büyük kısmını Peru'ya bıraktı"* | — | **YAZILMADI — mükerrer.** Z5'in "yok" hükmü yanlış (Z7 vakasının aynısı) |

## ② Yazılan 8 madde (`data/kronoloji_cok_1923_1945.js`, kronolojik yerine)
| t | madde | taraflar | kaynak | yer_id |
|---|---|---|---|---|
| 1925-01-01 | Maan ve Akabe Şarkî Ürdün'e katıldı | urdun-emirligi · hicaz-kralligi | TDV `maan` (YIL) | Maan |
| 1932-03-01 | Mançukuo'nun kuruluşu Mukden'de ilan edildi | mancukuo · cin-cumhuriyeti · meiji-japonya | FRUS 1932 c. III d. 520 | Mukden (Şenyang) |
| 1935-01-13 | Saar halkoylaması | saar-havzasi-mandasi · almanya · fransa-cumhuriyet | FRUS Paris 1919 c. XIII Saar bölümü · GHDI (Alman Tarih Enstitüsü, Washington) | Saarbrücken |
| 1935-03-01 | Saar Almanya'ya katıldı | almanya · saar-havzasi-mandasi · fransa-cumhuriyet | GHDI · FRUS Paris 1919 c. XIII | Saarbrücken |
| 1937-04-01 | Burma İngiliz Hindistanı'ndan ayrıldı | ingiliz-hindistani · ingiltere | TDV `myanmar` (YIL) + EBSCO Research Starters (GÜN) | Rangun (Yangon) |
| 1938-09-02 | Hatay Millet Meclisi açıldı, Hatay Devleti kuruldu | hatay-devleti · turkiye-cumhuriyeti · suriye-lubnan-mandasi · fransa-cumhuriyet | TDV `antakya` | Antakya |
| 1939-06-23 | Hatay'ın Türkiye'ye katılması kesinleşti | turkiye-cumhuriyeti · hatay-devleti · fransa-cumhuriyet · suriye-lubnan-mandasi | TDV `antakya` | Antakya |
| 1940-08-30 | II. Viyana Hakemliği, Kuzey Erdel Macaristan'a | romanya-kralligi · macaristan-naiplik · almanya · italya | TDV `erdel` | Viyana |

- TDV alıntıları kaydedilmiş gövdeye karşı **program ile birebir doğrulandı** (5/5; biri — "olağan üstü" iki kelime — ilk sürümde yanlıştı, düzeltildi).
  İngilizce alıntılar çekilen sayfa metninden kopyalandı. Britannica 403 verdi (curl ve WebFetch) → kullanılmadı.
- Değişken adı `KRONOLOJI_COK_1923_1945` `data/` altında yalnız bu dosyada (1). `index.html` zaten bağlıyor (satır 1277).

## ③ Kapılar
| kapı | önce | sonra |
|---|---|---|
| `node --check` | — | ✓ |
| madde sayısı | 503 | 511 (+8) · sıralı ✓ · t+b ikizi 0 |
| eşlenemeyen taraf | — | **0** / 8 maddenin 25 tarafı |
| `py arac/denetle.py` | **çıkış 2** | **çıkış 2** — ikisinde de tek ölçülemeyen soru: Değişmez 8 (`devletler_harita.js` taze ağaçta yok). `Değişmez`/`Ek denetim` satırları önce ve sonra **birebir aynı** (diff 0) |
| `py arac/odak_olc.py` | dosya 503/503 KONUMLU | **511/511 KONUMLU** · ODAKSIZ 0 · →yabancı 0 · çıkış 0 · SEKME 10807 → 10815 |
| diff | — | 123 satır ekleme, LF (CR 0), `git apply --check` temiz (`-R` ile ağaçta doğrulandı) |

## ④ Bulamadıklarım
- **Maan 1925: ay ve gün bulunamadı.** TDV `maan` yalnız yıl veriyor; `akabe` ve `urdun` gövdelerinde 1925 katılışına gün yok. t = `1925-01-01` yıl-temsilîdir (`ic_not_t`'de beyanlı). Bu, ±30 gün senkronunu bu madde ile kuramaz; Z5'in yazmadığı Maan kırılması için de gün dayanağı yok.
- **Hatay'ın fiilî devri (Fransız çekilişi, Temmuz 1939)** TDV `antakya`da günüyle görülmedi; yazılmadı.
- **Macar birliklerinin Kuzey Erdel'e girişi (Eylül 1940)** günüyle kaynakta görülmedi; yazılmadı.
- TDV `birmanya` ve `mancurya` slug'ları **302** (ölü); `myanmar` canlı.

## ⑤ Bildirim ve öneriler (koordinatör kararı)
1. **Rio Protokolü mükerrer** — Z5 raporunun ② listesinden düşülmeli. Z5'in "kronolojide YOK" listesindeki öteki altı olaydan dördü (Hatay ×2, Mançukuo, Saar, II. Viyana) künye-içinde VARDI; yalnız Burma ve Maan hiçbir yerde yoktu; "yok" hükmü yalnız çok taraflı dosyalar için doğruydu.
2. **Burma künyesi yok** (Z5 K kovası, 27 nokta): öneri `ingiliz-birmanyasi` · f 1937-04-01 (EBSCO) · t 1948-01-04 (bu raporda kaynaklanmadı) · `harita: ingiltere`. Künye inince 1937-04-01 maddesinin `taraflar`ına eklenmeli.
3. **`mancukuo` künyesi f:1932-03-09** (Pu Yi'nin göreve başlaması). Devletin ilanı 1932-03-01 (FRUS d. 520) ⇒ künye aşımı sınıf ② (aynı yapı sürüyor) — **f 1932-03-01'e genişletme önerisi.** Bugün madde künye penceresinden 8 gün önce düşüyor (`ic_not_t`de beyanlı).
4. **TDV `maan` kendi içinde tuhaf** (§4 ⑥): katılışı "Ali devlet idaresini kardeşi Abdullah'a devrettiğinde" diye bağlıyor; Ali Hicaz'ı 1925 sonunda Suudîlere kaybetti. Cümle olduğu gibi alıntılandı, metne yalnız katılış olgusu taşındı.
5. Z5 listesinde olup bana verilmeyen **Aden 1937** ve **Pehlevi 1925 (künye-içi `kaynak:` boş)** açık kalıyor.
6. Bu maddeler toprak kırılmasının **karşılığıdır**; Mançurya (11 nokta), Saar, Burma (27), K. Erdel (3), Maan noktalarının yerleşim yamaları ayrı iştir (Z5 T/K/D kovaları). Dosya bugün Değişmez 2 evreninde olmadığı için senkron ölçülmedi.

## Dosyalar
- `denetim/KRONO-SONRA1923-EKSIK-1008.md` (bu rapor)
- `denetim/KRONO-SONRA1923-EKSIK-1008.diff` → `data/kronoloji_cok_1923_1945.js` (+8 madde)

## § v2 (1009) — KUYRUK-2-1009
Ölçen KUYRUK-2-1009 · taban `origin/main` 0c4b383c (fetch sonrası) · ikinci taban: main + `ZAMAN-PAKET-1009.diff` (`-C1`) · ağaçlar `C:\atlas-umit-k2a` / `-k2z` (kaldırıldı) · commit yok.
Yöntem: hunk hunk `git apply --check` ileri/geri (+ satır içerik araması); İNDİ denen her şey iki yönde: ① iniş commit'inin ATASINA diff uygulandı, dosyalar commit ile `git diff --quiet` karşılaştırıldı ② bugünkü HEAD'de `-R --check`.
`denetle.py` (`PYTHONHASHSEED=0 --ayrinti`): main önce/sonra ve ZAMAN önce/sonra — DÖRT koşu da **çıkış 2** (yalnız D8 ÖLÇÜLEMEDİ, UMIT tabanı). Önce↔sonra çıktıları **bayt bayt aynı** (B+C birlikte uygulanmış hâl, iki tabanda). ⇒ DEĞİŞEN SAYAÇ YOK; "kaç bekleyen diff dokunuyor" satırı boş küme. Taban kaydı (main): D1 309/309 · D2 628/0 · 2s 1738 · AÇIK 181 (tavan 181) · 2sk yalnız-taraf 2265 (tavan 2265).

### Ölçtüm
| diff | temiz main | main + ZAMAN-PAKET | kova |
|---|---|---|---|
| `.diff` (A, +8 madde) | ✓ 7/7 hunk | ✓ | TEMİZ |
| `-B.diff` (+5 madde) | tek başına ✗ (1 hunk BAĞLAM — A'nın eklediği satırlara yaslanıyor) · **A'dan sonra ✓** | A'dan sonra ✓ | TEMİZ (A → B sırasıyla) |
- ZAMAN-PAKET de `kronoloji_cok_1923_1945.js`e 3 madde ekliyor (1925-02-13 · 1932-10-03 · 1941-08-25); A+B'nin 13 maddesiyle **ortak `t` 0**.
- `node` ile: main + A + B ⇒ 513 madde, t+b ikizi 0 · main + ZAMAN + A + B ⇒ **516** madde (B raporunun öngördüğü sayı), ikiz 0, sıralı ✓.
- ⇒ Görevdeki "Z7-MADDE → A → B" sırası METİN olarak zorunlu DEĞİL (A ve B temiz main'e de oturuyor); sıra yalnız 516 sayısının tutması için anlamlı.
ZATEN MAIN'DE 0 · çakışma 0 · geçersiz varyant 0. Sayaç değişimi yok (dosya Değişmez 2 evreninde değil).

### Bulamadım
`-KUNYE.json`daki 3 künye önerisi (`devletler.js`, koordinatörde) bu ölçümün dışında — diff değil, uygulanmadı/ölçülmedi.

### İstiyorum
v2 YAZILMADI: **iki tabanda da temiz**. İniş: (ZAMAN-PAKET) → A → B, aynı commit önerilir. Künye önerileri ayrı kalem.
**YENİ DOSYALAR:** yok.
