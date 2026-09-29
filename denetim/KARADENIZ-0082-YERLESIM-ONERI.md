# KARADENIZ-0082 — YERLEŞİM ÖNERİLERİ (noktasızlık)

> 🔴 ÖNERİDİR, UYGULANMADI. `yerlesimler.js`e dokunulmadı.
> Koordinatlar bugünkü yerleşim merkezinin yaklaşık konumu (±0,02°).
> Yakın mükerrer taraması (ad + en yakın mevcut nokta, evren `girdi.GIRDI_DOSYALARI`
> 4296 nokta): hiçbiri 3 km içinde değil; en yakını Kule–Niğbolu 5,2 km (Tuna'nın karşı yakası).
> 🔴 **Dönem (`s:`/`d:`/`v:`) günleri BURADA YAZILMADI.** Her noktanın sahiplik günü kendi
> kaynağından okunmalı. Aşağıdaki "beklenen" sütunu tarih bilgisi değil yön göstergesidir.
> "Kaynak" sütunu, bu oturumda neyin ÇEKİLDİĞİNİ dürüstçe söyler.

| § | ad | lat | lon | en yakın mevcut | hangi maddeyi çözer | beklenen sahiplik (yön) | kaynak durumu |
|---|---|---|---|---|---|---|---|
| 1 | Novomirgorod (Yeni Sırbistan merkezi) | 48.78 | 31.65 | Yelisavetgrad 53,9 km | H-0021 · 22 · 27 | 1752'den itibaren Rusya | TDV'de **bulunamadı**; ESBE «Новая Сербия»/«Новомиргород» çekilmedi |
| 2a | Balta | 47.94 | 29.62 | Orhei 86,0 km | H-0024 · 19 | Kodıma sınırı: Osmanlı/Kırım yakası; 1792 Rusya | TDV'de aranmadı (1768 Balta vakası TDV *osmanlilar*/*mustafa-iii*'te geçer) |
| 2b | Dubasar (Dubăsari) | 47.27 | 29.16 | Orhei 28,3 km | H-0024 | Dinyester sol kıyısı, Yedisan; 1792 Rusya | aranmadı |
| 2c | Kılburun | 46.55 | 31.53 | Özi 8,4 km | H-0019 · 32 · 37 | 1774 Kaynarca ile Rusya | TDV *kirim*: Kaynarca'da Kılburun Rusya'ya ✓ çekildi; önceki dönem aranmadı |
| 3 | Arabat | 45.30 | 35.46 | Kefe 30,4 km | H-0026 | Osmanlı/Kırım kalesi, 1771 Rus işgali | madde `olaylar_p0065.js:21` gününü veriyor; TDV'de aranmadı |
| 4a | Kişinev (Chișinău) | 47.02 | 28.84 | Orhei 40,4 km | H-0072 | Boğdan tâbi; 1812 Rusya | TDV *bogdan*/*hotin*: 1812'de Prut-Dinyester arası Rusya'ya ✓; şehir satırı aranmadı |
| 4b | Belz (Bălți) | 47.76 | 27.93 | Soroka 52,1 km | H-0072 | aynı | aynı |
| 4c | Leova | 46.48 | 28.25 | Birlad 52,7 km | H-0072 | aynı (Prut kıyısı, doğu yaka) | aynı |
| 5 | Kule (Turnu Măgurele) | 43.75 | 24.87 | Niğbolu 5,2 km | H-0077 · 97 | Osmanlı kazası; 1829 Edirne ile Eflak'a (tâbi) | TDV'de aranmadı |

**Öncelik:** §4 (Prut sınırı, 1812-1918 boyunca her gün görünür) > §1 (1752-1775 Yelisavetgrad
eksklavı) > §2 (Yedisan, 1770-1792) > §5 > §3.
⚠️ §2a Balta sınır kasabasıdır, tarihte bölünmüş bir kasaba olarak geçer (Osmanlı yakası /
Leh yakası). Nokta konmadan önce hangi yakanın kastedildiği kaynakla sabitlenmeli; yanlış
yakaya konursa sınır ters yöne kayar (`D206`, iki uç da ölçülür).
