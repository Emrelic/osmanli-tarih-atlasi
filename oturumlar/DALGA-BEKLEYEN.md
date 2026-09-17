# DALGA-BEKLEYEN — gece iş kuyruğu · 17 Eylül 2026 01:20 · koordinatör 1.MURAT

Emre: "sabaha kadar; boştaki eski oturumları önce kullan; 6 Opus + 6 Sonnet hazır kıta gelecek."
Her iş verilince satırın başına oturum adını yaz (✅ bitince). Görevlendirme mesajının İLK SATIRI oturum adıdır.

## A. Süren (zincirli)
- 9 bölge oturumu — GERİYE SARMA G4→G7 (`GERIYE-SARMA-0916.md`), zincirli, koordinatör beklenmez.
- EKO-ANTLASMA — bütün antlaşma ek okumaları (Osmanlı bitti; Emre: Osmanlı dışı antlaşmalar da, M-4215).
- DALGA-0055/56/57/58/59/60/63 kalemleri ilgili oturumlarda.

## A2. HAZIR KITA ATAMASI — 17 Eylül 09:55 (gece nöbeti çalışmadı; kıtalar 01:52'den beri bekliyordu)
| Oturum (kimlik) | Yeni ad | İş |
|---|---|---|
| Opus 1006 (aa8008e5) | 1DUNYA-A | B0 Avrupa — `BIRINCI-DUNYA-SAVASI-0917.md` |
| Opus 1007 (2f08792e) | 1DUNYA-B | B0 Avrupa dışı — aynı şartname |
| Opus 1008 (aa8aa5dc) | UYGULA-2 | C1 yama indirme (aşağıda) |
| Opus 1008b (7f186014) | EKO-ANTLASMA-2 | B6 Osmanlı dışı antlaşma ek okumaları |
| Opus 1009 (c4d402ba) | KUNYE-TARAF | B7 + B7b künye önerileri |
| Opus 1010 (112f01e7) | KOSU13-YAMA | C2 yerleşim yamalarını birleştir (aşağıda) |
| Sonnet 1006 (103f7d1f) | UI-ETKILESIM | B3 (DALGA-0063 madde 3·4·7·8) |
| Sonnet 1007 (3e08cfa8) | PAKET-DENETIM | B4 eski paket denetimi |
| Sonnet 1008 (e4774be2) | OSMANLI-TARAF | C3 (aşağıda) |
| Sonnet 1009 · 1010 | YEDEK | B4'ün çıkaracağı yapılmamış maddeler |

**C1 UYGULA-2:** şu yamaları veri dosyalarına indir (yerleşim dosyalarına DOKUNMA): `YAMA-KRONO2-DKUNYE-0917` · `YAMA-KRONO2-DKAYNAK-0917` → `data/devletler.js` künye kronolojileri; `YAMA-0060-KRONO` · `YAMA-0063-KRONO` · `YAMA-0063-KRONO-1736` → yamanın gösterdiği kronoloji dosyası; `YAMA-0057-OLAY-2` → yeni madde + `data/ekokuma_bag_oneri.js`; `YAMA-0063-KISI` → `data/kisiler.js`. Tür yalnız VERI-YAPISI listesi; Vikipedi tek dayanak olamaz; mükerrer yok. Sonra `py arac/denetle.py`. COMMIT ETME — değişen dosya listesini tahtaya yaz, 1.MURAT commitler (izin sınıflandırıcısı data/ commitini reddediyor).
**C2 KOSU13-YAMA:** `YAMA-0057-SAVA` · `YAMA-0059-HAZAR` · `YAMA-0060-IRAN1723` · `YAMA-0063-IRAN` · `YAMA-0063-HAZAR` + BIRINCI-DUNYA yamaları geldikçe: çakışma/mükerrer/zincir kontrolü, kaynak kontrolü, tek uygulanabilir paket `denetim/YAMA-KOSU13-BIRLESIK-0917.json` + rapor. Koşu 12 bitene kadar `data/yerlesimler*.js`e YAZMA.
**C3 OSMANLI-TARAF:** `data/kronoloji_sinir_*.js`de `taraflar` içinde `osmanli` geçen 11 madde Osmanlı kronolojisinde (`data/olaylar*.js`) görünmüyor (Osmanlı künye değil). Her biri için çekirdek olaylarda aynı olay var mı; yoksa kaynaklı madde önerisi `denetim/YAMA-OSMANLI-TARAF-0917.json` (şema olaylar_ek dosyalarıyla aynı).

