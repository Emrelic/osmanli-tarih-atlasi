# ÖNGÖRÜ — TAHTA-WEB-DENETIM-1006

🔴 **Bu dosya ÖLÇÜMDEN ÖNCE yazıldı ve commitlendi.** Sınavların hiçbiri koşturulmadı,
`arac/tahta_sunucu.py` · `tahta_kesme.py` · sınav dosyalarının İÇİ okunmadı. Elimdeki
tek bilgi: dosya adları, `git log --oneline -9 origin/makine/tahta-web` çıktısı ve
şartname (M-? / koordinatör sevki, 6 Ekim 2026).

## SINAV ANI ve EVREN
- **An:** 2026-10-06, worktree `C:/atlas-tahtaweb` (detached `20c5cea7`).
  Ana ağaca (`C:/atlas`) ve `C:/atlas-tahta-web` (yazarın worktree'si, aynı dalı tutuyor)
  DOKUNULMADI.
- **Evren — 4 sınav dosyası:**
  `denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py` · `ARAC-TAHTA-SUNUCU-COKLU-SINAV-1004.py` ·
  `ARAC-TAHTA-KESME-SINAV-1004.py` · `ARAC-TAHTA-MAKINELER-SINAV-1004.py`
- **Evren — 4 alet:** `arac/tahta_sunucu.py` · `tahta.py` · `tahta_kesme.py` · `tahta_bekci.py`
- **Ölçüt:** çıkış kodu (0 temiz · 1 ihlal · 2 ölçülemedi), cümle DEĞİL.

## ÖNGÖRÜLER — her biri ayrı ayrı yanlışlanabilir

| # | Öngörü | Gerekçe |
|---|---|---|
| Ö1 | 4 sınavdan **3'ü çıkış 0**, **1'i 0 dışı** verir | dördü de "öngörü koşmadan önce mühürlendi" diye commitlenmiş ⇒ yazar kendi sınavını geçirmiş olmalı; ama HTTP + port + Windows kodlama sınıfı en az bir yerde ısırır |
| Ö2 | 0 dışı çıkan sınav **ÇOKLU** (iki sunucu / yeniden başlama) olur | port bağlama ve süreç yarışı en kırılgan sınıf |
| Ö3 | 4 sınavdan **en az 2'si TEK YÖNLÜ** — yalnız "çalışınca çalışıyor" sorar, arızayı kurup öttürmez | yeni yazılmış sınavların en sık kusuru; SUNUCU ve MAKINELER sınavlarının tek yönlü olmasını bekliyorum |
| Ö4 | `tahta_kesme.py`de geri dönüş **KODU VAR ama ileri+geri+ileri GERÇEKTEN ölçülmemiş** | commit başlığı "kesme betiği + geri dönüş" diyor; sınav dosyası tek ve adı yalnız KESME — üç ayaklı tur sınanmamış olmalı |
| Ö5 | Geri dönüşü ben koşturunca **mesaj sayısı korunur** (kayıp 0) | %60 güven; kaybolursa hüküm doğrudan HAYIR olur |
| Ö6 | EMRELIC kapalıyken **yerel dosyaya düşüş VAR ama BEYANSIZ** (sessiz düşüş) — kusur | istemciler kesintiye dayanmak için sessiz `except` yazmaya meyillidir; beyanlı düşüş ayrı bir karar gerektirir |
| Ö7 | **Göç betiği ya yok ya `tahta_kesme.py` içinde gömülü**; 5.845 mesajı sayarak taşıyor | ayrı bir `goc`/`tasima` dosyası commit listesinde YOK |
| Ö8 | Sayaç **mevcut en büyük numaradan (M-5845) devam eder**, 1'den başlamaz | sunucu numarayı veriyorsa yazar bunu düşünmüş olmalı; ama ölçülecek |
| Ö9 | Toplam kusur sayısı **3–5** | |
| Ö10 | Nihaî hüküm: **KUSURLU (liste)** — indirilebilir değil ama yeniden yazılması da gerekmiyor | tahta haberleşme kanalının kendisi; geri dönüşü ölçülmemiş bir kesme indirilmez |

## YANLIŞLANMA ÖLÇÜTÜ
- Ö1 yanlıştır ⇔ 4 sınav da 0 verir, ya da 2+ sınav 0 dışı verir.
- Ö3 yanlıştır ⇔ 4 sınavın 3'ü veya 4'ü arızayı da kurup öttürüyorsa.
- Ö5 yanlıştır ⇔ geri dönüş turunda mesaj sayısı 5.845'ten sapıyorsa.
- Ö9 yanlıştır ⇔ kusur sayısı 0–2 veya 6+ ise.

— TAHTA-WEB-DENETIM-1006
