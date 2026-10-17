# KOŞU İSTEĞİ — SÜMER-2000 (ufuk 1000 → 2000-12-31) · güncel: 14 Ekim 2026

**Kimden:** "Devletler indexi ve kronolojileri" oturumu (Emre'nin isteği) · **Kime:** HAVVA'da Emre'nin açtığı koşucu oturum
**Ne ister:** `uret_petek.py` TAM İNŞA, ufuk **1000-01-01 → 2000-12-31** (eski koşunun ufku: 1945-09-02). MÖ bu koşuda YOK.
**Tabandır:** `origin/main` 1725b28ea ve sonrası. Aşağıdaki sayılar o tabanda `girdi.yukle()` ile ölçüldü.

## 0. Koşuyu başlatmadan ÖNCE (iki ret sebebi)
1. **HAVVA'da başka bir koşu sürüyor mu?** Bu iş tuz dosyalarını (`renkler.py`, `girdi.py`, ufuk) zaten `main`e indirdi; sürerken
   koşu başlatılırsa parmak izi/tuz çakışır (`KOSU-YAYIN.md` §9.1 ④). Süren koşu varsa BİTMESİNİ bekle.
2. **Bant dosyası:** `data/ufuk_bant_parcalar.js` diskte (eski koşudan) **95,93 MB** — GitHub 100 MiB sınırına ~%4 pay. Ufuk 2000'e uzayınca
   büyüyecek. ÇARE HAZIR: `kodla.py` `bant` hedefi `bol_mib: 45` taşır (90eb4feca), `yay` base64 havuzunu ≤45 MiB'lık dilimlere böler,
   `app.js` ek dilim yükleyici içerir. **Bu çözüm koşuda hiç çalışmadı** — koşudan sonra dilimlerin her birinin boyutunu ölç ve
   sayfada tüm dilimlerin yüklendiğini gözle doğrula (`KOSU-YAYIN.md` ~132. satır).

## 1. Bu isteğin taşıdığı değişiklik (hepsi `main`de, push kapısından geçti — ölçü: `girdi.yukle()`/`devletler.js`, 14 Ekim)
| Katman | Ne | Ölçü |
|---|---|---|
| Künye | 897 → **1800** devlet (Sümer MÖ ~2600'den 2000'e) | `devletler.js` |
| Kronoloji | 1800 künyenin **1717'sinde ≥4 madde**; 83'ünde <4 (2 boş: `ma-in`, `kataban`; 5 tek madde; 34 iki; 42 üç) | her madde kaynaklı |
| Sınır devir maddeleri | `kronoloji_sinir_halef_1923_2000.js` (329) + `kronoloji_sinir_nokta2.js` (82) + `kronoloji_sinir_nokta3.js` (28) | Değişmez 2 evreni |
| Yerleşim | **4555 nokta** (önce 4461): +141 `yerlesimler_halef_1946.js`, +75 `yerlesimler_nokta2.js`, +19 `yerlesimler_nokta3.js`, 4000+ noktanın `s:` dönemi 2000-12-31'e uzatıldı (halef zincirleri) | `yerlesimler*.js`, `yer_yama_*.js` |
| Noktalı künye | 1800 künyeden **988**'inin `s:`/`isg:` kimliği taşıyan en az bir noktası var; 812 künyenin hâlâ hiç noktası YOK (aynı ölçütle önceki ölçüm 900'dü; ölçüt: künye kimliğiyle eşleşen `s:`/`isg:` dönemi — Osmanlı `d:` dönemleri sayılmadı, kimlik uyuşmazlığı/üst yapı payı ayrıştırılmadı) | bu oturumun noktasiz-olc ölçümü |
| Boya | `renkler.py` BOYALAR **986**; renksiz kimlik **0** (`girdi.yukle()` ile); 114+11+18 renk koşu hazırlıkları oturumundan | **TUZ DEĞİŞTİ (main'de)** |
| Ufuk | `girdi.py` UFUK `1000-01-01→2000-12-31`, VERI_UFKU `1281-01-01→2000-12-31` · `js/app.js` BITIS/VERI_UFKU | **TUZ DEĞİŞTİ (main'de)** |

## 2. Koşu (KOSU-YAYIN.md'deki zorunlu bayraklarla — burada TEKRARLANMAZ, oradan oku)
`MOTOR_YURUYUS=1 MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=0 MOTOR_SUREC_ISCI=2 MOTOR_DEVAM=1`
Beklenen süre: **7–8 saat** (ufuk uzadığı için üst sınıra yakın). Tuz değiştiği için önbellek tamamen ıskalar.
İniş: `kodla.py yay` (4 hedef, her çıkış kodu okunur) → `coz-c` ×2 (tek satırda zincirleme YOK) → `denetle` → `renk_olc` → `paketle yenile`
→ `surum_damgala` → `denetle_yayin` → `push_kapisi --uretilen-onay`.

## 3. Koşudan sonra ÖLÇÜLECEKLER (bu oturum ölçemedi — koşu gerekir)
- Değişmez 8 (şehir bölgesi ülke sınırını aşamaz) 1946-2000 evreninde: tavanlar bu koşuda DONDURULUR. Bu oturum ağacında Değişmez 8a
  tavanı 1505'te ölçüldü; nokta2/3 turunda 8a'yı aşan 9 nokta (Mühldorf, São Miguel Arcanjo, Tarascon-sur-Ariège, Ilanz, Arnhem,
  Krems, Eidsvoll, ...) BEKLETİLDİ — koşudan sonra yeniden denenebilir.
- Haritanın 1946-2000 kesitlerinde (1950, 1990) gözle bakış: DDR/BRD ayrımı, Hindistan/Pakistan/Bangladeş, Sovyet ardılları.
- Yeni 140+114+11+18 kimliğin renkleri komşuyla ayrışıyor mu (`renk_olc` çalıştırıldı ama komşuluk YENİ gövdeyle yeniden doğar).
- Bant dilimlerinin boyutu ve sayfada yüklenmesi (bkz. §0.2).
- **Görünür sonuç sınaması:** 812 noktasız künyenin ne kadarı gerçekten görünmez? (`devletler_harita.js` ile ölç.)

## 4. Bilinen KALAN borç (gizlenmiyor)
- **MÖ kolu YOK:** motorda dizgi karşılaştırmaları (`uret_petek.py` ~20-40 yer, `girdi.py:687`, `renk_olc.engel_kumesi`) negatif yılda
  SESSİZ YANLIŞ verir; çubuk payı formülü (MÖ 3000'e inersek çekirdek %15'e düşer) **Emre'nin kararı**. MÖ ayrı tam inşadır.
  MÖ künyeler ve MÖ yerleşim noktaları (sıfır) bu koşuda görünmez.
- **Noktasız künye açığı:** 1000–2000 ufkuna giren ~600 künyeden nokta turları (C grubu 350 + bekletilen 143) 94 nokta yazabildi; 100 nokta
  bağımsız kaynakla gün doğrulanamadığı için vazgeçildi, 9 nokta Değişmez 8a/2s'e takıldı, 262 "mevcut nokta düzeltmesi" gerekçeleri
  çekimser/Vikipedi-tek-dayanaklı olduğu için UYGULANMADI.
- Taraz ve Sayram (Kazakistan) noktaları 1923'te kesik kalıyor (başka bir yama kazanıyor).
- Agadez: `agadez-sultanligi` künyesi `t=1923-10-29` ufuk-kesikli; `fransiz-bati-afrika` künyesi 1959'da bitiyor ama Agadez noktası 1960'a dek
  AOF sayılıyor (`BEKLENEN_ASAN` +1 beyanlı).
- La Agüera fiilî el değişimi Aralık 1975 (zincirde hukuki gün 1976-02-26); Labuan 1946-07-15.
- **83 künyede <4 kronoloji maddesi** (2 tur derinleştirme sonrası kaynak bulunamadı; çoğu Batı Afrika, Amerika yerlisi, Madagaskar ve MÖ 2000 öncesi
  Mezopotamya/Elam/İndus). Kapsam denetimi dizin büyüdükten sonra YENİDEN koşulmadı; Sahra altı Afrika, Amerikalar, Okyanusya ve MS 750 öncesi Kuzey Avrupa hâlâ zayıf.
- 1000-1945 ve MÖ künye adaylarından kaynağı zayıf olanlar (Vikipedi-tek, başlangıç yılı bulunamayan, "tarihler yaklaşık") yazılmadı.
- Durum tablosu ve yayın kapısı JSON biçimli nokta dosyalarını (`"s":`) körde bırakabiliyordu; düzeltme 478741065/dc015cb6e ile indi — koşudan sonra delik ölçümünü `girdi.yukle()` tabanlı da doğrula.
