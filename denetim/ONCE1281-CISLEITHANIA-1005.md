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
