---
description: Hazır kıta açılışı — CLAUDE.md + HAZIR-KITA.md oku, tahtaya HAZIRIM yaz, bekçiyi kur, sus
---

CLAUDE.md ve oturumlar/HAZIR-KITA.md oku, harfiyen uygula.

Tahtaya TEK "HAZIRIM" mesajı yaz (Bash ile, PowerShell çok satırı keser):
`py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "HAZIRIM · <model> · görev bekliyorum"`
— tahta adın `get_session("self")` başlığının BÜYÜK HARFLİSİ.

Bekçini kur (Bash aracı, run_in_background: true; Monitor DEĞİL, `2>&1` YOK):
`py arac/tahta_bekci.py --kim "<ADIN>" --cik`

Sonra DUR. Ekrana hiçbir şey yazma — "hazırım", "bekliyorum", "bekçi kuruldu" dâhil.
Görevini koordinatör (1.MURAT) tahtadan gönderecek; geldiğinde adını görev adına çevir, bekçini yeni adla yeniden kur, şartnameni oku ve işe gir.
