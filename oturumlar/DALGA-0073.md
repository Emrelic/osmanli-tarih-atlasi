# DALGA-0073 — Emre'nin 20 maddelik partisi (20 Eylül 2026, 21:54)

Parti metni: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0073\PARTI.md`
Görseller AYNI dizinde (`H-00NN-*.png`). 🔴 **Yalnız KENDİ maddenin görselini aç** —
bir görsel metnine göre kabaca otuz kat pahalıdır.

| madde | kim | konu |
|---|---|---|
| H-0001 · H-0003 | SEFER-OK-0070 | ok kavisi · uç/gövde/kaynak · gövde kalınlığı yarıya |
| H-0016 · H-0017 · H-0018 · H-0019 · H-0005 | EKO-ILGI-0073 | ek okuma ↔ madde İLGİSİ + kategori denetimi + madde önem sırası |
| H-0002 · H-0020 | EKO-UI-0073 | kart satırında kategori etiketi · sağ tık "başlığı/maddeyi kopyala" |
| H-0007 | D-RENK-0073 | renklerin D sınıfı sınırlara oturtulması (bütün dünya) |
| H-0009 | KIZILDENIZ-0073 | Masavva · Dahlak · Zeyla kronolojisi + oradaki boşluğun sebebi |
| H-0010 | ETIKET-0073 | çakışan şehir yazıları (Riyad ↔ Dir'iye): biri sola biri sağa |
| H-0006 | KAPSAM-2025-0073 | 1923 → 1918/1945/1991/2025 genişlemesinin MALİYET ölçümü |
| H-0004 · H-0008 · H-0011 · H-0015 | EKO-BOLGE-0073 | Mısır'ın Sudan siyaseti · Mısır↔Osmanlı modernleşmesi · 1821'de Osmanlı ordusu · Hürmüz |
| H-0012 · H-0013 · H-0014 | EKO-YENICERI-0073 | ocağın kaldırılması çözülmeyi hızlandırdı mı · yozlaşma · Vak'a-i Hayriyye |

Ayrıca sırada: **YUKLEME-0072** — sitenin açılış süresi (ölçüldü: 261 dosya · 157,6 MB
ham · ~40 MB gzip; üç dosya toplamın %92'si).

## Herkes için ortak kurallar
- Açılışta YALNIZ `CLAUDE.md` + bu dosya + kendi maddelerin okunur.
- Kaynak: TDV birincil; dışarıda yalnız akademik. Vikipedi tek dayanak değildir.
  **Atlas referans değildir** (D207) — kendi verimiz dayanak olamaz.
  Tarih uydurma yok: gün yoksa `YYYY-01-01`, yıl yoksa yıl yazılmaz (D210).
- **Öngörünü ölçümden ÖNCE yaz**, sayıyı evreniyle ver.
- Paylaşılan dosyaları (`data/*`, `js/app.js`, `index.html`, `arac/*`) yazarsın ama
  **COMMİTLEMEZSİN** — 1.MURAT commitler. Kendi `denetim/<ÖNEK>-*` dosyanı adıyla
  commitlersin (pathspec hem `add`de hem `commit`te).
- Veri değiştirdiysen `py arac/denetle.py` — SONUÇ temiz olmalı. Veri değişmediyse
  koşturma, "ölçülemedi" ile "temiz"i karıştırma.
- 🔴 `js/app.js`e aynı anda birkaç oturum yazıyor: yazmadan HEMEN önce yeniden oku,
  yazdıktan sonra kendi satırlarını geri oku (`node --check js/app.js` ucuzdur).
- Teslim TEK tahta mesajıdır: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum
  + değişen dosya listesi.
  `py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "$(cat <dosya>)"` (Bash)
- Bekçi: Bash `run_in_background` + `py arac/tahta_bekci.py --kim "<ADIN>" --cik`.
  🔴 İş bitince bekçini KENDİN öldür (makinede bellek dar).

## Kalemlerin ayrıntısı

### EKO-ILGI-0073 — Emre'nin bu partideki EN BÜYÜK şikâyeti
Emre dört madde boyunca aynı şeyi söylüyor: ek okuma kartları bağlandıkları
kronoloji maddesiyle **alâkasız**. Vak'a-i Hayriyye maddesinde Nusretiye Camii,
Feshâne, matbaa ve GÜREŞÇİ TEKKELERİ kartlarını saydı; sonuncusunun kategorisi de
yanlış (spor konusu "teknik-bilimsel" yazılmış).
- Ölçüt Emre'nin kendi cümlesi: **"kişiler, olaylar, mekânlar, zamanlar ile ilinti
  olmalıdır"** — doğrudan ya da dolaylı. Matbaa maddesinin içinde Osmanlı matbaası
  MEŞRU; içinde yalnız "Yeniçeri Ocağı" kelimesi geçtiği için bağlanmış kart DEĞİL.
- ① Bütün ek okuma kartlarının bağlarını bu ölçütle tara, ② kategorileri denetle,
  ③ alâkasızları AYIKLA — ama Emre'nin izni var: *"bir ek okuma sahipsiz kalırsa en
  yakın maddenin altına konulabilir"*. Yani kart SİLİNMEZ, bağı düzeltilir.
- H-0005 aynı ailenin kronoloji ayağı: "Orta Amerika Bağımsızlık Bildirisi" Osmanlı
  kronolojisinde görünüyor. Emre bunun **önem sırası ayarıyla** gelmesi gerektiğini
  söylüyor. Bugün böyle bir alan/ayar var mı, ÖLÇ; yoksa şemayı ve UI ayarını ÖNER
  (maliyetiyle) — karar Emre'nin.

### D-RENK-0073 — H-0007
Emre: *"D kalite sınırlar milimetrik çizilmiş ama renkler bu sınırlara oturtulmamış;
tüm dünyada renkler D ile çizilmiş sınırların içine oturtulmalı."*
🔴 ÖNCE OKU: `oturumlar/GORUNUM-ABCD-0916.md` (A/B/C/D/E/F kademeleri — D = FİİLÎ,
E = HUKUKÎ, eski "D" bugün E'dir). Sonra ÖLÇ: bugün boyama hangi geometriden geliyor
(`uret_petek.py` gövde zinciri) ve D/E sınır çizgileri hangi dosyalardan
(`data/d_sinirlar_*.js`). İkisini bağlamanın maliyetini ölç — kaç kayıt, kaç kesit,
motorda nereye dokunulur. **Kod yazmadan önce ölçüm ve plan teslim et.**

### KAPSAM-2025-0073 — H-0006
Emre iki aşama istiyor: önce I. Dünya Savaşı sonu, sonra 1991; 2025 bekler.
Ölç: 1923 sonrası için kaç yeni künye, kaç kronoloji maddesi, kaç yerleşim penceresi
gerekir; motor koşusuna etkisi ne (bugün 1.883 kesit tarihi var). Token/süre/oturum
cinsinden tahmin ver. **ÖNCE `ONCELIK.md`yi oku** — kapsam sorusunda önce oraya bakılır.
