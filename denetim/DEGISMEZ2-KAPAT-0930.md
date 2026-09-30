# DEGISMEZ2-KAPAT — 30 Eylül 2026 teslim raporu

## ① Ne ölçtüm
- Evren: `denetim/ARAC-DEGISMEZ2-KAPAT-0930.py` — `denetle.py` 2s zincirinin BİREBİR çağrısı
  (`degismez2(Y_cekirdek, O, ("s",), yer_sarti=True)` → `kapsam_disi` → `yil_temsili_ayir`);
  tam `denetle.py` KOŞTURULMADI. `--ile` bayrağı dosyamı O'ya katar.
- Başlangıç (dosyasız): **1709 kırılma · 191 AÇIK** (tavan 195) · 792 KAPSAM DIŞI · 164 YIL-TEMSİLÎ.
  Şartnamedeki 189 bayattı (§1.5 tablosu 1689 kırılma diyordu; bugün 1709).
- Son (dosyayla): **116 AÇIK** · açık yerleşim-satırı 2017 → 453. **Kapanan tarih: 75.**
- Dosya: `data/kronoloji_cok_senkron_0930.js` → `window.KRONOLOJI_COK_SENKRON_0930` · **68 madde**
  - hepsinde gün var (68/68 · yıl-temsilî 0)
  - `node --check` ✓ · eşlenemeyen taraf **0** (137 atıf) · küresel ad başka dosyada **0**
  - odak (M-5660): **68/68** · `yer_id` 60 (çözülmeyen 0) · `odak_kimlik` 8 (çözülmeyen 0) · `kapsam_genis` yazılmadı
  - kaynak: 26 maddede TDV (gövde cümlesi aracın çektiği sayfadan) · 48 kaynak künyesi "sayfa açılmadı"
    diye `ic_not_k`de beyanlı (akademik eser adıyla, sayfa bu oturumda açılmadı)
  - `ic_not_t`: 17 madde — **veri günü ile kaynak günü çelişen: 9** (Kaynarca 21↔26 Tem TDV ·
    Merv 2↔1 Ara TDV · Kazan 2↔15 Eki TDV · Üsküp 26↔23-24 Eki TDV · İyon 21 May(Jül)↔2 Haz ·
    Silezya 3↔20 Haz · Kano 15 Oca↔3 Şub · Sardinya 2↔8 Ağu · Vedroşa 1 Ağu↔14 Tem); hepsi ±30 içinde.

## ② Ne bulamadım / kapanmayan
- **1413-07-05** — Çamurlu Derbent maddesi 142 satırı açıklar ama tarih AÇIK kalır: Sivrihisar
  (karaman→Osmanlı) ve Çankırı (candar→Osmanlı) kaynakta bu güne bağlanmıyor ⇒ veri incelemesi.
- **1402-07-28** (90 satır) — memluk 4 · mutahharten 3 · şövalye→aydın 1 kaynakla bu güne
  bağlanamadı; tarih tek maddeyle kapanamaz, yazılmadı.
- **1916-09-01** (25) — Doğu Afrika + KAMERUN (Garua, Banyo, Ngaunder…) aynı güne yazılmış; Kamerun
  1915-16'da düştü ⇒ VERİ HATASI, madde yazılmadı.
- **1404-03-01** (14) — TDV mehmed-i: yalnız "806 (1403-1404)" ⇒ gün/yıl kaynakta yok.
- **1387-11-01** (19) · **1461-06-01** (8) — kaynak yalnız AY veriyor ⇒ kural gereği `YYYY-01-01`, kapatmaz.
- 1510-12-01 Merv maddesi: aynı tarihte Hürmüz Adası/Kişm (Hürmüz→Safevî), Esterâbâd, Dihistan da
  geçiyor — Merv onları açıklamaz; veri incelemesi.
- 🟡 **Hayalet adayı:** veri `musa-celebi`ye 1410-06-15'te toprak veriyor; künye `fetret-musa`
  f: 1411-02-17. (`§3.5`)
- TDV ölü slug (302): suleyman-celebi · mohac-savasi · karlofca-antlasmasi · belgrad-antlasmasi ·
  bukres-antlasmasi · kirim-hanligi · residogullari · musul · hail · sahrizor. `londra-antlasmasi`
  canlı ama 1913 değil (gövdede '30 Mayıs' yok).

## ③ Ne istiyorum
1. 🔴 **`denetle.py olaylari_yukle` YALNIZ `olaylar*.js` + `kronoloji_sinir*.js` okur** —
   `kronoloji_cok_*` Değişmez 2 evreninde DEĞİL. Dosya `index.html`e bağlansa da denetim 191 der.
   Kapanışın sayılması için ya evrene katılmalı ya maddeler `olaylar*`e taşınmalı (karar koordinatörün).
2. Dosyayı `index.html`e bağla (desen `KRONOLOJI_COK_*`, `cokTarafliKronolojiEkle` okur).
3. Kalan 116'nın en büyükleri yukarıda — çoğu veri/kaynak çelişkisi, madde değil veri işi.

## Araçlar (denetim/)
`ARAC-DEGISMEZ2-KAPAT-0930.py` (2s ölçümü) · `-ozet.py` · `-tdv.py` (TDV gövde grep) ·
`-yer.py` (yer adı / `--dogrula`) · `-taraf.py` (kapı ②③) · `-odak.py` · `-kimlik.py` ·
`DEGISMEZ2-KAPAT-0930-acik.json` (son açık liste: gün · yer · eski → yeni).
