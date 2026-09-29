# KRONO-OSMANLI-CEVRE-0929 — Anadolu · Arabistan senkron açıkları (teslim raporu)

> 29 Eylül 2026 · şartname `oturumlar/KRONO-DALGA3-0929-ORTAK.md` (kendi satırı) ·
> iş listesi `denetim/SENKRON-DEFTER-0929.json` · model Opus.

## 1. Teslim edilenler

| Dosya | Global | Madde |
|---|---|---|
| `data/kronoloji_cok_anadolu2.js` | `window.KRONOLOJI_COK_ANADOLU2` | **8** |
| `data/kronoloji_cok_arabistan2.js` | `window.KRONOLOJI_COK_ARABISTAN2` | **3** |
| `denetim/KRONO-OSMANLI-CEVRE-0929-DUZELTME.md` | — | 4 olgu hatası + 11 başlık önerisi + 2 çelişki |
| `denetim/KRONO-OSMANLI-CEVRE-0929-YERLESIM-ONERI.md` | — | 11 harita önerisi |
| `denetim/KRONO-OSMANLI-CEVRE-0929-KUNYE.md` | — | şartname itirazı + 2 künye kusuru |
| `denetim/KRONO-OSMANLI-CEVRE-0929-tdv.py` · `-cumle.py` · `-tdv-onbellek/` | — | ~50 TDV gövdesi |

İki veri dosyası `index.html` + `arac/paketle.py` bağlantısını bekliyor (koordinatör).

## 2. EN DEĞERLİ SATIR — 49 aday nasıl ayrıldı

Defterdeki açık (gün × eski→yeni) grupları: Anadolu 25 · Arabistan+künyesiz 24 = **49**.

| Sınıf | Anadolu | Arabistan | Toplam | Ne yapıldı |
|---|---|---|---|---|
| **A — gerçek, hiçbir yerde yazılı değil** | 7 | 2 | **9** | 11 madde yazıldı (2'si komşu yılın doğru tarihli maddesi: 1341 Afyon, 1835 Hâil) |
| **B — olay AYNI GÜN yazılı, başlık yeri/tarafı anmıyor** | 10 | 8 | **18** | yazılmadı (mükerrer olurdu) → DUZELTME B1-B11 başlık önerisi |
| **C — harita tarihi TDV ile çelişiyor** | 5 | 7 | **12** | yazılmadı (hatayı kalıcılaştırırdı) → YERLESIM-ONERI |
| **ölçülemedi** | 3 | 7 | **10** | kaynak bulunamadı; rapor §4 |

📌 **Ana bulgu:** Bu paketin açıklarının çoğu MADDE eksikliği değil, **ÖLÇÜT–BAŞLIK uyumsuzluğudur.** `denetle.py` 2s taraf kolu künye adının tamamını ya da ≥4 harfli ilk kelimesini kelime sınırıyla arıyor; "Germiyan'ın vasiyetle ilhakı" `Germiyanoğulları`nı, "Reşîdîler" `Şammar (Reşîdî) Emirliği`ni, "II. Suûdî Devleti" ise hiçbir şeyi eşlemiyor (ilk kelime "ii." 3 harf). Çekirdekteki 18 başlık düzeltilirse 2s AÇIK gerçekten düşer; yeni madde yazmak düşürmezdi.

## 3. Ölçtüklerim

- `kronoloji_anadolu.js` 281 ve `kronoloji_arabistan.js` 60 madde, yazmadan ÖNCE tek tek okundu; çekirdek `olaylar*.js`'teki aynı gün maddeleri başlıklarıyla karşılaştırıldı.
- 11 madde: on zorunlu alan 11/11 · künye id'si 11/11 var · künye penceresi içinde 11/11 (yemen-zeydi'deki "pencere dışı" uyarısı künyenin doldurulmamış yılından — KUNYE.md §2) · `node --check` temiz · `odak_olc`: 11 KONUMLU, ODAKSIZ 0, →yabancı 0.
- `denetle.py`: tahtadaki teslim mesajında.
- Gün kaynakta yoksa `YYYY-01-01` + `gun:`; üç 1402 maddesi TDV'nin "Ankara Savaşı'ndan sonra" ifadesi yüzünden savaş gününü EN ERKEN sınır olarak taşıyor (`gun:`de beyanlı).
- İki madde kasten kendi kırılmasını KAPATMIYOR (1341 Afyon ↔ harita 1327; 1835 Hâil ↔ harita 1836): madde kaynağın tarihinde, harita düzelince eşleşecek.

## 4. Bulamadıklarım (`bulunamadı` / `ölçülemedi`)
- **Teke** ve **Mutahharten**'in 1402 iadesi, **Erzurum/Aşkale** 1403 timurlu→mutahharten — TDV `tekeogullari`, `kemah`, `erzincan`'da iade cümlesi yok.
- **Kuveyt 1716** (Benî Hâlid) — TDV `kuveyt` kuruluş yılı vermiyor.
- **Necid içi 1792 / 1795** (Harc, Havta, Leylâ) — TDV `necid`, `suudiler` bu yerleşimlerin tarihini vermiyor.
- **Türabe 1919-05-26** — `turabe` 302, `hurma` maddesinde 1919 yok.
- **Asîr 1920** — TDV `ebha` yalnız Ekim 1918-Şubat 1919 Osmanlı çekilişini veriyor; Suûdî fethinin yılı yok.
- **Kemeran/Ferasan 1849** — TDV `hudeyde` yalnız yıl (1849); harita 05-01, kuyruk 01-01 — gün kaynaksız.
- **Hicaz kuzeyi 1917-18** (el-Vech, Tebük, el-Ulâ, Medâin-i Sâlih) — `vech`, `medain-i-salih`, `hicr` 302; `tebuk` tarih vermiyor.
- 302 slug'lar: mentesogullari, haciemir*, mutahharten*, asir, turabe, vech, nebhani(ler), kesiri*, beni/benu-halid, sammer/semmer, hail, darende, gurun, aiz-ogullari.

## 5. Şartname itirazı
Sevk mesajındaki *"hicaz · suud · yemen için künye YOK"* **yanlış**: künyeler var (`hicaz-kralligi`, `suud-birinci/-ikinci/-ucuncu`, `yemen-zeydi`), haritadaki değerler `harita:` anahtarıdır. `SENKRON-DEFTER` aracı `harita:` → künye çözümünü yapmıyor. Ayrıntı KUNYE.md.
