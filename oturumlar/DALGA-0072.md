# DALGA-0072 — Emre'nin 15 maddelik partisi (20 Eylül 2026, 18:09)

Parti metni: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0072\PARTI.md`
Görseller AYNI dizinde (`H-00NN-1.png`). 🔴 **Görsel bir metnin kabaca otuz katı
pahalıdır** — yalnız KENDİ maddenin görselini aç, ötekilere BAKMA.

| madde | kim | konu |
|---|---|---|
| H-0001 · H-0002 (ek okuma) | EKO-KOLEMEN-0072 | Kölemen beyleri · Tosun Paşa (+ Kemal Sunal filmi) |
| H-0002 (ok) · H-0010 | SEFER-OK-0070 | Tosun Paşa'nın Yenbu güzergâhı · ok rengi = devletin koyu tonu |
| H-0006 · H-0013 | EKO-ISYAN-0072 | Sırp millî anlatısı · Fenerli voyvodalar · Ypsilanti |
| H-0014 | EKO-YUNAN-0072 | Yunan isyanı: sebep · destekçi · filhelenizm · Yunan tarihçiliği |
| H-0003 | HALKA-SARI-0072 | sarı halkalar niçin görünüyor · belgeli sahipliğin ZAMAN SINIRI |
| H-0004 (çizgi) · H-0007 · H-0008 | CIZGI-ANLAM-0072 | haritadaki açıklanmamış çizgiler ve renk uyumu |
| H-0005 · H-0011 · H-0015 | ENKLAV-0072 | Cetinje/Herceg Novi · devletsiz şehirler · enklav |
| H-0009 · H-0012 | KRONO-YER-0072 | haritada yeri olmayan madde → kamera imparatorluğa kaçıyor |
| H-0004 (koşu politikası) | 1.MURAT | "uzun koşu gerekli mi, lego katman" — Emre'ye cevap koordinatörde |

## Herkes için ortak kurallar
- Açılışta YALNIZ `CLAUDE.md` + kendi şartnamen okunur.
- Kaynak: TDV birincil; dışarıda yalnız akademik. **Vikipedi tek dayanak değil.**
  Atlas referans DEĞİL: kendi verimiz dayanak olamaz (D207). Tarih uydurma yok —
  gün yoksa `YYYY-01-01`, yıl yoksa yıl yazılmaz.
- **Öngörünü ölçümden ÖNCE yaz.** Sayı verirken evrenini de ver.
- Paylaşılan dosyaları (`data/*`, `js/app.js`, `index.html`, `arac/*`) **commitlemezsin**;
  kendi `denetim/<ÖNEK>-*` dosyanı adıyla commitlersin (pathspec `add`de de `commit`te de).
- Veri değiştirdiysen `py arac/denetle.py` — SONUÇ temiz olmalı.
- Teslim TEK tahta mesajıdır: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum
  + değişen dosya listesi.
  `py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "$(cat <dosya>)"` (Bash).
- Bekçi: Bash `run_in_background` + `py arac/tahta_bekci.py --kim "<ADIN>" --cik`.
  İş bitince bekçiyi kendin öldür.
- 🔴 `data/yerlesimler.js`e ŞU AN üç oturum birden yazıyor. Yazacaksan: dosyayı
  yazmadan HEMEN ÖNCE yeniden oku, yazdıktan sonra kendi satırını geri oku.
