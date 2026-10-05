# ONCE1281-ALASKA-1004 — Alaska'da 1867 sonrası `kanada` düzeltmesinin şartları

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-GERIYE-KAPI-1004.md`](ONCE1281-GERIYE-KAPI-1004.md) §B.1.
**Veriye yazılmadı.** Öneriler koordinatöre; `yerlesimler*.js` onda.
`git rev-parse HEAD`: arama betiği `8b713afc` (baş = son) · simülasyon betiği `5b8db6af` (baş = son).

## ① Alaska devri (1867-10-18) için kronoloji maddesi VAR mı? — **VAR**

Dört evren ayrı ayrı tarandı (node `vm`; `Alaska` / `1867-03-30` / `1867-10-18`):

| evren | dosya | madde | isabet |
|---|---|---|---|
| **çekirdek** `olaylar*.js` (Değişmez 2) | 75 | 1763 | 1 — Anchorage 1914 (ilgisiz) |
| **`kronoloji_sinir*.js`** (Değişmez 2'ye 24 Eylül'de KATILDI, `denetle.py:1111`) | 10 | 404 | **`kronoloji_sinir_amerika.js` · `t: 1867-10-18` · "Alaska ABD'ye devredildi — 141. meridyen ABD'nin sınırı oldu"** · kaynak: ABD Dışişleri Office of the Historian · (+1825 İngiliz–Rus sözleşmesi, +1870 Kuzey-Batı Toprakları) |
| `kronoloji_cok_*` (kuyruk, Değişmez 2 DIŞI) | 56 | 3084 | `kronoloji_cok_rusya.js` · `1867-10-18` "Rusya Alaska'yı Sitka'da ABD'ye teslim etti" (+8 Rus Amerikası kuruluş maddesi) |
| öteki `kronoloji*.js` (DIŞI) | 42 | 4755 | `kronoloji_rusya.js` · `1867-03-30` "Alaska ABD'ye satıldı" (imza günü, devir değil) |

Kaynağı bu oturumda AÇTIM (curl, ham metin) — history.state.gov/milestones/1866-1898/alaska-purchase:
*"The Senate approved the treaty of purchase on April 9; President Andrew Johnson signed the
treaty on May 28, and Alaska was formally transferred to the United States on October 18, 1867."* ✅

⇒ **② (yeni madde metni) GEREKMİYOR.** Madde Değişmez 2 evreninde, günü kaynaklı ve doğru.
Yeni madde yazmak mükerrer olurdu.

## ① ek — maddenin VARLIĞI kapıyı geçirir mi? Simülasyonla ÖLÇÜLDÜ

`denetle.py`yi modül olarak çağırdım (`degismez2` · `kapsam_disi` · `yil_temsili_ayir`;
`main()`'in kullandığı `olaylari_yukle()` ile aynı evren). Veri bellekte değiştirildi, diske yazılmadı:
- 4 Alaska içi nokta: `s: [dene 1281-01-01→1867-10-18] [abd 1867-10-18→1923-10-29]`
- Fort Yukon: `ingiliz-kuzey-amerika 1847→1867-10-18` · `abd 1867-10-18→1923-10-29`

| | Değişmez 2 (d/v) | 2s kırılma | 2s açık-ham | **2s AÇIK** (tavan 189) | kapsam dışı | yıl-borç |
|---|---|---|---|---|---|---|
| BUGÜN | 622 · 0 açık | 1710 | 1145 | **189** | 792 | 164 |
| ÖNERİ | 622 · 0 açık | 1710 | 1145 | **189** | 792 | 164 |

⇒ **Δ = 0. Kapı ötmez.** Sebep: yeni 1867-10-18 kırılması Alaska'nın ZATEN var olan 1867-10-18
grubuna katılıyor (Anaktuvuk, Aleksandrovski Redut … zaten `abd`); grup "açık-ham" (madde bu
yerleşimlerin ADINI anmıyor — `yer_sarti`) ama Osmanlı küresine uzak olduğu için **KAPSAM
DIŞI** kovasında. Bugünkü 1763-02-10 kırılması (Alatna'nın `ingiltere → ingiliz-kuzey-amerika`
geçişi) önerinin içinde kayboluyor; o da kapsam dışıydı, sayı değişmiyor.
⚠️ Bu "geçer" demektir, "madde bu yerleri doğruluyor" DEĞİL: madde Alaska'yı anıyor, Alatna'yı
anmıyor. Değişmez 2s'nin ölçütüyle bu kabul edilmiş bir kapsam-dışı borçtur.

## ③ `dene` künyesi — VAR, pencere TUTUYOR (`girdi.oku_devletler()`'den okundu)

| künye | `f` | `t` | 1281–1867 penceresi |
|---|---|---|---|
| `dene` — "Dene (Atabask Halkları)", `bolge: kuzey-amerika` | `1281-01-01` | `1899-06-21` | ✅ tutuyor |
| `abd` | `1776-07-04` | `1945-09-02` | ✅ 1867-10-18'i tutuyor |
| `kanada` | `1867-07-01` | `1945-09-02` | (kaldırılacak dönem) |

⚠️ `dene`'nin `f`'si **1281-01-01** — künye de UFUK tabanına KENETLİ (`ONCE1281-SEKIL` §2.6'daki
275'lik kovanın bir üyesi). Bugünkü düzeltme için engel değil; 1281 öncesine uzatılırken önce künye.
📌 Komşu emsal: 174 km'deki Vashrąįį K'ǫǫ (Arctic Village) zaten `dene 1281 → abd 1899`. Öneri
bu emsale ve kayıtların kendi `not:`'una (HNAI c.6 Subarctic) dayanıyor; HNAI'yi AÇMADIM.

## ④ Natashquan — `innu` künyesi YOK

Ölçüldü: `devletler.js`'te `innu` / `montagnais` / `naskapi` künyesi yok. Kaydın kendi notu:
*"Innu yaz kampı; 19. yy HBC karakolu · dayanak: HNAI c.6 Subarctic (Smithsonian)"*. Bugün
`fransa 1281→1763 · ingiliz-kuzey-amerika →1867 · kanada →1923`.
Yakın çevre (600 km): Mingan (158 km), Sept-Îles (325 km), North West River (388 km) 1400 ve 1600'de
**SAHİPSİZ**; yerli kimlikli komşular `beothuk` (Newfoundland, 399 km), `mikmak` (428 km),
`maliseet` (572 km) — hiçbiri Innu değil.

**D205 sınıfı:** D205'in üç sınıfı künye AŞIMI içindir (devlet öldü / polity sürüyor / ardıl geçti);
burada aşım yok — **doğru kimlik dizinde HİÇ YOK, yerine yanlış bir kimlik oturtulmuş.** Bu,
§3.5'in "devlet var, yeri yanlış" (`D204`) sınıfıdır; D205'in ③'üne (ardıl künye) EN YAKIN çare:
doğru künyeyi açmak.

| seçenek | sonuç | öneri |
|---|---|---|
| **a) `innu` künyesi aç** (Innu / Montagnais-Naskapi; dayanak HNAI c.6 Subarctic — Rogers & Leacock, "Montagnais-Naskapi"; **sayfayı açmadım**), Natashquan `innu 1281→1763-02-10` | atlasın yerli halk modeline (`dene`, `kri`, `mikmak`, `beothuk`) uyar; doğru halk | ✅ **ÖNERİM** |
| b) 1281–1763 dönemini sil, nokta SAHİPSİZ kalsın (komşular Mingan, Sept-Îles gibi) | Değişmez 1 beklenen sahipsiz 309 → 310 ⇒ kapı öter, `kasitli_bosluk` + beklenen güncellemesi gerekir; "Innu yaz kampı" diyen kendi notuyla çelişir | ikinci tercih |
| c) mevcut bir kimliğe bağla (`kri`, `mikmak`) | yanlış halk ⇒ aynı kusur, başka adla | ❌ |

⚠️ Hangisi seçilirse seçilsin **Fransız dönemi ayrı soru:** Fransa'nın Quebec Kuzey Kıyısı'nda
fiilî varlığı 1281'de değil 17. yy (veride Mingan `fransa 1679`, Sept-Îles `1651`). Natashquan'ın
`innu → fransa` geçiş günü kaynak ister; **ölçmedim**. En azı: `fransa 1281` kesinlikle yanlış.

## Fort Yukon — sınırlı öneri

`kanada 1867-07-01→1923-10-29` → `abd 1867-10-18→1923-10-29` (yukarıdaki Office of the Historian
alıntısı yeter). `ingiliz-kuzey-amerika 1847→1867` dönemi ise tartışmalı: karakol HBC'nindi ama
toprak hukuken Rus Amerikası'ydı ve HBC'nin 1869'a kadar kaldığı söylenir. Britannica "Fort Yukon"
sayfası bu oturumda **açılamadı** (boş gövde) ⇒ 1847-1867 sahibi **ölçülemedi**; dokunmamayı,
yalnız `kanada` → `abd` değişimini öneriyorum.

## Özet — koordinatörün iki sorusu

- **① VAR.** `kronoloji_sinir_amerika.js` `1867-10-18` "Alaska ABD'ye devredildi" (Değişmez 2
  evreninde, kaynak açıldı ve tuttu). **② GEREKMİYOR** — madde yazılırsa mükerrer.
- Simülasyon: önerilen 5 nokta düzeltmesi Değişmez 2 ve 2s AÇIK'ı **değiştirmiyor** (Δ 0) — kapı ötmez.
- **③** `dene` var, 1281–1899 penceresi 1867'yi tutuyor (`f` kenetli, not edildi).
- **④** Natashquan: `innu` künyesi açılsın (önerim a); Fransız geçiş günü ayrı, ölçülmedi.

## DIFF — öngörü (ölçümden ÖNCE, 5 Ekim 2026)

- Diff: tek dosya (`data/yerlesimler_kamerika.js`), 5 hunk; her noktada `s:` satırı değişir +
  1-2 satır beyan yorumu ⇒ **~10 `-`/`+` satırı, toplam diff ~45-60 satır.**
- `git apply --check` ana çalışma ağacında: **temiz.**
- `denetle.py` worktree'de: **çıkış kodu taban ile AYNI**; Değişmez 1 sahipsiz sayısı aynı
  (Alaska noktaları zaten sahipli kalıyor), Değişmez 2 **622 / 0 açık**, 2s AÇIK **189** (Δ 0 —
  bellekteki simülasyonla aynı). Yeni ihlal 0.
- İki yönlü sahiplik sınavı: 1900-01-01'de 5 noktanın sahibi ÖNCE `kanada` → SONRA `abd`;
  1500-01-01'de 4 Alaska içi ÖNCE `ingiltere` → SONRA `dene`; Fort Yukon 1850'de DEĞİŞMEZ
  (`ingiliz-kuzey-amerika`); geri kalan 4293 noktanın hiçbir sınav gününde sahibi DEĞİŞMEZ.
- Yan bulgu (diff DIŞI): Nabesna/Northway `dene → abd` geçişi 1899-06-21 (Kanada Antlaşma 8
  günü) — Alaska'da olduğu için 1867-10-18 olmalı.

## DIFF — ölçüm (`denetim/ONCE1281-ALASKA-1004.diff`)

Yöntem (Berlin usulü): `git worktree add --detach` (HEAD `55630d33`) → yama yalnız
worktree'de uygulandı (`yerlesimler_kamerika.js`, CRLF korunarak) → `denetle.py` worktree'de
ÖNCE ve SONRA koştu → iki yönlü sahiplik sınavı → `git diff --output` → ana ağaçta
`git apply --check`. Worktree sonra kaldırıldı. Ana ağaçta veri DEĞİŞMEDİ
(`git diff --quiet -- data/yerlesimler_kamerika.js` = 0).

| ölçü | öngörü | ölçüm | |
|---|---|---|---|
| diff boyu | ~45-60 satır · 5 hunk | **62 satır · 4 hunk** (Alatna + Fort Yukon komşu, tek hunk'ta) · **24 + / 5 −** | ✅ yakın |
| `git apply --check` (ana ağaç) | temiz | **çıkış 0** | ✅ |
| JS geçerliliği (node `vm`) | — | 377 kayıt yüklendi | ✅ |
| `denetle.py` çıkış kodu | tabanla aynı | ÖNCE **2** · SONRA **2** (Değişmez 8 ÖLÇÜLEMEDİ: üretilmiş `devletler_harita.js` git'te yok, worktree'ye gelmiyor — İHLAL değil, iki koşuda da aynı) | ✅ |
| Değişmez 1 / 2 / 2s / 2i / 4 / 4c / 4d / 5 | aynı | **hepsi aynı** (309 sahipsiz · 622/0 · 2s AÇIK 189 · 4c 127 · 4d 324 …) | ✅ |
| 313 satırlık çıktıda değişen satır | 0 | **1**: Değişmez 7 muafiyet sayacı `cografi-tecrit 4700 → 4696` | ❌ öngörmedim — ama İYİLEŞME: 4 Alaska noktası artık Alaska içinde tek başına `ingiltere`/`kanada` adacığı değil, komşularıyla aynı sahipte; "coğrafi tecrit" muafiyetine gerek kalmadı. Sorgusuz enklav 726 → 726. |
| sahibi değişen nokta (10 sınav günü × 4298) | 5 | **5** — öteki **4293** nokta hiçbir günde değişmedi | ✅ |

**Sahiplik sınavı ayrıntısı:** 4 Alaska içi noktada 1281…1867-10-17 arası her sınav gününde
`ingiltere`/`ingiliz-kuzey-amerika`/`kanada` → **`dene`**; 1867-10-19, 1900, 1923'te
`kanada` → **`abd`**. Fort Yukon'da 1850 DEĞİŞMEDİ (`ingiliz-kuzey-amerika`), 1867-10-19 ve
sonrası `kanada` → `abd`.
⚠️ **Öngörmediğim tek yan etki:** Fort Yukon'un `ingiliz-kuzey-amerika` dönemi 1867-07-01'den
**1867-10-18'e uzadı** (109 gün) — boşluk kalmasın diye zorunlu; 1867-07-02 ve 1867-10-17
sınav günlerinde sahip `kanada` → `ingiliz-kuzey-amerika` oldu. Bu dönemin kendisi zaten
"ölçülemedi" (hukuken Rus toprağı) — uzama beyanın kapsamında.

**Diff içindeki beyanlar** (koordinatörün iki şartı): ① kırılma Değişmez 2s'de KAPSAM DIŞI
kovasında geçiyor, madde yerleri ADIYLA anmıyor · ② `dene` künyesi 1281-01-01'de KENETLİ.
Fort Yukon'a ayrıca: 1847-1867 sahibi ÖLÇÜLEMEDİ, dokunulmadı.

**Diff DIŞINDA bırakılanlar:** Natashquan (kaynak açılmadan künye yok — koordinatör hükmü) ·
Nabesna/Northway (`dene → abd` 1899-06-21; Alaska'da 1867-10-18 olmalı — ayrı kalem).
