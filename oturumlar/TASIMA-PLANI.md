# Taşıma planı — `TARİH COĞRAFYA SİTESİ` → `C:\atlas`

*(22 Eylül 2026 · Emre: "herşeyi düşün ve olması gereken şekilde yapalım,
hiçbir kopukluk aksaklık olmasın.")*

Üç şeyi aynı anda çözüyoruz: **OneDrive'dan çıkmak · Türkçe karakter ve
boşluktan kurtulmak · iki bilgisayarlı düzeni mümkün kılmak.** Ayrı ayrı
yapılırsa aynı kırılma üç kez ödenir.

## 0. ÖNCE ÖLÇÜLDÜ — kırılma yüzeyinin TAMAMI

| ne | gömülü yol | hüküm |
|---|---|---|
| `js/` + `index.html` | **0** | 🟢 site hiç etkilenmiyor (göreli yol) |
| motor çekirdeği (`uret_petek` · `girdi` · `denetle` · `renkler` · `surum_damgala`) | **0** | 🟢 koşu ve denetim çalışır |
| `.claude/launch.json` | 0 (`arac/sunucu.py` göreli) | 🟢 |
| `arac/*.py` `KOK`/`DIZIN` sabiti | **12 dosya** (7'si `olc_denizasiri/`) | 🟡 tek satırlık, 10 dk |
| `.claude/projects/…` transkript + hafıza | **402 transkript · 15 hafıza · 2,5 GB** | 🔴 yola göre anahtarlı |
| **git worktree** | **4 adet** | 🔴 hepsi ana depoyu MUTLAK yolla gösteriyor |
| ClaudEmre kutu `_proje.txt` | her pakette | 🔴 paketler projeye yola göre bağlı |
| `.md` dosyaları | 97 | ⚪ çoğu GEÇMİŞ oturum kaydı — oradaki eski yol tarihsel olarak DOĞRU, düzeltilmez |

🔴 **En büyük sürpriz worktree'ler.** Dört tane var ve üçü zaten `C:\atlas-*`
adında:
```
C:/atlas-hiz        [motor-hiz]
C:/atlas-kosu13     (detached)
C:/atlas-kosu14     [kosu14]
C:/atlas-sinav      (detached)
```
Ana depo taşınırsa dördü de kopar. Çaresi var ve tek komut:
`git worktree repair` (taşımadan SONRA, yeni kökten). Kullanılmayanlar
`git worktree remove` ile temizlenir.
📌 Yan fayda: yeni adın `C:\atlas` olması bu klasörlerin adlandırmasıyla
zaten tutarlı.

## 1. SIRA — her adımın NİÇİNİ var

### ① Hazırlık (taşımadan önce, depoya dokunmadan)
- [ ] `git gc` bitmiş olmalı (37,9 GB → paketli). Taşınacak şey küçülsün.
- [ ] **Bütün Claude oturumları teslimlerini versin ve kapansın.** Açık
      oturumun çalışma dizini eski yola sabitlidir; taşıma onu kırar.
- [ ] Kutu (`kutu.py`) ve varsa sunucu (`arac/sunucu.py`) durdurulsun.
- [ ] Koşu OLMAMALI. `.petek.kilit` boş olmalı.
- [ ] `git status` temiz olmalı — **yarım iş taşınmaz.** Şu an `js/app.js`te
      iki oturumun commitlenmemiş işi var (SEFER-OK-0075 · DALGA-0074);
      taşımadan önce ya commitlenir ya açıkça bırakılır.
- [ ] **OneDrive kapatılsın** (sağ tık → Çıkış). Açıkken klasör taşınırsa
      OneDrive dosyaları "geri yüklemeye" kalkar.

### ② Taşıma
- [ ] `TARİH COĞRAFYA SİTESİ` → `C:\atlas` (taşı, kopyalama — kopya iki
      kaynak yaratır ve hangisinin canlı olduğu belirsizleşir)
- [ ] ClaudEmre → `C:\claudemre` (aynı gün, aynı sebeple)

### ③ Onarım — sırası önemli
- [ ] `cd C:\atlas && git worktree repair` → dört worktree'nin bağı düzelir
- [ ] Gereksiz worktree'ler: `git worktree remove <yol>` (hangisinin
      gerektiğine bakılır; `atlas-kosu13/14` muhtemelen bitmiş koşular)
- [ ] **`.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-`
      → `C--atlas`** — 402 transkript ve 15 hafıza dosyası böyle korunur.
      Atlanırsa Claude yeni boş bir proje açar, eskisi görünmez olur.
- [ ] 12 dosyadaki `KOK`/`DIZIN` sabiti
- [ ] ClaudEmre: 46 skill atfı + `kutu` paketlerindeki `_proje.txt`
      + `toren_borcu.py` tablosu
- [ ] OneDrive yeniden açılır ama **bu iki klasör senkron dışı** bırakılır
      (Ayarlar → Klasörleri seç). Belgeler ve görseller OneDrive'da kalır.

### ④ Doğrulama — "çalışıyor" demeden önce ölçülür
- [ ] `py arac/denetle.py` → SONUÇ: temiz
- [ ] `py arac/durum_tablosu.py` → sayılar §1.5 ile uyuşuyor
- [ ] Site yerelde açılır, harita çiziliyor mu (hazırlık kapısı
      `harita.getLayer(...)`, `isStyleLoaded()` DEĞİL — o yalan söyler)
- [ ] `git worktree list` → dört yol da yeni köke bakıyor
- [ ] Yeni bir Claude oturumu açılır: hafıza ve geçmiş görünüyor mu
- [ ] `git log --oneline -3` → geçmiş yerinde

## 2. NE KIRILMAZ — merak edilmesin diye

- **Yayın.** GitHub Pages depodan yayın yapıyor, yerel yoldan değil.
  `git remote` yola bağlı değil. Site bir an bile kesilmez.
- **Geçmiş.** `git mv` değil klasör taşıması; `.git` bütün olarak gider.
- **Veri.** Hiçbir `data/` dosyasına dokunulmuyor.
- **Uzak depo.** Taşımadan önce push edilmişse her şey GitHub'da da var.

## 3. NE ZAMAN YAPILMAZ

Koşu sürerken · bir oturum iş yaparken · `gc` koşarken · OneDrive açıkken ·
`git status` kirliyken. Beşinden biri varsa taşıma ERTELENİR.
