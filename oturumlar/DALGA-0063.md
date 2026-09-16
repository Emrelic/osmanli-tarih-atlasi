# DALGA-0063 — paket 0063 (11 madde) · 17 Eylül 2026 gece

Kurallar: `oturumlar/DALGA-0052.md` §0-§1, `oturumlar/DALGA-0057.md` başı (`baslik` zorunlu, `olay` bağı, mükerrer yok). Atlas referans değildir. Paket: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden/parti-emrelic-0063/PARTI.md` (görseller aynı klasörde). Tahtaya teslimde tek mesaj, sayıyla.

| Oturum | Madde | İş | Dosya |
|---|---|---|---|
| TK FERHATPASA | 1 (Osmanlı yanı) · 5 | 1723-1727 Osmanlı'nın İran'da aldığı/alamadığı yerler: Merend, Culfa, Maku, Şerur, Gümrü, Eçmiyadzin, Kotur, Selmas, Urmiye (haritada hâlâ "koridor" gibi duruyor), Erdebil, Halhal. YAMA-0060-IRAN1723'ün devamı | `denetim/YAMA-0063-IRAN.json` (koşu 13'e girer) |
| D4-ORTADOGU | 1 (Rus yanı) · 10 | Rusya'nın Hazar kıyısında işgal ettiği yerler (Tarku, Derbend, Kuba, Bakü, Lenkeran, Reşt/Gilan…) haritada doğru mu; İran'ın Rusları çıkarması (Nadir, 1732 Reşt, 1735 Gence) kronolojide açıklansın | `denetim/YAMA-0063-HAZAR.json` · `denetim/YAMA-0063-KRONO.json` · `data/ekokuma_rusiran.js` |
| D5-OKYANUSYA | 2 | İbrahim Müteferrika kişi kartı (öneri) + matbaa ek okumaları (ekokuma_yenilesme ile bağla) | `data/ekokuma_yenilesme.js` · `denetim/YAMA-0063-KISI.json` |
| D5-ASYA | 6 · 9 | Patrona Halil İsyanı: Patrona Halil kimdir, derdi ne · isyancıların yaptıkları · I. Mahmud'un isyancıları derdest etmesi (Lale Devri dosyasının devamı) | `data/ekokuma_lale.js` |
| D5-AMERIKA | 11 | 1736-1739 Osmanlı-Rus(-Avusturya) savaşı niçin başladı, Özi'nin düşüşü; kronolojide eksik sebep/olay maddeleri | `data/ekokuma_avusturya.js` · `denetim/YAMA-0063-KRONO-1736.json` |
| UI-ETKILESIM (yeni hazır kıta, Sonnet) | 3 · 4 · 7 · 8 | ③ Sağ tık menüsü: kronoloji maddesi ve ek okuma başlığı/içeriği üzerinde "Başlığı kopyala" / "Maddeyi kopyala" ④ Haritada boş bir noktaya tıklayınca yer sayfası AÇILMASIN; yalnız şehir/devlet/padişah adına tıklanınca açılsın ⑦ Maddedeki resme tıklayınca büyüsün (makul boyut) ⑧ Sağ tık cetvel: etiket kalıcı kalıyor → kapanınca silinsin; birden çok durak desteklensin | `js/app.js` (koordinatörle çakışmamak için değişiklikten önce tahtaya yaz) · `css/style.css` |
