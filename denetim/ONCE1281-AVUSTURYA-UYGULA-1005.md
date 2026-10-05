# ONCE1281-AVUSTURYA-UYGULA-1005 — F8 yaması, Macar tacı kökü düzeldikten SONRA

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (M-5819 hükmü)
Önceki: [`ONCE1281-AVUSTURYA-UYGULA-1004.md`](ONCE1281-AVUSTURYA-UYGULA-1004.md) (eski F8 ④) ·
[`ONCE1281-MACAR-TAC-1004.md`](ONCE1281-MACAR-TAC-1004.md) (K3 indi: `2adb784a`, D7'ye Habsburg ailesi).
**Veriye yazılmadı.** Sıra (koordinatör): ÖNCE Değişmez 2i, sonra diff.

## 1. Model (taban HEAD `2adb784a`)
Nokta evreni: 109 (`avus109_sonuc.json`). Antlaşma günü `hukuki` alanından (imza günleri): Saint-Germain 1919-09-10 ·
Trianon 1920-06-04 · Rapallo 1920-11-12 · Büyükelçiler 1923-03-15 · BiH 1919-09-10.
- **Macar çekirdeği** (halef `macaristan-naiplik`, Trianon'dan sonra Macaristan'da kalan): DOKUNULMAZ.
- **Macar tacı (K3 indi):** `macaristan-habsburg` → 1918-11-11 **AYNEN**; araya `macaristan-naiplik` 1918-11-11 →
  antlaşma; halef `s:` antlaşmadan. (1918-11-11 sınırı mevcut çekirdek verisinin emsali — künye 1918-11-16, 5 gün.)
- **Cisleithania/Dalmaçya:** `avusturya` → antlaşma; halef `s:` antlaşmadan. ⇒ 4c'de BEYANLI BORÇ (16 dönem bekleniyor).
- **`isg:` (F8 fiilî):** `{f: fiilî gün, t: antlaşma, d: halef}` — YALNIZ yer düzeyi KAYNAKLI **tam gün** (F2/D210).
- **Halef düzeltmesi (Bosna 16 HARİÇ):** 14 non-Bosna'dan yazılabilen **1**: Zadar → `italya` (Rapallo, kaynaklı).
  Öteki 13 yazılamaz: Hvar/Korčula/Vis/Mljet (işgal YIL düzeyi) · Baç, Yazlofça (KABA) · Broumov/Jeseník
  (Deutschböhmen/Sudetenland künyesi YOK) · Ungvár/Munkács (BULUNAMADI) · Lvov (ZUNR künyesi YOK) · Temeşvar
  (Sırp→Fransız geçiş günü yok, basın kaynağı) · Eisenstadt (Burgenland devri 1921, gün yok — ayrı borç).
- **`isg:` borcu 13 (üçüncü taraf işgali):** tam günlü ve künyesi olan **3**: Peçuy (Sırp, 1918-11-14 → 1921-08-22,
  MNL Baranya; `sirbistan-kralligi` → 1918-12-01, `yugoslavya` sonrası — ⚠️ künye bölmesi ÇIKARIM) · Şibenik
  (İtalya, 1918-11-06 → 1921-06-12; kaynak lisans tezi ⚠️) · Knin (İtalya, 1918-12-19 → 1921-04-04, belediye
  tarihi + Paić 1998). Knin'in F8 `isg:` (SHS, 1918-11-07) İtalyan işgali gününde KESİLİR. Kalan 10 yazılamaz
  (Mohaç/Zigetvar ay düzeyi · 6 ada yıl düzeyi · Lvov ZUNR künyesiz · Temeşvar).

## 2. ÖNGÖRÜ — ölçümden ÖNCE
- **2i: 144/1 → ~165/1 — ÖTMEZ.** Yeni üçüncü-taraf günleri (1921-04-04, 1921-06-12, 1921-08-22, 1918-11-14)
  ±30 günde bir maddeye değer (İnönü, Sakarya…) — ama YAKIN-ALAKASIZ: 2i'nin yer şartsızlığı. Bunu sayıyla vereceğim.
- **2s: 189 → 190** (Rapallo, Dalmaçya). Zadar `italya` halefi Rapallo maddesinin taraf koluna değer, ek açık doğmaz.
- **4c: 127 → 143** (+16: Dalmaçya 12, Galiçya 2, Krk/Cres 2). **4d: 324 → 324.** D1 309 · D2 623/0.
- **D7: 727 → ÖTER (+5..+15):** 1918-11-11 → antlaşma arasında `avusturya` gövdesi parçalanır (Bohemya/Saint-Germain
  · Galiçya · Dalmaçya ayrı adalar).

## 3. ÖLÇÜM (öngörü commit'i `eb73d41d`'ten SONRA)
Diff: `denetim/ONCE1281-AVUSTURYA-UYGULA-1005.diff` — 6 dosya (`yerlesimler.js` · `_a78_avrupa` · `_ek` · `_ek29` ·
`_ek_macaristan` · `_p77_avrupa`), **69 kayıt**, 135 `s:` dönemi yeni/değişen, **23 `isg:`** (19 F8 fiilî + 4 üçüncü
taraf; 2'si mevcut `isg:` dizisinin SONUNA eklendi — Cetin/Drežnik 1788-91 işgalleri DOKUNULMADI). Biçim korundu
(nesneler arası satır sonu/boşluk aynen; silinen yorum satırı 0). Her değişen dönemin `kaynak:`ına antlaşma alıntısı
eklendi: Saint-Germain/Trianon TDV `birinci-dunya-savasi` · Rapallo LNTS c.18 s.397-403 (veride Zadar kaydında
kaynaklı) · Büyükelçiler 15 Mart 1923 LNTS 15:261-265 (`d1923-pl-ro` maddesinin kaynağı).
- **Plan:** Taç (naiplik ara) 34 · Cisleithania/Dalmaçya 34 · DOKUNULMADI: Macar çekirdeği + Eisenstadt 21 · Bosna 20.
- **Zadar düzeltmesi:** halef ZATEN `italya`ydı (veride 1920-11-12'den, Rapallo md. 2 kaynaklı); düşen tek şey aradaki
  `yugoslavya` 1918-11-11 → 1920-11-12 dönemi (yerine `avusturya` → Rapallo + `isg: italya` 1918-11-04 → Rapallo).
- **`isg:` künye doğumuna kırpılan 6** (D203 — hayalet `isg:` yazılmadı): Zagreb, Ljubljana, Split, Knin, Maribor
  (`yugoslavya`, fiilî 29 Eki-7 Kas → künye 1918-12-01; ara dönemin devleti Država SHS künyesiz) · Krakov (`polonya`
  fiilî 31 Eki → künye 1918-11-11). Fiilî gün `kaynak:`a yazıldı; `drzava-shs` künyesi inince geri uzatılır.
- **İki yönlü sahiplik sınavı** (4299 kayıt, `f8b_karsi.py`): YÖN 1 — diskteki 69 kayıt simülasyonla **birebir**
  (uyumsuz 0) · YÖN 2 — dokunulmaması gereken ama değişen **0**.
- `git apply --check` ana ağaçta (HEAD `692ef09e`): **0**.

### denetle ÖNCE / SONRA (worktree, taban `eb73d41d`)
| | ÖNCE | SONRA | öngörü |
|---|---|---|---|
| D1 · D2 · 4 hayalet · 4d · 4s · 5 · D7 | 309 · 623/0 · 5 · 324 · 5 · 0 · 727 | **aynı** | D7 "öter" dedim — ❌ ÖTMEDİ (Habsburg ailesi sayesinde) |
| **2i** (tavan 1) | 144 / 1 açık | **166 / 1 açık — ÖTMEZ** | ~165 / 1 ✅ |
| 2s AÇIK (tavan 189) | 189 | **189** | 190 ❌ (Rapallo +1, ama 1919-08-12 Lendava/Murska — Ravalpindi'nin yanlış kapattığı — kırılma olarak KALKTI: net 0) |
| **4c** (beklenen 127) | 127 | **143 ✗** — +16 `avusturya` | 143 ✅ |
| 🆕 **2sk** yalnız taraf (tavan 1602) | 1603 ⚠️ (taban zaten 1 aşık) | **1655** (+52) | ❌ ÖNGÖRMEDİM |
| kaynaksız `s:` kaydı | 1937 | 1929 | — |
| SONUÇ | çıkış 2 (D8 worktree'de ölçülemez) | **çıkış 1** (yalnız 4c) | — |

**4c BEYANLI BORÇ listesi (16, ad olarak):** Dalmaçya 12 — Rab, Pag, Uzunada (Dugi Otok), Hvar, Korčula, Vis, Mljet,
Zadar, Şibenik, Knin, Vrana, Nadin · Galiçya 2 — Lvov, Yazlofça (Büyükelçiler 1923) · Kvarner/Küstenland 2 — Krk, Cres
(Rapallo). Hepsi `avusturya` künyesinin (1918-11-11) ötesinde, de jure devir antlaşmasına dek.

**2i'nin yeni 22 kırılma gününün kapanışları — 10'u YAKIN AMA ALAKASIZ:** 1918-11-14 (Peçuy Sırp işgali) → "Brest-Litovsk
iptali" · 1918-11-22 (Lvov) → "Karadağ Sırbistan'la birleşti" · 1918-12-19 (Knin İtalyan işgali) → "Çekoslovakya Alman
Bohemyası" · 1919-04-19/20 (Szatmár, Varad) → "Kars'ın İngiliz işgali" · 1919-08-03 (Temeşvar) ve 1919-08-12 (Prekmurje)
→ "Ravalpindi Antlaşması" · 1921-04-04 (Knin) → "İkinci İnönü" · 1921-06-12 (Şibenik) → "Antalya'nın boşaltılması" ·
1921-08-22 (Baranya) → "Irak Krallığı". ⇒ **2i'de yer şartı yok; kapı ötmüyor ama 10 madde borcu doğuyor** (2sk'nın 2i karşılığı).

**2sk +52 — teşhis (ÖLÇMEDİM, gerekçeli):** F8 taçta kırılmayı ikiye böler (1918-11-11 tac→naiplik + antlaşma
naiplik→halef) ve antlaşma maddeleri (Saint-Germain, Trianon, Rapallo, Büyükelçiler) YER ANMIYOR, yalnız taraf
("Macaristan", "Avusturya") ⇒ yeni kapanışlar taraf kovasına düşer. Çare `D261`: dört antlaşma maddesine yer adları.

## 4. İSTENEN
1. 4c: 16 dönemin beyanlı borç listesi (sende) — liste yukarıda.
2. 2sk +52: tavan mı, dört antlaşma maddesine yer adı mı (D261)? İstersen yer adı eklemenin etkisini ölçerim.
3. 2i madde borcu 10 (yukarıda adıyla) — 2i kapısı ötmüyor ama kapanışlar sahte.
4. Kalan borçlar: Bosna 20 (`drzava-shs`) · Eisenstadt (Burgenland 1921) · `isg:` borcunun 10'u (ay/yıl düzeyi, künyesiz
   ZUNR, Temeşvar basın kaynağı) · Država SHS künyesi (6 kırpılmış `isg:` geri uzar).
