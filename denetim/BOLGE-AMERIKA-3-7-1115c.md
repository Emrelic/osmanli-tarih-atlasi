# AMERIKA — Adım 3-7 (harita, yerleşim, renk, enklav, düzeltme) — 15 Kasım 2026

## 3 Harita uyumu
- `py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI **0** (başlangıç ve düzeltme sonrası). Üç madde `odak_yer`i düzeltildi: Boyacá (Simití -> Hunza (Tunja)), Tucumán (Buenos Aires -> San Miguel de Tucumán); Pedro I Rio de Janeiro olarak kaldı.
- Gözlem: Gran Kolombiya çözülmesinde (1831-01-01) 20+ yerleşimin `s:` kırılması var (Bogotá, Cartagena, Popayán, Tunja, Panamá, Cali...); kırılmayı karşılayan madde `gran-kolombiya` 1831-01-01 künye-sonu. 1830 Venezuela/Ekvador ayrılışı ile künye t=1831-01-01 arasındaki 1 yıllık fark gün teyidi gerektirir (Adım 2).
- Ölçülmedi: bölgenin D2/D2s/D2t kırılma-madde eşleşmelerinin tek tek listesi (denetle çıktısı global; bölge süzmesi yapılmadı).

## 4 Yerleşim kronolojisi
- Maya, Aztek, İnka yerleşimlerinin sahneye çıkış tarihleri tek tek karşılaştırılmadı (ölçülmedi). Kapsam saptaması: `yerlesimler_amerika*.js`, `_kamerika`, `_gamerika`, `_a78_amerika`, `_nokta_amerika_0917`, `_once1281_yt_amerika`, `_mo_amerika` dosyalarında dağınık. `data/yerlesimler.js`'e dokunulmadı; kuyruk: `denetim/YERLESIMLER-JS-KUYRUK-1115c-amerika.md` (yazılacak düzeltme yok).
- Tespit: Maní, Sotuta, Chichén Itzá pencereleri 1541-1547 arası `maya-sehir-devletleri` -> `yeni-ispanya` geçişi yıl hassasiyetli (`-01-01`); gün kaynağı aranmadı (okunmadı).

## 5 Renk
- Künyelerin `harita:` alanı 213 künyenin 3'ünde dolu (abd, danimarka x2); gerisi `id` ile BOYALAR'a bakar. KAPSAM-OLCUM-1114: renksiz künye global 0. `renk_olc.py` koşturulmadı (renkler.py/palet değişmedi; veri değişikliği yalnız 3 madde tarihi, renk girdisi etkilenmez).
- Öneri: `ingiliz-guyanasi`, `hollanda-guyanasi`, `fransiz-guyanasi` künyelerinde `tur` alanı BOŞ (şemada zorunlu mu — VERI-YAPISI.md ölçülmedi); `tur:"somurge"` yazılması önerilir. Dosya: `denetim/RENK-ONERI-1115c-amerika.md`.

## 6 Enklav/eksklav
- Ada/enklav modeli: Falkland (ingiliz künye + 1982 Arjantin işgali), Guadeloupe/Martinik, Hollanda/Fransız/İngiliz Guyanası, Danimarka Batı Hint, Grönland (danimarka), Puerto Riko (abd), Panama Kanal Bölgesi künyeleri VAR. Değişmez 8 (şehir bölgesi ülke sınırını aşamaz) ana checkout'ta ölçülemez (D8a 283 KASA'nın koşu bağımlı sayısıdır); bu dalda ölçülmedi.
- Eksik enklav adayı: Fransız Saint-Pierre et Miquelon, Britanya Bermuda/Cayman (künye yok, bulunamadı).

## 7 Düzeltme (özet)
- 3 madde tarihi gün hassasiyetine yükseltildi (Tucumán 1816-07-09, Boyacá 1819-08-07, Pedro I 1831-04-07; hakemli, bkz. Adım 2) ve iki `odak_yer` düzeltildi. Dosya: `data/devletler.js` (yalnız 3 satır).
- `denetle`: bkz. rapor (sayısal çıkış kodu aşağıda ekli).
