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

## 5. HÜKÜM M-5822'NİN İKİ ÖLÇÜMÜ (bellekte, veriye yazılmadı · HEAD `7f46333e`)
Betikler (scratchpad): `f8c_olc.py` · `f8c_ad.py` · `f8c_birim.py` · `f8c_gdansk.py` · `f8c_gdansk2.py` · `antlasma_ad.py`.
⚠️ Bu ikisi için ayrıca öngörü commit'lemedim — sorular ölçüm sırasında daraldı (aşağıda ③ yeni bir bulgu); kusur bende.

### ② YALNIZ TAÇ YARISI (35 kayıt: 34 taç + Peçuy `isg:`)
| | 2s AÇIK | 2sk YER / YALNIZ TARAF | 2i | 4c | 4d · D7 |
|---|---|---|---|---|---|
| BUGÜN | 189 | 1560 / 1602 | 144/1 | 127 | 324 · 727 |
| **TAÇ yarısı** | **188** (−1) | 1561 / **1635** (+33) | 154/1 | **127 ✓** | aynı |
| CİS yarısı | 190 | 1560 / 1621 | 157/1 | 143 | aynı |
| ikisi (F8-1005) | 189 | 1561 / 1654 | 166/1 | 143 | aynı |
⇒ **4c'nin +16'sının TAMAMI Cisleithania/Dalmaçya yarısından.** Taç yarısı 4c'de temiz, 2s'yi bir İYİLEŞTİRİYOR — ama 2sk'yi +33 artırıyor.

### ① YER ADI EKLEMENİN ETKİSİ — antlaşma metinleri yer ANMIYOR
Dört metin birincil kaynaktan okundu (FOROST, Ungarisches Institut Regensburg: `19190910-1` Saint-Germain 137 s. ·
`19200604-1` Trianon 149 s. · `19201112-1` Rapallo · `19230315-1` Büyükelçiler). 69 noktanın atlas adı + parantez adı
+ dönem adları (Pressburg, Agram, Kolozsvár, Lemberg…) arandı: **60'ı metinde YOK**. Geçen 9'un sınıfı:
- **Açık devir cümlesi (eklenebilir) — 2:** Zadar (Rapallo md. 2 *"Zara … shall be recognised as forming part of the
  Kingdom of Italy"*) · Cres (md. 3 *"the islands of Cherso and Lussin … shall also be recognised as forming part"*).
- **Sınır referansı — örtülü, `D208` ölçütüyle EKLENMEZ — 2:** Murska Sobota (Trianon md. 27: *"point 295 about 16 km
  north-east of Muraszombat"*) · Maribor (Saint-Germain md. 27: *"administrative boundary between the districts of
  Marburg and Lebnitz"*).
- **Yalnız demiryolu/yol adı — RED — 5:** Bratislava (*"Bratislava (Pressburg)-Nagy-Kanizsa line"* · md. 51 askerî
  tahkimat) · Kassa (*"Kassa-Csap railway"*) · Zagreb (*"Zágráb-Gyékényes line"*) · České Budějovice, Třeboň
  (*"Gmünd-Budweis and Gmünd-Wittingau railways"*).
**Etki:** SIKI (yalnız Zadar+Cres) → 2sk **1654 → 1654 (0)** — ikisi de Rapallo kovasında, kova 12 eksikle AÇIK, birim
sayılmıyor. GENİŞ (+Murska Sobota, Maribor) → **1652 (−2)**, ama o ikisi örtülü ⇒ yazılmamalı.
⇒ **`D261` çaresi bu kalemde ÇALIŞMIYOR:** Trianon/Saint-Germain devredilen şehirleri saymıyor, yalnız SINIR HATTINDAKİ
köyleri sayıyor. Madde metnine şehir adı yazmak, antlaşmanın söylemediğini söyletmek olur (yasak).

### ③ 🔴 YENİ BULGU — "+52"nin çoğu ÇOĞALMA DEĞİL, GÖRÜNÜR OLMA (Gdańsk maskesi)
`degismez2` kırılmaları GÜNE göre tek kovada toplar; kovada TEK bir yer açıklanmazsa kova AÇIK olur ve içindeki HİÇBİR
birim kapalı sayılmaz (`denetle.py:1635-1644`). Bugün:
```
1918-11-11 kovası: 123 yerleşim · AÇIK · eksik 1 ['Gdansk']   ⇒ 122 birim 2sk'da HİÇ SAYILMIYOR
```
F8 bunlardan 54'ünü kapalı antlaşma kovalarına taşıyor (1919-09-10: 20 · 1920-06-04: 32 · 1923-03-15: 2) ⇒ ilk kez
sayılıyorlar: 52 taraf + 2 yer. **Yer kolundan taraf koluna kayan birim bu 52'nin içinde değil.**
**Kontrollü deney — Gdańsk İKİ dünyadan da çıkarıldı (1918-11-11 kovası kapanır):**
| (Gdańsk hariç) | 2sk YER | YALNIZ TARAF | 4c |
|---|---|---|---|
| BUGÜN | 1581 | 1697 | 127 |
| TAÇ, bölmesiz (tac→antlaşma doğrudan; yalnız ayrıştırma) | 1574 (−7) | 1703 (+6) | 160 |
| **TAÇ, bölmeli (önerilen)** | 1582 (+1) | **1730 (+33)** | **127** |
| HEPSİ bölmesiz | 1571 (−10) | 1671 | 196 |
| HEPSİ (F8-1005) | 1580 (−1) | 1717 (+20) | 143 |
**Okuma (taç yarısı):** ① günü 1918-11-11'den antlaşmaya taşımak **~7 birimi yer→taraf** kaydırıyor (GERÇEK `D261` bedeli:
1918 maddeleri yeri anıyordu, antlaşma maddeleri anmıyor) · ② naiplik bölmesi her taç noktasına 1918-11-11'de **yeni bir
birim** (macaristan-habsburg → macaristan-naiplik) ekliyor; bunların ~27'si taraf, ~8'i yer kolundan kapanıyor. Bu bir
ÜLKE DÜZEYİ rejim değişimi (Habsburg krallığı → Macar devleti, iki kimlik de `harita: macaristan`) — adı anılacak bir yer yok.
🔴 **Kapıya dair:** bugünkü 2sk tavanı (1602) Gdańsk'ın açık tuttuğu bir kovanın ARKASINDA duruyor. Gdańsk tek başına
düzelse 2sk **1602 → 1697 (+95)** olur ve tavan aşılır — hiçbir veri kötüleşmeden. Sensör doymuş değil, MASKELİ (`D262`
ailesi). Bu yamanın +52'si bu maskenin kısmen kalkmasıdır.

## 6. İSTENEN (güncellendi)
1. **Bölme:** TAÇ yarısı 4c'de temiz (127), 2s'yi 1 iyileştiriyor, 2i ötmüyor; 2sk +33 (kontrollü +33: ~7 gerçek yer→taraf
   + ~27 rejim değişimi birimi). İstersen taç yarısının diff'ini ayrı üretirim (`ONCE1281-AVUSTURYA-TAC-1005.diff`).
2. Yer adı çaresi: yalnız Zadar+Cres eklenebilir, etkisi 0 (Rapallo kovası açık). Önerim: EKLEME — sayıyı değiştirmiyor.
3. **2sk tavanının Gdańsk maskesi** (sende — `denetle.py`): açık kovanın birimleri hiç sayılmıyor; tavan bu maskeye bağlı.
4. Aynı-boya rejim değişimi (`macaristan-habsburg` → `macaristan-naiplik`) 2s'de kırılma sayılıyor mu sayılmamalı mı —
   tasarım sorusu, sende.
