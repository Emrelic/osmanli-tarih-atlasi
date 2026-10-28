# TARIH-DUZELT-1014 — üç tarih çelişkisinin düzeltilmesi

Emre kararı (14 Ekim 2026): `denetim/KAYNAK-TEYIT-D2-1014/RAPOR.md` §2'deki üç çelişkide
güvenilir kaynağın günü alınır. Teyit commit'i `4bd89971` (origin/main) — o commit bu üç
maddenin `kaynak`ına dokunmamıştı ("madde DEĞİŞTİRİLMEDİ"); yeni günün dayanağı bu işte
`kaynak`/`ic_not_*` alanlarına yazıldı.

Ölçüm: UMIT, worktree `agent-a5a7bdce51c9d2e06`, taban `origin/main` (4bd89971 sonrası).
Satır numaraları değişiklik SONRASI dosyanın satırıdır.

## 1. 1479-01-20 → 1479-01-19 (II. Juan'ın ölümü · Kastilya-Aragon birliği)

Dayanak: DBE (RAH) "Juan II de Aragón y de Navarra": «Barcelona, 19.I.1479»; Gran Enciclopèdia
Catalana aynı. Eski gün yalnız Vikipedi gövdesindeydi.

| dosya | satırlar | ne |
|---|---|---|
| data/devletler.js | 1708, 1712 | `ispanya` künye f + kronoloji maddesi (kaynak + ic_not_f eklendi) |
| data/devletler.js | 6484, 6491 | `kastilya` künye t + son maddesi (ic_not_t "t aynen kalmalı" notu kararla güncellendi) |
| data/devletler.js | 6496, 6502 | `aragon` künye t + son maddesi |
| data/kronoloji_sinir_nokta2.js | 27 | madde [20]: t, gun, d, kaynak (DBE), ic_not_t |
| data/kronoloji_ispanya.js | 122-126 | "tacları fiilen birleşti" maddesi: t, kaynak (DBE), ic_not_t |
| data/yer_yama_ispanya.js | 84 | o maddenin yer yaması anahtarı (t) |
| data/yerlesimler.js | 928 (yorum), 1067, 1068, 1070, 1071, 1696, 1697, 1700, 1701, 1702 | s: kastilya/aragon bitişi + ispanya başlangıcı birlikte; Madrid/Barselona kd:; dönem kaynağındaki «20 January 1479» cümlesi DBE ile değiştirildi |
| data/yerlesimler_avrupa.js | 48, 205 (yorum), 206-224, 231, 234-238, 241, 255-257, 262 | aynı (30 nokta + Toledo/Valladolid/Zaragoza kd:) |
| data/yerlesimler_nokta2.js | 45, 46, 47 | Vic, Astorga, Zamora s: |
| data/yer_yama_1923_1945.js | 473-481, 699-711, 1275-1343 (39 kayıt) | s: zinciri + dönem kaynağı |
| data/yer_yama_avrupa_1923.js | 48-49, 60-62 (yorum), 116-175 (9 kayıt) | s: + dönem kaynağı + kayıt kaynağındaki "künyeleri 1479-01-20'de bitiyor" |
| data/yer_yama_avrupa_dayanak_1923.js | 29-31 (yorum), 56-205 (30 kayıt) | s: + dönem kaynağı |
| data/kademe_e9353f.js | 100, 101, 318, 321, 324, 325, 327 | kd: pencereleri künyeye bağlı (Madrid f, Barselona/Zaragoza/Toledo/Valladolid t) |
| data/kronoloji_cok_hollanda.js | 17 | başlık künye özeti (yorum) |
| data/kronoloji_cok_ispanya.js | 8 | başlık künye özeti (yorum) |

Toplam: 291 eski-gün geçişi ele alındı (git diff ile sayıldı; yorum ve anlatı dahil). Bitiş ve
başlangıç her kayıtta birlikte kaydırıldı — boşluk/çakışma yok. Dönem kaynak cümlesi
(«20 January 1479 … [in] Barcelona») 117 kayıtta DBE dayanağıyla değiştirildi.

**Dokunulmayanlar:**
- `data/kimlikler.js` 166, 330, 331 — dosya başlığı "EMEKLİ — YAZMAYIN, OKUMAYIN" diyor; arayüz okumuyor.
- `data/yer_yama_avrupa_isvec_1923.js` 61 ve `yer_yama_avrupa_1923.js` 60 ile kayıt kaynaklarındaki
  "(yazıldığında 1479-01-20) 60 kayıt kullanıyordu" — o günkü ölçümü anlatan tarihçe; 60. satıra düzeltme notu eklendi.
