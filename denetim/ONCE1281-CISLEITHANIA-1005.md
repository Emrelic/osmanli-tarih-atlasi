# ONCE1281-CISLEITHANIA-1005 — 4c'nin 16 dönemi: `D205` tasnifi ve halef zinciri

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (M-5830 ①)
Önceki: [`ONCE1281-AVUSTURYA-UYGULA-1005.md`](ONCE1281-AVUSTURYA-UYGULA-1005.md) (taç yarısı indi `fe6ebb85`; Cisleithania
yarısı F8'de 4c'yi 127 → 143 öttürdü). **Veriye yazılmadı.** Taban HEAD `0159f1df`.

## 0. Ölçümden önce okunan — künye taraması ve birincil metin
**`devletler.js` TARANDI** (id/ad/bolge/harita/not; tahmin edilen id aranmadı; 1918-1924 penceresi, `pad()`'li):
`habsburg` 1282 → **1918-11-11** · `avusturya-cumhuriyet` 1918-11-12 → 1938 · `yugoslavya` (Krallık SHS) **1918-12-01** →
· `italya` 1861 → · `polonya` 1918-11-11 → · `karadag` → 1918-11-26 · `ukrayna-halk-cumhuriyeti` 1917-11-20 → 1920-11-21 ·
`ukrayna-devleti-1918`. **YOK:** Država SHS (1918-10-29 → 12-01) · Batı Ukrayna HC (ZUNR) · Fiume Serbest Devleti ·
Müttefik emaneti. (`bolge:` ile de tarandı.)

**Birincil metin (FOROST, Regensburg):**
- **Saint-Germain md. 91:** *"Austria renounces so far as she is concerned in favour of the Principal Allied and Associated
  Powers all rights and title over the territories which previously belonged to the former Austro-Hungarian Monarchy and
  which, being situated outside the new frontiers of Austria … have not at present been assigned to any State."*
- **Büyükelçiler Konferansı kararı (15.III.1923)** girişinde aynı maddeyi anarak Doğu Galiçya'yı Polonya'ya bırakır.
- **Rapallo md. 2** Zara → İtalya · **md. 3** Cherso, Lussin, Lagosta, Pelagosa → İtalya; *"All other islands which
  belonged to the former Austro-Hungarian Monarchy shall be recognised as forming part of the Kingdom of the Serbs,
  Croats and Slovenes."*

⇒ **16 dönemin ara dönemi (1918-11-11 → antlaşma) için DE JURE sahip bir DEVLET değil:** Saint-Germain'e dek tanınmış
egemen yok (Država SHS, ZUNR tanınmadı; İtalyan işgali Villa Giusti mütarekesiyle), Saint-Germain'den sonra **Başlıca
Müttefik ve Ortak Devletler** (md. 91) — atamaya (Rapallo 1920-11-12 / Büyükelçiler 1923-03-15) dek.

## 1. `D205` TASNİFİ (16 dönem)
| sınıf | uygulanır mı | gerekçe |
|---|---|---|
| ① devlet ÖLDÜ → KISALT | **evet, ilk yarı** | `habsburg` 1918-11-11'de bitti; `avusturya` dönemi antlaşmaya UZAMAZ. Ama kısaltmak tek başına DELİK açar (`D205`). |
| ② aynı polity SÜRÜYOR → GENİŞLET | **hayır** | `avusturya-cumhuriyet` ayrı polity; Dalmaçya/Galiçya'yı hiç tutmadı. `habsburg`'u uzatmak tarihen yanlış (M-5811'de reddedildi). |
| ③ ardıl yapı GEÇTİ → ARDIL KÜNYE | **evet** | ardıl = md. 91 emaneti (de jure) — **künyesi YOK**. Fiilî ardıllar (SHS, İtalya işgali, ZUNR/Polonya) `isg:`. |
⇒ 16'nın HEPSİ aynı sınıf bileşimi: **① + ③** (kısalt + künyesiz ardıl). Dalmaçya 12 · Galiçya 2 · Kvarner 2 arasında sınıf
farkı YOK; fark yalnız atama gününde (Rapallo / 1923).

## 2. Ölçülecek seçenekler
- **A — md. 91 emaneti künyesi** (`itilaf-emaneti`, bellekte enjekte): `avusturya` → 1919-09-10 (SG imza; öteki SG noktalarıyla
  aynı tolerans) · `itilaf-emaneti` 1919-09-10 → atama · halef atamadan. `isg:` fiilî (kaynaklı tam gün).
- **C — `__BOSLUK__`** ara dönem: `avusturya` → 1918-11-11 (bugünkü gibi), `__BOSLUK__` → atama.
- **B — bugünkü veri** (halef 1918-11-11'den — künye günü, `D207` sahte gün): referans.

## 3. ÖNGÖRÜ — ölçümden ÖNCE
- **A:** 4c **127** (SG uzantısı tolerans içinde — öteki SG noktalarında ölçülmüştü) · 4d 324 · 2s AÇIK **188** (yeni kovalar
  taraf kolundan kapanır: SG başlığında "Avusturya", Rapallo'da "SHS"/"İtalya", 1923'te "Polonya") · 2sk taraf **+~20** ·
  D1 309 · D7 **+1..+3** (emanet gövdesi Dalmaçya/Kvarner ve Galiçya'da kopuk) · 2i açık 1.
- **A + Zadar/Cres yer adı** (Rapallo md. 2-3 — `D261`'in ilk sahici uygulaması): 2sk YER **+2**, taraf **−2** — ancak Rapallo
  kovası kapanırsa (öngörü: kapanır).
- **C:** 4c 127 · D1 **309** (öngörü: `__BOSLUK__` sahipsiz sayılmaz) · 2s: 1918-11-11 → `__BOSLUK__` kırılması "Avusturya"
  taraf koluyla kapanır, atama günü kırılmaları `__BOSLUK__` karşı taraf sayılmadığı için … ölçülecek. **Görsel bedel:**
  Dalmaçya ve Doğu Galiçya 2-4 yıl BOYANMAZ (beyaz) — ölçülmez, kod okumasıyla bilinir (`VERI-YAPISI.md`).

## 4. ÖLÇÜM (öngörü `01576f04`'ten SONRA · HEAD `01576f04` · `cis_sim.py`, `cis_sim2.py` — künye ve takma ad YALNIZ bellekte)
| | D1 | 2s AÇIK | 2sk YER / TARAF | 2i | 4c | 4d | D7 (beklenen 731) |
|---|---|---|---|---|---|---|---|
| B BUGÜN (taç indi) | 309 | 188 | 1561 / 1635 | 154/1 | 127 | 324 | 727 |
| **A** md. 91 emaneti | 309 | 189 (+1 Rapallo) | 1561 / 1652 | 162/1 | **127** | 324 | 731 |
| C `__BOSLUK__` | 309 | 189 | 1561 / 1636 | 162/1 | 127 | 324 | 732 |
| A + Rapallo'ya Zadar/Cres adı | 309 | 189 | 1561 / 1652 | 162/1 | 127 | 324 | 731 |
| **A + "SHS" takma adı** | 309 | **188** | 1561 / 1666 | 162/1 | 127 | 324 | 731 |
| **A + "SHS" + Zadar/Cres adı** | 309 | 188 | **1563 / 1664** | 162/1 | 127 | 324 | 731 |
| B + "SHS" (takma adın tek etkisi) | 309 | 188 | 1561 / 1635 | 154/1 | 127 | 324 | 727 |

**Okuma:**
- **A ve C ikisi de 4c'yi 127'de tutuyor** (SG imzasına uzayan `avusturya` tolerans içinde; öngörü ✅). Hayalet, künyesiz, 4d: +0.
- **Rapallo kovası (14 yer) A'da 8 eksikle AÇIK:** Hvar, Knin, Korčula, Krk, Mljet, Nadin, Pag, Rab — halef `yugoslavya`,
  madde başlığı *"İtalya ile **SHS Krallığı** arasında"*, ama `yugoslavya`nın taraf adayları yalnız `sirp-hirvat-sloven …`
  (künye adından). **"SHS" takma adı eklenince kova KAPANIR** (2s 189 → 188) — bugünkü veride etkisi 0 (B satırı).
- **`D261`'in ilk sahici uygulaması — Zadar/Cres (Rapallo md. 2-3): 2sk YER +2, TARAF −2** — ama YALNIZ kova kapalıysa
  (takma adsız etkisi 0, öngörüm "kova kapanır" ❌ — takma ad gerekiyormuş).
- **D7 A'da 727 → 731** (= beklenen, ötmez): +2 **Lvov, Yazlofça** — emanet gövdesi Dalmaçya'da, Doğu Galiçya 876-892 km
  uzakta ⇒ HAKİKİ enklav (md. 91 iki ayrı bölgeyi kapsar) — `enklav:true` beyanı uygun · +2 **Ljubljana, Maribor**
  `yugoslavya` 1918-11-11 — Dalmaçya emanete geçince Sloven kümesi Split/Dubrovnik kümesinden kopuyor (öngörü +1..+3 ✅).
- **C'nin bedeli:** D7 +1 fazla (Darvaz `__BOSLUK__` adası yan etkiyle görünür oldu) ve **Dalmaçya + Doğu Galiçya 2-4 yıl
  BOYANMAZ** (`__BOSLUK__` "kimsenin değil" demektir; bu topraklar md. 91 ile Müttefiklerin emanetindeydi — beyan YANLIŞ olur).

## 5. ÖNERİ ve İSTENEN
1. **A — ardıl künye** (`D205` ③): `itilaf-emaneti` "Başlıca Müttefik ve Ortak Devletler emaneti (Saint-Germain md. 91)",
   f 1919-09-10 (SG imza; yürürlük 1920-07-16 alternatif) → t 1923-03-15. Kaynak: SG md. 91 + 1923 kararı girişi (FOROST).
   🔴 **Künye açmak ve boyası benim yetkim değil** — `devletler.js` + boya: `renkler.py` motor tuzunda (`§9.1`) ⇒ ya tam inşa
   koşusunu bekler ya `harita:` ile var olan bir boyayı ödünç alır (hangisi — Emre/sen).
2. `yugoslavya` için 2s taraf takma adı **"SHS"** (`denetle.py`, sende) — Rapallo kovasını kapatır; bugünkü veride etkisi 0.
3. Lvov + Yazlofça emanet dönemine `enklav:true` (hakiki: md. 91 Galiçya'yı ayrı kapsar).
4. C (`__BOSLUK__`) önerilmez; B (bugünkü 1918-11-11 halef) künye günü (`D207`) — kalıcı çözüm değil.
⚠️ Kapsam notu: Split, Sinj, Klis, Brač, Dubrovnik, Kotor, Herceg Novi araştırmada "Saint-Germain"e bağlanmış; md. 91 ve
Rapallo md. 3 (Brač "all other islands") ile bunların da atama günü Rapallo olabilir — 16'nın dışında, ayrı tasnif borcu.

## 6. DİFF (hüküm M-5835 ②) — ÖNGÖRÜ, ölçümden ÖNCE (taban: Eisenstadt indi)
Üç dosya, üç ayrı kalem:
- `denetim/ONCE1281-CISLEITHANIA-1005.diff` (VERİ): `devletler.js` +1 künye `itilaf-emaneti` (`boya_gerekli:true` beyanıyla) ·
  16 kayıt A modeli (`avusturya` → 1919-09-10 · emanet → atama · halef atamadan; Zadar'ın ara `yugoslavya` dönemi düşer) ·
  `isg:` Zadar `italya` 1918-11-04 → Rapallo · Lvov `polonya` 1918-11-22 → 1923-03-15 · Knin `yugoslavya` 1918-12-01 (künye
  doğumuna kırpık) → 1918-12-19 + `italya` → 1921-04-04 · Şibenik `italya` 1918-11-06 → 1921-06-12 · Rapallo maddesinin
  gövdesine md. 2-3'ün devir cümlesi (Zara (Zadar) · Cherso (Cres) · "öteki bütün adalar SHS'ye").
- `denetim/ONCE1281-CISLEITHANIA-RENK-1005.diff` (MOTOR TUZU — `renkler.py`, tam inşaya bekletilir; ağaca UYGULANMAZ).
- `denetim/ONCE1281-CISLEITHANIA-SHS-1005.diff` (`denetle.py` — "SHS" taraf takma adı; senin dosyan).
**Öngörü (yalnız VERİ diff'i, §4 A satırına göre):** 2s AÇIK **+1** (Rapallo kovası 8 eksikle açık; md. 2-3 adı açık kovada
sayılmaz) · 2sk TARAF **+17**, YER +0 · 2i **+8** kırılma, açık aynı · 4c, 4d, D1, D2 aynı · D7 **+4** · renksiz künye +1
(beyanlı). **VERİ + SHS diff'i:** 2s AÇIK **+0** · 2sk YER **+2** (Zadar, Cres — `D261`), TARAF +29.
