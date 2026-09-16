# BİRİNCİ DÜNYA SAVAŞI — tam kronoloji, bütün devletler · 17 Eylül 2026

Emre: *"1. dünya savaşı kronolojisini baştan sona tüm devletleri ile yapalım ve devletlerin içine dağıtalım. Eksik kronoloji olmasın ve haritada senkronize olsun."*

Kurallar: CLAUDE.md §4 (TDV birincil; dışarıda yalnız akademik; Vikipedi tek dayanak değil; gün yoksa `YYYY-01-01` + metinde), §7 (yalnız kendi dosyaların, adla commit, `pull --rebase` YOK). Tahtaya teslimde tek mesaj, sayıyla.

## Kapsam
1914-06-28 (Saraybosna) → 1918-11-11 (Compiègne) ana gövde; savaş sonu antlaşmaları 1919-1923 (Versay, Saint-Germain, Neuilly, Trianon, Sevr, Brest-Litovsk, Bükreş 1918, Mondros, Villa Giusti…) dahil.
Her savaşan ve etkilenen devlet: savaşa giriş günü, savaş ilanları (ikili), cepheler ve belirleyici muharebeler, işgaller ve geri çekilmeler, ateşkesler, çöken/kurulan devletler, antlaşmalar.

## ÖNCE SAY (mükerrer yok)
`data/olaylar*.js` + `data/kronoloji*.js` + künye kronolojileri + `data/kronoloji_sinir_*.js` içinde 1914-1923 maddelerini say; yalnız EKSİK olanı yaz. Osmanlı cepheleri çekirdek olaylarda büyük ölçüde VAR — onları tekrar yazma, yalnız karşı tarafın kronolojisine düşmesi için `taraflar`a eklenecek karşılığını yaz.

## Dosya ve biçim
`data/kronoloji_cok_1dunya_<A|B>.js` → `window.KRONOLOJI_COK_1DUNYA_<A|B>` (dizi). Madde biçimi `data/kronoloji_sinir_asya.js` ile AYNI:
`{t, taraflar:[<devletler.js id>...], devletler:[...], b, d, tur, onem, dunya, kapsam, etiket:[...,"1-dunya-savasi"], kaynak}`
- `taraflar` = maddenin görüneceği HER künye (`app.js cokTarafliKronolojiEkle` her birine ekler). Kimlik `devletler.js`ten TARANIR, tahmin edilmez.
- Künyesi olmayan taraf: maddede kalsın, teslimde listele (1.MURAT künye önerisi açtırır). Osmanlı için id `osmanli` kullanma — Osmanlı tarafı çekirdek olaylarda; `taraflar`a yazma, `etiket`e `osmanli` ekle.
- `tur`: VERI-YAPISI listesi (`savas` · `isgal` · `antlasma` · `toprak-kazanc` · `toprak-kayip` · `ittifak` · `son` · `kurulus` · `isyan`…).

## Harita senkronu
Toprak el değiştiren her madde için (işgal, çekilme, ateşkes hattı, antlaşma) haritada karşılığı var mı bak (`data/yerlesimler*.js` dönemleri, `data/d_sinirlar*.js`). YOKSA ya da gün tutmuyorsa kaynaklı yama yaz: `denetim/YAMA-1DUNYA-<A|B>-0917.json` (yerleşim, eski/yeni dönem, gün, kaynak). Yerleşim dosyalarına YAZMA — koşu 13'e koordinatör indirir.

## Bölüşüm
| Oturum | Kapsam |
|---|---|
| 1DUNYA-A (Opus) | Avrupa: Batı, Doğu, İtalya, Balkan cepheleri; Almanya, Avusturya-Macaristan, Rusya (Brest-Litovsk dahil), Fransa, İngiltere, İtalya, Sırbistan, Karadağ, Belçika, Lüksemburg, Romanya, Bulgaristan, Yunanistan, Portekiz, ABD, tarafsızlar ve çöküşten doğan devletler (Polonya, Çekoslovakya, Baltıklar, Finlandiya, Ukrayna…) |
| 1DUNYA-B (Opus) | Avrupa dışı: Osmanlı cephelerinin karşı tarafları (İngiltere/Hindistan, Rusya Kafkas, Fransa, Arap İsyanı/Hicaz), İran (işgaller), Afrika (Togo, Kamerun, GB Afrika, Doğu Afrika), Asya-Pasifik (Japonya, Çin, Tsingtao, Alman Pasifik adaları), Latin Amerika savaş ilanları, dominyonlar |