- `data/kronoloji_cok_ispanya.js` 112 — zaten 1479-01-19 (II. Juan'ın ölümü, Navarra; RAH). Uyumlu.
- `data/devletler.js.yedek`, üretilmiş `paket_*`/`devlet_harita_ust`/`ufuk_bantlari_ust` — elle dokunulmadı (paketler `paketle.py yenile` ile tazelendi).

## 2. 1911-04-12 → 1911-01-12 (Dâru'l-Kûtî · Senûsî'nin öldürülmesi)

Dayanak: IRD, "Jean Julien Vincent Modat" biyografi notu: Senoussi «fut tué le 12 janvier 1911».

| dosya | satırlar | ne |
|---|---|---|
| data/devletler.js | 3593, 3602 | `darul-kuti` künye t (+ ic_not_t) ve son maddesi (+ kaynak IRD) |
| data/olaylar_2s_0918.js | 109-113 | madde [8]: t, kaynak'a IRD eklendi ("GÜN KABA" kaldırıldı), ic_not_t |
| data/yerlesimler_afrika2.js | 496-497, 590-591, 631-632 | Birao, Uanda-Calle, Ndele: darul-kuti bitişi + fransa-cumhuriyet başlangıcı |
| data/yer_yama_1923_1945.js | 5109, 5141, 5155 | aynı üç nokta |

Toplam: 15 geçiş. Künyenin son maddesinden sonra madde yok (en geç 1908-01-26) — pencere dışı madde oluşmadı.
Dokunulmayan aynı-gün geçişi: yok.

## 3. 1945-08-18 → 1945-08-17 (Mançukuo'nun dağılma ilânı)

Dayanak: Nihon Daihyakka Zensho 「満州国」 (Kimijima Kazuhiko) «8月17日に「解体」が宣言された»; Yamakawa aynı.

| dosya | satırlar | ne |
|---|---|---|
| data/devletler.js | 10546-10547, 10554 | `mancukuo` künye t (+ ic_not_t) ve son maddesi (b ve kaynak yeni dayanakla) |
| data/kronoloji_sinir_nokta2.js | 84 | madde [77]: t, gun, d, kaynak, ic_not_t (Kızıl Ordu'nun Changchun'a girişi ayrı olay diye beyan) |
| data/yerlesimler_nokta2.js | 30 | Hsinking: mancukuo bitişi + cin-cumhuriyeti başlangıcı |

Toplam: 5 geçiş.

**Dokunulmayanlar:**
- `data/kronoloji_cok_1923_1945.js` 7374 — 1945-08-18 Endonezya anayasası; başka olay.
- 🔴 ÖNCEDEN VAR OLAN pencere aşımı (bu işten doğmadı, ama künye t'si bir gün daha erkene çekildiği için 14 güne çıktı):
  `data/yer_yama_1923_1945.js` 7711-7725, 7919-7923 — Cehol, Mukden, Liaoyang, Cilin, Ningguta, Aigun, Harbin,
  Qiqihar, Mergen, Sanxing, Chifeng'de `mancukuo` dönemi 1945-08-31'e (BRIT "August 1945" üst sınırı) kadar sürüyor;
  `devletler.js` mancukuo kronolojisinde de 1945-08-31 "son" maddesi var. Bunlar ayrı tanıklık (Sovyet işgali,
  ay düzeyinde) — talimat gereği değiştirilmedi. `denetle` bunu ihlal saymıyor (çıkış 0). Öneri: bu 11 noktanın
  geçişi 1945-08-17'ye çekilmeli ya da 08-17..08-31 Sovyet `isg:` olarak yazılmalı — Emre kararı.

## Ölçüm

- `py arac/kodla.py coz-c` (iki ham dosya) → `py arac/denetle.py` **çıkış 0** ("SONUÇ: temiz"). Değişmez 2
  dahil: kronoloji maddeleri ile kırılmalar aynı güne birlikte kaydırıldığı için ±30 gün içinde.
- `py arac/renk_olc.py` çıkış 0.
- `py arac/paketle.py yenile` (30 paket) + `py arac/surum_damgala.py` (r12334).
- Harita bu değişikliği HAVVA'daki bir sonraki tam koşudan sonra gösterir.
