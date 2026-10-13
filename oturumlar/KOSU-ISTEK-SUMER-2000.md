# KOŞU İSTEĞİ — SÜMER-2000 (ufuk 1000 → 2000-12-31) · 13 Ekim 2026

**Kimden:** "Devletler indexi ve kronolojileri" oturumu (Emre'nin isteği) · **Kime:** HAVVA'da Emre'nin açtığı koşucu oturum
**Ne ister:** `uret_petek.py` TAM İNŞA, ufuk **1000-01-01 → 2000-12-31** (şimdiki: 1945-09-02). MÖ bu koşuda YOK.

## 0. Önce şunu söyle (iki ret sebebi)
1. **HAVVA'da başka bir koşu sürüyor mu?** Bu push TUZ dosyalarını (`renkler.py`, `girdi.py`) değiştirir; sürerken inerse koşunun
   parmak izi/tuzu bozulur (`KOSU-YAYIN.md` §9.1 ④). Süren koşu varsa BİTMESİNİ bekle.
2. **`data/ufuk_bant_parcalar.js` 91,48 MB** (GitHub 100 MiB sert sınırına %8,5 pay). Ufuk 2000'e uzayınca bant dosyası büyüyebilir.
   Koşudan ÖNCE `ls -la data/*_parcalar.js` ölç; pay %10'un altındaysa çare (parça bölme / bant hassasiyeti / Git LFS) **Emre'nin kararı**.

## 1. Bu isteğin taşıdığı değişiklik (hepsi `main`de, push kapısından geçti)
| Katman | Ne | Ölçü |
|---|---|---|
| Künye | 897 → 1797 devlet (Sümer MÖ ~2600'den 2000'e) | `devletler.js` |
| Kronoloji | 1755+ künyenin kronolojisi dolu; 329 sınır devir/kuruluş maddesi (`kronoloji_sinir_halef_1923_2000.js`) | her madde kaynaklı |
| Yerleşim sahipliği | 4000+ noktanın `s:` dönemi 1923-10-29 → 2000-12-31 (halef zincirleri, 16 ajan) | `yerlesimler*.js`, `yer_yama_*.js` |
| Yeni noktalar | +141 (89 noktasız devlet: Barbados, Mauritius, DDR…) | `yerlesimler_halef_1946.js` |
| Boya | +140 yeni kimlik (`renkler.py` BOYALAR; `renk_olc` temiz, 0 görünmez) + 58 `harita:` anahtarı | **TUZ DEĞİŞİR** |
| Ufuk | `girdi.py` UFUK/VERI_UFKU sonu 2000-12-31 · `js/app.js` BITIS/VERI_UFKU | **TUZ DEĞİŞİR** |

## 2. Koşu (KOSU-YAYIN.md'deki zorunlu bayraklarla — burada TEKRARLANMAZ, oradan oku)
`MOTOR_YURUYUS=1 MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=0 MOTOR_SUREC_ISCI=2 MOTOR_DEVAM=1`
Beklenen süre: **7–8 saat** (ufuk uzadığı için üst sınıra yakın). Tuz değişeceği için önbellek tamamen ıskalar.
İniş: `kodla.py yay` (4 hedef, her çıkış kodu okunur) → `coz-c` ×2 (tek satırda zincirleme YOK) → `denetle` → `renk_olc` → `paketle yenile`
→ `surum_damgala` → `denetle_yayin` → `push_kapisi --uretilen-onay`.

## 3. Koşudan sonra ÖLÇÜLECEKLER (bu oturum ölçemedi — koşu gerekir)
- Değişmez 8 (şehir bölgesi ülke sınırını aşamaz) 1946-2000 evreninde: tavanlar bu koşuda DONDURULUR.
- Haritanın 1946-2000 kesitlerinde (1950, 1990) gözle bakış: DDR/BRD ayrımı, Hindistan/Pakistan/Bangladeş, Sovyet ardılları.
- Tüm yeni kimliklerin renkleri komşuyla ayrışıyor mu (`renk_olc` çalıştırıldı ama komşuluk YENİ gövdeyle yeniden doğar).
- `ufuk_bant_parcalar.js` son boyutu.

## 4. Bilinen KALAN borç (gizlenmiyor)
- **MÖ kolu YOK:** motorda dizgi karşılaştırmaları (`uret_petek.py` ~20-40 yer, `girdi.py:687`, `renk_olc.engel_kumesi`) negatif yılda
  SESSİZ YANLIŞ verir; çubuk payı formülü (MÖ 3000'e inersek çekirdek %15'e düşer) **Emre'nin kararı**. MÖ ayrı tam inşadır.
- Taraz ve Sayram (Kazakistan) noktaları 1923'te kesik kalıyor (başka bir yama kazanıyor).
- Agadez: `agadez-sultanligi` künyesi `t=1923-10-29` ufuk-kesikli; `fransiz-bati-afrika` künyesi 1959'da bitiyor ama Agadez noktası 1960'a dek
  AOF sayılıyor (`BEKLENEN_ASAN` +1 beyanlı).
- 26 nokta-zinciri düzeltmesi PARKTA (1923 öncesini değiştiriyorlar); 37 künye-hatası notu: `nokta-birlesik.json` (scratchpad).
- La Agüera fiilî el değişimi Aralık 1975 (zincirde hukuki gün 1976-02-26); Labuan 1946-07-15.
- 857 künyede 1-3 kronoloji maddesi var (derinleştirilecek); 1000-1945 ve MÖ künye adaylarından kaynağı zayıf olanlar yazılmadı.
