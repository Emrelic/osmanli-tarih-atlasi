# ONCE1281-AVUSTURYA-UYGULA-1004 — F8 modelinin (fiilî `isg:` + antlaşmada `s:`) kapı etkisi

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (Emre F8 kararı)
Önceki: [`ONCE1281-AVUSTURYA109-1004.md`](ONCE1281-AVUSTURYA109-1004.md). **Veriye yazılmadı.**

Emre (F8): *"Ekim-Aralık 1918'de fiilen devralan devletler İŞGAL olarak taranır, Saint-Germain/Trianon ile
RENGE katılır."* ⇒ `isg: fiilî gün → antlaşma günü` · `s: antlaşma günü →`.
Koordinatörün sırası: **④ (Değişmez 2i kapısı) ÖNCE**, sonra ①②③.

## 0. Ölçümden önce görülen iki yapı gerçeği

1. Haritadaki `avusturya` boyası **`habsburg`** künyesine bağlı (`harita: avusturya`): "Habsburg Avusturya",
   `f 1282-01-01 → t 1918-11-11`. ⇒ F8 modelinde `s: avusturya` antlaşma gününe (1919-09-10 / 1920-06-04 /
   1920-11-12 / 1923-03-15) uzarsa dönem künyenin **ölümünü aşar** — Değişmez 4c.
2. Halef künyeleri: `cekoslovakya` f 1918-10-28 · `yugoslavya` f **1918-12-01** · `polonya` f 1918-11-11 ·
   `macaristan-naiplik` f **1918-11-16** · `romanya-kralligi` 1881 · `italya` 1861 · `drzava-shs` **YOK**.
   ⇒ 29 Ekim'de başlayan bir `isg: yugoslavya` künyenin DOĞUMUNDAN önce başlar — Değişmez 4d.

## 1. Simülasyon modeli (bellekte, `denetle`'nin gerçek işlevleri; diske yazılmaz)

