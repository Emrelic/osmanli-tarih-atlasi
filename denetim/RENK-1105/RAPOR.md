# RENK-1105 — renk partisi uygulaması ve Koşu 33 renk denetimi (HAVVA SALI, 5 Kasım 2026)

## Ne yapıldı
- Öneri kaynağı: `denetim/RENK-1103/renk_oneri.json` (origin/renk-1103-oneri, commit 22ed97bfb; 289 öneri).
- Karar: Emre, 4 Kasım 2026 sabahı (koordinatör EMRELİC 1 KASIM aktardı): partinin TAMAMI uygulanır,
  ΔE76 > 30 olan 131 değişiklik dahil; bosna ve kaheti de değişir.
- Uygulayan betik: HAVVA oturum scratchpad'inde `renk_parti_uygula.py` (taban origin/main c1d7e59ba = Koşu 33 inişi).
- Sonuç (`renk_parti_rapor.json`, bu klasörde):
  - renk değişimi uygulandı: **218**
  - bunlardan Emre listesi (ΔE76 > 30, onaylı): **130**
  - yeni BOYALAR anahtarı (boyasız künyeler + bölünmeler): **70**
  - eşleme (künye id ← anahtarın yeni rengi; fetret-*, bosna-kralligi, atina, kaffa …): **8**
  - PAYLASIM'dan çıkarılan: **1** (dobruca ↔ kaheti #5ad224; kaheti #8afc1e oldu)
  - atlanan: **1** (habsburg — avusturya rengini koruyor; KASA çevirisi kapatır)
- Tuz dosyası (`arac/renkler.py`) ⇒ aynı commit'te `py arac/uret_altlik.py` + `data/altlik.js`. Bir sonraki
  tam inşa (Koşu 34) yeni renklerle koşar.

## renk_olc ölçümü (çıkış kodu 0)
Aynı ağaç, Koşu 33 üretilmiş çıktısıyla (coz-c ×2), parti ÖNCESİ (Koşu 33 inişi) → SONRASI:

| ölçü | önce | sonra |
|---|---:|---:|
| görünmez | 0 | 0 |
| komşusuyla çakışan çift (ΔE < 12) | 64 | **2** |
| aynı-hex çakışması | 2 | 1 |
| yakın-ama-değmeyen (eşzamanlı, < 600 km, ΔE < 12) | 248 | **13** |
| denizle karışan (birleşim) | 520 | 459 |
| beyan edilmemiş PAYLASIM uyarısı | 125 | 111 |
| aynı-anahtar örtüşmesi (ΔE 0, renk değil künye/anahtar konusu) | 162 | 162 |

Kalan 2 komşu çakışma:
- `avusturya ↔ habsburg` ΔE 0.0 — BEKLENEN (habsburg avusturya'nın rengini taşıyor; KASA'nın s: çevirisi kapatır).
- `maratha ↔ portekiz-hindistani-goa` ΔE 6.4 — YENİ (parti denemesinden sonra main'e giren veriyle doğdu). ÖNERİ:
  portekiz-hindistani-goa için ΔE ≥ 15 bir renk; renkler.py tuzudur ⇒ Koşu 35 öncesi Emre'ye.

## Açık konular (öneri — renkler.py motor tuzudur, Emre onayı ister)
1. Almanya bölünmesindeki yeni id'ler (kutsal-roma, alman-imparatorlugu, weimar, nazi-almanyasi …) main'e
   girince almanya'nın #78d028 rengini alacak + PAYLASIM beyanı (Emre kararı). KASA bildirecek.
2. 111 beyan edilmemiş PAYLASIM: çoğu farklı çağlardaki devletler (ör. #5eecb2: alania, atropatene, ebla…),
   eşzamanlı değiller. Kasıtlıysa PAYLASIM'a yazılmalı, tesadüfse ayrılmalı — toplu karar Emre'ye.
3. 162 aynı-anahtar örtüşmesi renk kusuru değil, `harita:` anahtarı / künye örtüşmesi; LAB/KASA künye işi.
4. renk_olc MÖ tarih kıyası hatası (tarih dizesi olarak kıyaslanıyor; "-0545" < "-2419" sorunu) — 3 Kasım'da
   bildirildi, düzeltilmedi.
5. Ajanın RENK-1103'te verdiği "ΔE>30: 43" sayısı yeniden üretilemedi (renk_olc.dE ile 131); güvenilmez.

## Ölçülemeyen
- 98 113 çift "ölçülemedi" (canlı veride dönemi olmayan kimlikler) — temiz değildir.
- Künye ↔ BOYALAR ↔ `harita:` tam çapraz tablosu bu turda çıkarılmadı (betik hazır: oturum scratchpad
  `renk_kunye.py`); bir sonraki turda.
