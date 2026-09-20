# DALGA-0920 — 20 Eylül 2026 · 1.MURAT

Ölçüm tabanı: GLM (dış model işçisi) taramaları — `glm/2S-YER-TARAMA.json` · `glm/SAHTE-343.json`
(sayıları 1.MURAT betikleriyle yeniden koşup doğruladı). Bunlar TASLAK ÖLÇÜMDÜR, hüküm işçinindir.
Açılış ve haberleşme: **CLAUDE.md §7.1–7.2** (tahta tek kanal · bekçi `--cik` Bash arka planda ·
ekrana durum yazısı YOK · teslim TEK mesaj · iş bitince bekçiyi öldür).
Kaynak: TDV birincil · yalnız akademik · Vikipedi tek dayanak değil · tarih uydurma · atlas referans değil.
🔴 Koşu 14 `C:/atlas-kosu14`ta SÜRÜYOR (ayrı worktree): ana klasörde `arac/uret_petek.py`ye DOKUNMA,
motor/kutu koşusu YAPMA (bellek). `denetle.py` koşmak serbest.
Commit: `data/` ve `arac/` paylaşılan — işçi commit DENEMEZ; teslimde dosyaları tek tek sayar, 1.MURAT commitler.

## DENETIM-YER-0920 (Opus) — Değişmez 2s'e yer şartı
**Kusur:** `arac/denetle.py` bir yabancı kırılmayı ±30 gün içinde HERHANGİ bir kronoloji maddesi varsa
kapalı sayıyor; maddenin o YERİ ya da TARAFLARI anlatıp anlatmadığına bakmıyor. Ölçülen sonuç
(GLM, doğrulandı): kapalı 1052 tarihin 679'unda madde yeri anıyor · 30'unda yalnız tarafı ·
**343'ünde ikisi de yok**; bunların 178'i gerçek eksik, 111'i yanlış eşleşme (doğru madde kuyrukta VAR),
53'ü yıl-temsilî tarih, 1'i toplu olay. Bilinen vaka: Mankup 1349 sahte kapanış.
**İş:**
1. `denetle.py`ye YER ŞARTI ekle: bir kırılmayı kapatan madde ya (a) yerleşimi/bölgesini anmalı
   (`yer_id` · ad çekirdeği · `m:` bölgesi) ya da (b) tarafı BAŞLIKTA anmalı ya da iki tarafı birlikte
   metinde anmalı. GLM'nin gevşek kolu ("gövdede tek kelime devlet adı") KABUL EDİLMEZ — vakası:
   Marconi radyo maddesi Nijerya'daki bir kırılmayı kapatıyordu.
2. Madde SEÇİMİ de düzelsin: ±30 gün içinde birden çok aday varsa yer eşleşeni tercih edilsin
   (111 yanlış eşleşmenin çaresi budur; kaçının kendiliğinden kapandığını ÖLÇ).
3. Yıl-temsilî tarihler (`YYYY-01-01`) için ayrı kova: ihlal değil, BORÇ listesi.
4. Yeni tavanı gerekçesiyle yaz (`BEKLENEN_*`), `denetim/DENETIM-YER-0920.md`ye önce/sonra tablosu:
   açık sayısı, kova dağılımı, iki yönlü sınav (hem sahte kapanışı yakalıyor hem doğru kapanışı bozmuyor).
5. 🔴 İki yönlü sınav şart: en az 10 gerçek kapanış örneği SONRA DA kapalı kalmalı; Mankup 1349 AÇILMALI.
**Dosya:** `arac/denetle.py` (yalnız 2s bölümü) · `denetim/DENETIM-YER-0920.md`. Veri dosyalarına DOKUNMA.
**Teslim:** açık sayısının eski/yeni hâli + kovalar + sınav sonucu + değişen dosyalar.

## AMERIKA-KRONO-0920 (Opus) — İspanyol-Amerika eksik maddeleri
**Ölçüm:** 178 "gerçek eksik" kırılmanın en kalabalık kümesi İspanyol fetihleri: Aztek 1520-09-04,
İnka 1572-06-24, `ispanyol-peru` · `yeni-ispanya` · `maya` · `muisca` geçişleri. Bu kırılmalar bugün
alakasız Osmanlı maddeleriyle (Çaldıran, Kıbrıs'ın fethi) "kapalı" görünüyor.
**İş:**
1. `glm/SAHTE-343.json` → sınıf `GERCEK-EKSIK` listesinden Amerika/İspanya kümesini ayıkla (tarih + yerleşim
   + eski→yeni sahip). Kaç tarih, kaç yerleşim — ÖNCE SAY, teslimde yaz.
2. Her tarih için kaynaklı kronoloji maddesi yaz: gün kaynaktan (yoksa `YYYY-01-01`, yıl yoksa YAZMA).
   Kaynak: TDV bu coğrafyayı kapsamıyorsa akademik kaynak AÇIKÇA `kaynak:` alanına (Hemming,
   *The Conquest of the Incas*; Restall; Lockhart; ulusal arşiv yayınları vb. — künyesini gördüğün kaynak).
   Uydurma alıntı YASAK; bulunamayan gün için "bulunamadı".
3. Yeni dosya `data/olaylar_amerika_0920.js` (window.OLAYLAR_AMERIKA0920). index.html satırını SEN ekleme,
   teslimde öner.
4. `py arac/denetle.py` temiz kalmalı; D2/2s sayılarını teslimde ver.
**Sıra:** önce Meksika-Aztek kümesi (teslim 1), sonra Peru-İnka (teslim 2). Ara teslimde bekçi açık kalır.