- Antlaşma günü, alt ajanın nokta başına `hukuki` alanından: Saint-Germain **1919-09-10** · Trianon
  **1920-06-04** · Bosna (ortak yönetim, iki antlaşma) **1919-09-10** (ilki — ⚠️ seçim, beyan) · Rapallo
  **1920-11-12** (Zadar, Cres) · Büyükelçiler Konferansı **1923-03-15** (Lviv, Yazlovets). Günler İMZA günü
  (TDV `birinci-dunya-savasi`: "10 Eylül'de Avusturya ile Saint-Germain … 4 Haziran 1920'de Macaristan ile
  Trianon" — açıldı); yürürlük günleri (1920-07-16 / 1921-07-26) ALTERNATİF olarak not edilir.
- `s:` — `avusturya` dönemi antlaşma gününe uzar, halef dönemi antlaşma gününde başlar.
- `isg:` — `{f: fiilî gün, t: antlaşma günü, d: halef}`; YALNIZ tam günü olan noktalara.
  - Senaryo **A**: yalnız yer düzeyinde KAYNAKLI tam gün (19 nokta).
  - Senaryo **B**: A + bölge düzeyinde KABA tam gün (66 nokta) — F2 bu tür "bölge günü"nü yasaklamıyor ama
    `D208` bölgeden şehre taşımayı bayrak için yasaklıyor ⇒ B yalnız ÜST SINIR olarak ölçülür.
- **Macaristan çekirdeği** (halef `macaristan-naiplik` ve Trianon'dan sonra Macaristan'da kalan 20 nokta):
  işgal değil kendi devletinin devamı ⇒ bu ölçümde DOKUNULMAZ (ayrı soru, §④ sonuç).

## 2. ÖNGÖRÜ — ölçümden ÖNCE

- **Değişmez 2i:** yeni işgal kırılma GÜNÜ (2i günü sayar): A ~12, B ~18. Açık: fiilî günlerin hepsi ±30 günde
  bir maddeye değer (2i'de YER şartı YOK — yakınlık yeter); antlaşma günlerinde #7 Saint-Germain, #8 Trianon
  var. **Risk: 1923-03-15 (Lviv) ve 1920-11-12 (Rapallo)** — maddesi olmayabilir. Bugün açık 1 = tavan 1 ⇒
  **tek yeni açık kapıyı öttürür.** Öngörü: A'da **0–1**, B'de **1–2** yeni açık ⇒ kapı **ÖTEBİLİR**.
- **Değişmez 4c (asıl engel):** `s: avusturya` antlaşmaya uzayan her nokta `habsburg` künyesini aşar ⇒
  **+~85 dönem** (109 − 20 Macar çekirdeği − birkaç) ⇒ 4c **KESİN ÖTER** (beklenen 127).
- **Değişmez 4d:** `isg: yugoslavya` 29 Ekim / 1 Kasım ⇒ künyeden önce ⇒ B'de **+~35**.
- Değişmez 2 / 2s: `s:` kırılmaları antlaşma günlerine taşınır; Saint-Germain/Trianon maddeleri taraf
  kolundan kapatır ⇒ **2s AÇIK +0–2** (Rapallo, 1923).

## 3. Ölçüm
(aşağıda)

## 3. Ölçüm — ④ (HEAD baş = son `7eed41da`; `denetle`'nin gerçek işlevleri, veri bellekte)

| | Değişmez 2 | 2s kırılma / **AÇIK** (tavan 189) | **2i kırılma / AÇIK** (tavan 1) | 4 hayalet | **4c** (beklenen 127) | 4d (324) |
|---|---|---|---|---|---|---|
| BUGÜN | 623/0 | 1711 / 189 | 144 / 1 | 5 | 127 | 324 |
| Senaryo A (19 KAYNAKLI tam gün; `isg` 17 nokta) | 623/0 | 1714 / **191** | 161 / **1** | 5 | **176** | 324 |
| Senaryo B (+ 66 KABA bölge günü; `isg` 65 nokta) | 623/0 | 1714 / **191** | 162 / **1** | 5 | **176** | 324 |

### ④ CEVAP: **Değişmez 2i ÖTMEZ** — ama yama bu hâliyle İNMEZ, çünkü İKİ BAŞKA kapı öter.
- **2i:** yeni işgal kırılma günü A'da **17**, B'de **18** (1918-10-28 … 1923-03-15). Açık **1 → 1**: kalan tek açık
  BUGÜNKÜ 1878-09-18 (Berlin, 46 gün). Hepsi ±30 günde bir maddeye değiyor — 2i'de yer şartı YOK, yakınlık yetiyor
  (1919-04-19/20 bile 1919-04-12 Kars maddesine değiyor: yakın ama ALAKASIZ — 2i'nin bilinen zayıflığı).
- 🔴 **2s ÖTER: 189 → 191.** Yeni açık gruplar: **1920-06-04** (Bač, Brașov, Bratislava, Cetingrad …) — "Trianon
  Antlaşması" maddesi VAR ama yerleri anmıyor ve **taraf kolu da tutmuyor: Macar tacı topraklarının eski sahibi
  atlasta `avusturya` (habsburg) — madde "Macaristan" diyor** · **1920-11-12** (Hvar, Knin, Korčula, Krk …) — "Rapallo
  Antlaşması" maddesi VAR, aynı sebep · **1919-08-12** Lendava/Murska Sobota (zincirlerindeki başka bir kırılma
  kaydı). ⇒ Çare: Trianon/Rapallo maddelerine yer adları (D261) ya da tavan beyanı.
- 🔴 **4c ÖTER: 127 → 176 (+49, hepsi `avusturya`).** `s: avusturya` antlaşma gününe uzayınca `habsburg` künyesinin
  ölümünü (1918-11-11) aşıyor. +89 değil +49: Saint-Germain'e (1919-09-10, 303 gün) uzayanlar tolerans İÇİNDE kalıyor
  gibi görünüyor; Trianon (571 gün), Rapallo, 1923 olanlar aşıyor. Örnek: Zagreb `avusturya 1526 → 1920-06-04`,
  Lvov `→ 1923-03-15`.
- **4d +0** (öngörüm +35 — yanlış: `isg: yugoslavya` 29 Ekim künyeden önce olduğu hâlde 4d saymıyor; ya `isg`'yi
  okumuyor ya toleranslı — ayrıca bakılmalı).

### ④'ten çıkan MODEL sorusu (karar sizin / Emre'nin)
F8 "antlaşmada renge katılır" diyor; ama arada (fiilî gün → antlaşma) `s:` sahibi olarak yazılabilecek bir künye
YOK: `habsburg` 1918-11-11'de ölü, `macaristan-habsburg` 1918-11-16'da ölü. Üç yol:
1. `habsburg`'u antlaşmaya kadar uzatmak — **tarihsel olarak yanlış** (monarşi bitti).
2. `s:` halefi fiilî günden başlatmak, `isg:` yazmamak — F8'in "renge antlaşmada katılır" hükmüne aykırı.
3. 4c'ye **beyanlı tavan**: 49 dönem "F8 model gereği, ara dönem de jure sahipsiz" diye listelenir (sayı değil
   LİSTE, `ODAK-TAVAN` emsali).
Ayrıca: Macar tacı topraklarının (Erdel, Slovakya, Hırvatistan-Slavonya, Voyvodina) 1918'e kadarki sahibi atlasta
`avusturya` — `macaristan-habsburg` değil. 2s'yi öttüren taraf uyuşmazlığının kökü bu.