## B. Sıradaki işler (boşa çıkana ya da yeni kıtaya)
| # | İş | Model | Dosya |
|---|---|---|---|
| B0 🔴 | BİRİNCİ DÜNYA SAVAŞI tam kronoloji + harita senkronu (Emre, 01:25) — `oturumlar/BIRINCI-DUNYA-SAVASI-0917.md`, A ve B iki oturum | Opus ×2 (ilk yeni kıtalar) | `data/kronoloji_cok_1dunya_A.js` · `_B.js` (index.html satırını 1.MURAT ekler) |
| B7b | KÜNYESİ OLMAYAN TARAF (çok taraflı kronoloji, 17 Eylül ölçümü): danzig-serbest-sehri · saar-havzasi-mandasi · guneybati-afrika-mandasi · ingiliz-becuanaland · fransiz-kamerun-mandasi · ingiliz-nijerya · ingiliz-tanganika-mandasi · ingiliz-kenya-kolonisi · ruanda-urundi-mandasi · ingiliz-guney-rodezya · portekiz-mozambik · guney-afrika-birligi · honduras-cumhuriyeti · nikaragua-cumhuriyeti → künye önerisi (ya da var olan doğru id'ye eşleme) | Sonnet | `denetim/YAMA-KUNYE-TARAF-0917.json` |
| B1 | EKSİK KRONOLOJİ 2. tur (Asya/Ortadoğu/Avrupa/Kafkasya/Anadolu yarısı): `denetim/KRONOLOJI-EKSIK-2-0917.json` — 0-2 maddeli 107 künyeden bu bölgeler; ilk turda "2 madde yeterli" denip atlananlar DAHİL. Hedef: kuruluş · önemli toprak değişimleri · son, kaynaklı | Sonnet (D-KUNYE) | `denetim/YAMA-KRONO2-DKUNYE-0917.json` |
| B2 | EKSİK KRONOLOJİ 2. tur (Afrika/Amerika/Okyanusya/Güney-Doğu Asya yarısı) | Sonnet (D-KAYNAK) | `denetim/YAMA-KRONO2-DKAYNAK-0917.json` |
| B3 | UI-ETKILESIM: DALGA-0063 madde 3·4·7·8 (sağ tık kopyala · boş tıklamada sayfa açılmasın · resim büyütme · cetvel) | Sonnet (yeni kıta) | `js/app.js` · `css/style.css` |
| B4 | ESKİ PAKET DENETİMİ: `ClaudEmre/kutu/giden/parti-emrelic-00{40..63}/CEVAP.json` içinde `sirada` olan her madde için tahtada/git'te teslim var mı; teslimsiz olanları listele, hangisi hangi oturumda kaldı | Sonnet (yeni kıta) | `denetim/PAKET-BEKLEYEN-0917.md` |
| B5 | ANTLAŞMA HARİTASI VERİSİ: D-GEOARAC'ın 504'lük çıktısından (`denetim/_ANTLASMA-HARITA-GENIS-CIKTI-0917.json`) eşleşenleri `data/antlasma_haritalari.js`e taşı, D-KATMAN'la şema | Sonnet (D-GEOARAC) | `data/antlasma_haritalari.js` |
| B6 | EKO-ANTLASMA-2: Osmanlı DIŞI antlaşmalar (Avrupa: Vestfalya, Utrecht, Paris 1763, Viyana 1815…), EKO-ANTLASMA ile yıl aralığı bölüşülerek | Opus (yeni kıta) | `data/ekokuma_antlasma5.js` (app.js'e bağlanacak) |
| B7 | EKSİK DEVLET KÜNYESİ: G4-G7 dalgalarında bölge oturumlarının "künye yok" dediği devletler (tahtadan topla) → künye önerisi | Opus (yeni kıta) | `denetim/YAMA-KUNYE-G4-0917.json` |
| B8 | 13 bağsız ek okuma (YAMA-0057-OLAY `bulunamadi`): uygun kronoloji maddesi YOKSA kaynaklı yeni madde öner (Neşrî, Naîmâ, İznik çiniciliği, ebru…) | Sonnet | `denetim/YAMA-0057-OLAY-2.json` |
| B9 | GEÇİT VERİTABANI (Emre onayı bekliyor — onaysız AÇMA) | — | — |
