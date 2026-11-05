# DAL ENVANTERİ — 5 Kasım 2026 (KASA PAZAR, toplama FAZ 3)

Ölçüm: KASA, ağaç `origin/kasa-1105-toplama` (main 7acb10c1e + FAZ 1'in 18 dalı). `git fetch --prune`
sonrası origin'deki **252 dal**. Hiçbir dal merge edilmedi, silinmedi — silme kararı Emre'nin.

## İki geçiş

1. `faz3_envanter.py` → `DAL-ENVANTER-1105.tsv`: `git cherry` (+ = patch-id hedefte yok) ve bu
   commit'lerin dosyalarının hedeften farkı.
2. `faz3_yama.py` → `DAL-YAMA-1105.tsv`: 1. geçişte "veri/kod farkı" çıkan 110 dalın her + commit'i
   için yama (üretilmiş paket/index/motor çıktısı hariç) hedef ağaca geçici index'le denendi:
   geri uygulanıyorsa **VAR**, ileri uygulanıyorsa **YOK** (eksik iş), ikisi de değilse **ÇAKIŞIK**
   (dosya sonradan değişti; göz gerekir).

## Sonuç (252 dal)

| hüküm | dal |
|---|---|
| toplama dalının atası (hiç ileri commit yok) | 100 |
| içerik toplama dalında (patch-id ya da dosya aynı) | 17 |
| yalnız denetim/belge farkı | 25 |
| yama toplama dalında (VAR) | 2 |
| **EKSİK İŞ (yama ileri uygulanıyor)** | **5** |
| ÇAKIŞIK — göz gerekir | 103 |

### Eksik iş (5) — hepsi yalnız denetim/araç dosyası, veri değil

| dal | eksik |
|---|---|
| havva-1101-capraz-sorgu | `arac/capraz_cikar.js`, `capraz/DEFTER-*.tsv` (8 commit) |
| makine/tahta-web | `denetim/ARAC-TAHTA-*-SINAV-1004.py` (eski tahta düzeni) |
| lab-1101-krono-arama-stash | `denetim/LAB-EMRE-6-MADDE-1024.md`, `LAB-KRONO-ARAMA-1024.diff` |
| havva-1101-boya-paketi-k3 | `denetim/RENK-PAKETI-K3-1021.md` (dalın kendisi `renkler.py` TUZ'una dokunur) |
| motor-hiz | `denetim/ARAC-MOTOR-YURUYUS-HIZ-0918-z_onb_soguk.json` (dal TUZ'a dokunur) |

### Tuz dosyasına dokunan dallar (main'e koşu sürerken girmez)

enklav-kirp-1104 (FAZ 1'den bekletildi, `uret_petek.py`), havva-1101-boya-paketi-k3, havva-1101-w-renk2
(`renkler.py`), havva-1101-mo-ayni-prensip, kosu16, postit-151-su-gecis, yedek/atlas-sinav,
yedek/atlas-yamasinav (`uret_petek.py`), kosu14, motor-hiz (`uret_petek.py` + `motor_onbellek.py`).

### ÇAKIŞIK (103)

Çoğu Ekim sonu / 1 Kasım post-it, `devir-1030/*`, `umit-1102-tahliye*`, `havva-1101-agent-*`, `*yedek*`
dalları: yamaları eski tabana göre yazılmış, aynı dosyalar o günden beri değişmiş. "Eksik" de "içinde" de
denemez; her dalın `ornek_commitler` sütunundaki commit'in konusu main'deki karşılığıyla elle
karşılaştırılmalı. Ölçülmedi: hunk düzeyinde kısmî varlık.
