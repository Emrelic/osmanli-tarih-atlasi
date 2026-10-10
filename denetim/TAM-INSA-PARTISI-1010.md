# TAM-INSA-PARTISI-1010 — tam inşa partisinin FAZ 1 inmiş ağaçta sınanması

İşçi: TAM-INSA-PARTISI-1010 (UMIT, ajan) · 10 Ekim 2026 · `uret_petek.py` KOŞTURULMADI ve
İTHAL EDİLMEDİ · main'e/origin'e/C:\atlas'a YAZILMADI · commit/push/stash YOK.
Tuz dosyalarına dokunan diff'ler YALNIZ `C:\atlas-parti`de, koordinatör izniyle (dört şart, §5.0) uygulandı.

## ⓪ ÖZET — 16:00 için üç kırmızı
1. 🔴 **"Motor yaması ⓐ" (sahnede olmayan sahipsiz petek devri) BULUNAMADI** — hiçbir dalda,
   hiçbir `denetim/*.diff`te yok. Onsuz Sümer noktaları inerse 1281-1923 boyunca **12 boş petek
   ~53.400 km²** (ANA) / **21 boş ~61.900 km²** (ANA+B10). Simülasyon ayrıca gösterdi: yama
   **GEÇİŞLİ (zincirleme) olmak ZORUNDA** — tek adımlı devir ANA+B10'da 5 petek (~3.700 km²) boş
   bırakıyor (§4). ⇒ ya yama 16:00'ya kadar yazılır+sınanır, ya ANA/B10 partiden ÇIKAR
   (KÜNYE inert, kalabilir).
2. 🔴 **TUZ-v3 sınavı CLAUDE.md §9.1'i de okuyor** ve partili ağaçta **33/34** — tek düşen soru
   `c2`: §9.1 hâlâ "dört dosya" diyor. §9.1 "ALTI" düzeltmesi **aynı commit'te** inmeli (§3.4 ②).
3. 🟡 **`denetle.py` FAZ 1 + parti ağacında çıkış 2** — iki sebep: D8 (donemler.js yok — koşudan
   sonra kalkar) ve **"sahiplik atlama: listesiz 197 ÖLÇÜLEMEDİ"** (FAZ 1'in SAHIPLIK-KAPSAM
   kapısından; parti DEĞİŞTİRMİYOR — NEG-B'siz ağaçta da aynı). Koşu sonrası ağaçta 197 kalırsa
   kontrol listesindeki her `denetle` adımı **2** verir; otomasyon 0 beklememeli.
4. 🔴 **Sessiz yanlış, diff'i YOK (§8.1):** `suzgec.js` üç işlevi MÖ dönemde 3/3 "" döndürüyor,
   `gunKaydir` MÖ'de bozuk; `_sahiplik_uygula.maddesi_var` MÖ'de VE 1000-1280'de "madde var" diyor.
   Bugünkü ANA/KÜNYE ile görünmez (negatif dönem yok); künye bağlama ⓓ'den ÖNCE kapanmalı.

## 0. TABAN ve ÖLÇÜM AĞAÇLARI
```
C:\atlas-parti        origin/main 534633f8 + FAZ 1 (F1-F5) + parti (P1,P2,P4,P5,P6)  ← ana ölçüm ağacı
C:\atlas-parti-neg0   origin/main 37770b31 + F1-F5 + ANA + KÜNYE, NEG-B/TUZ YOK       ← ters yön ağacı
                      (37770b31 = 534633f8 + yalnız CLAUDE.md · oturumlar/PAKET-1010-KITA.md;
                       kod/veri farkı 0 — `git diff --stat` ile ölçüldü; fetch'i başka ajan yaptı)
yerel C:\atlas main   82 commit GERİDE — ölçüm orada YAPILMADI
data/devletler_harita.js  parti ağacında `kodla.py coz-c` ile çözüldü (51 sn): 181.080.905 B ·
                      sha256 82cc12240c46abf9… · taban 534633f8 (neg0'a kopyalandı)
                      donemler.js YOK ⇒ Değişmez 8 iki ağaçta da ÖLÇÜLEMEDİ
core.autocrlf = true  ⇒ dosya özetleri CRLF çalışma kopyasınındır (§5.3)
```
Her iki worktree ölçüm sonunda KALDIRILDI (şart ③).

### 0.1 Diff envanteri (sha256[:16])
| kol | diff | nerede | sha256 | durum |
|---|---|---|---|---|
| F1 | SAHIPLIK-KAPSAM-1010-v3.diff | C:\atlas-umit\denetim | 9e6f87c9234c39ae | uygulandı |
| F2 | SAHIPLIK-KUR-KAPI-1010.diff | C:\atlas-umit\denetim | e3e8edf11060033a | uygulandı (F1'e BAĞIMLI) |
| F3 | D5-GUN-1010-v3.diff | C:\atlas-umit\denetim | 7138105ac357d74b | uygulandı |
| F4 | YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff | C:\atlas-umit\denetim | 227fe5e47337454d | uygulandı |
| F5 | **KASA-GORUNURLUK-SAYAC-1010.diff** | origin/makine/kasa `a169e505` | e5fdb478e024e7f4 | BULUNDU · uygulandı |
| F6 | KASA-DIKIS-KAPI-1010.diff | origin/makine/kasa `a169e505` | fbe45e38c7139a54 | BEKLE — yalnız --check: RED |
| P1 | NOKTA-SUMER-1010.diff (v2, ANA 12) | origin/makine/emrelic-nokta `7100bd5f` | a33e8c379ef7e5e2 | uygulandı |
| B10 | NOKTA-SUMER-1010-B10.diff (9) | origin/makine/emrelic-nokta `7100bd5f` | 16021ca5060d30dc | check ✓, uygulanmadı (§2) |
| P2 | KUNYE-SUMER-7-1010-v2.diff | origin/makine/emrelic-kunye-2 `cd5828f8` | 75daf24f039b4cf4 | uygulandı |
| P3 | NEGATIF-YIL-1010-A.diff | main `denetim/` | 183baca293961c8d | 🔴 **ZATEN İNMİŞ** (`5c45d2c0`) — partide DEĞİL |
| P4 | NEGATIF-YIL-1010-B-v2.diff | main + atlas-umit (aynı sha) | d298c46f7813144f | 3188 hunk + sınav HARİÇ uygulandı |
| P5 | TUZ-DORT-DOSYA-1010-v3.diff | C:\atlas-umit\denetim | eba1b787bb9b7114 | sınav HARİÇ uygulandı |
| P6 | TUZ-YUKSEKLIK-1010.diff (seçenek c) | C:\atlas-umit\denetim (`e56a9f2e`) | d5f738893b5814f0 | ONAYLI · uygulandı |
| P7 | BOYA-PARTISI-1010.diff | C:\atlas-umit\denetim | — | **BEKLİYOR** (dosya henüz YOK) |
| — | girdi.py:108 tekillik | — | — | **DÜŞTÜ** (koordinatör: girdi.py:620-626'da var) |
| — | motor yaması ⓐ (sahne-dışı devir) | — | — | 🔴 **BULUNAMADI** |
| — | NOKTA-SUMER-1010-K2(-B).diff | origin/makine/emrelic-nokta-k2 `4d879a32` | 347e4cf0… / f72dfe09… | partide değil; K2'nin SİM'i kullanıldı |

⚠️ **NEG-A ile ilgili şartname sapması:** görevde "NEG-A = js/suzgec.js" yazıyordu. Ölçüldü: A
`suzgec.js`e **DOKUNMUYOR** (dosyaları: app.js · index.html · odak_cozum.js · iki sınav) ve
zaten inmiş. `suzgec.js`in negatif-yıl kalemi (sahiplik dizgi kıyası, 7 site + app.js 5 site —
`5c45d2c0` mesajı) **AÇIK ve diff'i YOK**; KAMPANYA FAZ 3 ⓑ onu "ayrı kalem, AYNI parti" diyor.
Tuz dışıdır ⇒ partiyi bloke etmez ama MÖ ekranı için şart.

## 1. SIRA ve ÇAKIŞMALAR (`git apply --check`, kümülatif, her adımda önce check)
```
adım  diff                              sonuç
F1    SAHIPLIK-KAPSAM-v3                ✓ uygulandı
F2    SAHIPLIK-KUR-KAPI                 ✓ uygulandı  (main'de tek başına RED: _sahiplik_uygula.py:34
                                                     + KAPSAM sınavı yok ⇒ F1'e BAĞIMLI)
F3    D5-GUN-v3                         ✓ uygulandı
F4    YER-YAMA-SESSIZ-7-KOORD-v2        ✓ uygulandı
F5    KASA-GORUNURLUK-SAYAC             ✓ uygulandı
F6    KASA-DIKIS-KAPI                   ✗ RED arac/denetle.py:7229 — main'de TEK BAŞINA TEMİZ, F1-F5
                                          üstünde RED (görevdeki "kümülatif düştü" teyit). UYGULANMADI.
P1    ANA (12)                          ✓ uygulandı
P2    KÜNYE-v2                          ✓ uygulandı
B10   (9)                               ✓ check (F+P1 ve F+P1+P2 üstünde) — uygulanmadı
P4    NEG-B (−3188, −sınav)             ✓ uygulandı (tam diff: ✗ denetle.py:3188 — beklenen D5 çakışması)
P5    TUZ-v3 (−sınav)                   ✓ uygulandı
P6    TUZ-YUKSEKLIK                     ✓ uygulandı
P7    BOYA                              bekliyor — P4-P6 renkler.py'ye DOKUNMUYOR ⇒ çakışma beklenmez
```
- **P4/P5/P6 kendi aralarında sıra-serbest:** üçü de F1-F5 ağacında TEK BAŞINA temiz check
  verdi ve P4→P5→P6 sırasıyla uygulandı. Ortak dosya: P4 ↔ P5 `girdi.py` (farklı bölgeler) ·
  P4 ↔ P6 `uret_petek.py` (P4 :269/:2905, P6 :561/:726/:5891…). 
- **Tek mantıksal bağ:** P5'in listesi `yukseklik.py` ve `gun.py`yi TUZA SOKAR; P4 `gun.py`yi,
  P6 `yukseklik.py`yi DEĞİŞTİRİR ⇒ üçü AYNI tuz değişiminde inmeli (zaten parti).
- Veri diff'leri (P1, P2, B10) tuz dosyasına dokunmaz; sıraları koddan bağımsız.

### 1.1 NEG-B 3188 hunk'ını düşürmek
`git apply --exclude` DOSYA düzeyindedir; denetle.py'nin öteki 11 hunk'ı gerekli olduğu için
hunk ayıklandı — `denetim/ARAC-TAM-INSA-PARTISI-1010-HUNK.py` (`diff --git` başlığıyla dosya,
`@@ -<eski>` ile hunk seçer):
```
py denetim/ARAC-TAM-INSA-PARTISI-1010-HUNK.py denetim/NEGATIF-YIL-1010-B-v2.diff \
   <cikti>/NEGB-eksi3188.diff arac/denetle.py:3188
   → düşen hunk: 1 · çıktı sha256 5dfa067ab334eeaf · 32.930 B
git apply --check --exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py <cikti>/NEGB-eksi3188.diff   ✓
```
- Düşen hunk `degismez5` 5b/5c'de `VERI_UFKU[0][:4]` dizgi kesmesini `_gun` ile değiştiriyordu;
  F3 aynı bölgeyi zaten sayısal yapıyor (`esik_5b = _gun_d5.gun_sayisi(ufuk_yil+SUPHE_ESIK_YIL,1,1)`,
  denetle.py:3230) ⇒ işi F3'te var.
- **Kalan 20 hunk kırılmadı** (denetle 11 · girdi 5 · gun 1 · motor_esitlik 1 · uret_petek 2):
  hepsi F1-F5 üstüne offset'le temiz uygulandı; davranış §3'te ölçüldü.
- ℹ️ main'de `D5-GUN-1010-NEG-SONRA.diff` de var (adı: NEG-B sonrası D5 varyantı). Partide F3 = v3
  kullanıldı; hangisinin esas olduğunu koordinatör teyit etmeli.

### 1.2 Dışlanan sınavlar — İKİ YÖNDE koşturuldu (koordinatör şartı)
| sınav (main sürümü) | yamalı (C:\atlas-parti) | yamasız (C:\atlas-parti-neg0) |
|---|---|---|
| ARAC-NEGATIF-YIL-B-SINAV-1010.py (15.486 B, sha faea8c1f11790a34) | çıkış 1 · **65/67** | çıkış 1 · `ImportError: cannot import name 'Tarih' from 'gun'` (satır 80) |
| ARAC-TUZ-DORT-DOSYA-SINAV-1010.py (diff'tekiyle BİREBİR aynı) | çıkış 1 · **33/34** (yalnız `c2`) | çıkış 1 · 8 ✗ (b2-b6, c1-c3: liste üç dosya) |
- NEG-B yamalıda düşen iki soru: `sorted(Tarih) == sorted(düz dizgi)` (3.482 tarih) ve
  "200.000 rastgele çift … — 2 fark". İkisi de **"bugünkü veride negatif yok"** varsayımı: KÜNYE'nin
  `-0538` … ve ANA'nın `kur:/bit:`'i girince dizgi sırası ≠ Tarih sırası — bu DOĞRU davranış, sınavın
  varsayımı bayat. (NEGATIF-YIL-OLCUM-1010 aynı 65/67'yi Sümer noktalarıyla ölçmüştü.) ⇒ sınav
  ısırıyor (yamasızda kalır) ama yamalıda da 0 VERMİYOR: iki sorunun veri-bağımsız yazılması gerek.
- ⚠️ main'deki NEG-B sınavında stdout utf-8 koruması YOK (v2'de var) ⇒ boru/yönlendirmede cp1254
  çökmesi riski; ölçümler `PYTHONIOENCODING=utf-8` ile.
- TUZ sınavı tek düşen `c2`: "⑤ CLAUDE.md §9.1 → [girdi, motor_onbellek, renkler, uret_petek]"
  ⇒ fark `gun.py`, `yukseklik.py`. **§9.1 metni partiyle AYNI commit'te "ALTI" olmalı.**

## 2. B10 KARARI — mükerrer 0 ⇒ B10 DÜŞMEZ (ama §4'e bağlı)
Yöntem: `denetim/ARAC-NORMAL-0903.norm` (tam ad + parantez-dışı çekirdek) + haversine ≤ 3 km.
Evren: parti ağacının `girdi.yukle()` = **4312** nokta (ANA 12/12 içinde).
```
B10 ↔ ANA (12)          ≤3 km: 0 · ad: 0
   en yakın: Ur↔Tell al-Ubaid 7,2 · Şuruppak↔Kisurra 7,3 · Umma↔Zabalam 8,4 · Lagaş↔Nina 9,4 km
B10 ↔ evren (4312)      ≤3 km: 0 · ad: 1 — "Kiş (Tell Uhaimir)" ↔ "Kiş (Kish)" = KAYS ADASI 1.127,2 km
                        ⇒ ayrı nesne (K2 bulgusu teyit), mükerrer DEĞİL
ANA ↔ evren (ANA hariç) ≤3 km: 0 · ad: 0 (en yakın Marad↔Dîvâniye 16,7 km)
```
- "DOLGU §9.1 / SUMER-KUNYE'nin 10 noktası" riski: `KASA-SUMER-DOLGU-1010 §1.4` yalnız
  `BEKLENEN_SAHIPSIZ` sayacına üç önerinin dokunabileceğini söylüyor. Bu noktaları yazan İKİNCİ
  diff ARANDI: KÜNYE-v2 yalnız `devletler.js` (nokta 0); `origin/kasa-sumer-kunye-1010` ·
  `origin/makine/kasa` · `origin/makine/emrelic-kunye-2` `data/`sında Uruk/Nippur/Larsa/Eridu/
  Lagaş/Kiş(Tell) **0**. İkinci yazar **bulunamadı**.
- **HÜKÜM: B10 mükerrerlikten DÜŞMEZ.** Ama B10 deliği 12→21 petek büyütür ve tek adımlı yamada
  boş kalan 5 peteğin **4'ü B10'dandır** (Ur · Umma · Larsa + Bad-tibira/Ubaid komşuluğu) ⇒ B10'un
  kaderi yamanın geçişli olmasına bağlı.

## 3. NEGATİF YIL — `denetle.py`, iki yön
| ağaç | çıkış | satır | sonuç |
|---|---|---|---|
| parti (FAZ1+P1,P2,P4-P6), gerçek veri | **2** | 368 | bütün değişmezler koştu; 2 = D8 + sahiplik-atlama ölçülemedi |
| neg0 (FAZ1+P1,P2, NEG yok), gerçek veri | **2** | 368 | parti ile **satır satır aynı** (yalnız süre "10 sn/20 sn") |
| neg0 + SENTETİK (Sippar'a 2 negatif `s:` dilimi) | **1** | 28 | 🔴 ÇÖKTÜ: `degismez1b` → `gun_no` (denetle.py:1502→1230) `ValueError: year -53 is out of range` |
| parti + SENTETİK (aynı iki dilim) | **1** | 379 | ÇÖKMEDİ, sona kadar koştu; 1b ✗ **"Sippar -0330-10-22 → -0311-01-01 (6646 gün sahipsiz)"** — boşluk DOĞRU yakalandı; 5c 2449→2450 (+Sippar) |
Sentetik: `denetim/ARAC-TAM-INSA-PARTISI-1010-SENTETIK.py` (NEGATIF-YIL-OLCUM s3 deseni: ahameni
`-0538-01-01→-0330-10-22` · selefki `-0311-01-01→-0140-07-03`, arada bilerek boşluk); ölçümden sonra
geri alındı (dosya = yalnız ANA, diff ile doğrulandı).
⚠️ **Çökme çıkış 1 veriyor, 2 değil** — otomasyon bir traceback'i "İHLAL VAR"dan ayıramaz.
📌 Gerçek veride (negatif `s:` dönemi YOK) iki ağaç aynı: bugünkü veride NEG-B'nin denetle'ye
etkisi **0** — koruması yalnız negatif dönem girince görünür (sentetik bu yüzden şart).

### 3.1 Partili ağaçta her değişmez (gerçek veri, çıkış 2)
```
D1   ✓ 4312 yerleşim, 309 sahipsiz (beklenen 309)       D1c ✓ BELGESİZ 3 (tavan 4) · belgeli 306
D1b  ✓ BEYANSIZ boşluk 0 · beyanlı 8/8 — tam tarama      D2  ✓ 628 kırılma, 0 açık
D2s  ✓ 1807 · 193 AÇIK (tavan 193) · 792 KD · 231 YT     D2sk 🧊 4237 kapalı · yalnız-taraf 2265 (tavan 2265)
D2i  ✓ 171 · 1 açık (tavan 1)                            D2t ✓ kırılmasız 13 (tavan 13)
D3z  · m: 505 | kd: 65 | kd yazılı 418                   D4  ✓ 0 hayalet
D4c  ✓ 118 (beklenen 118)   D4d ✓ 325 (325)   D4s ✓ 2 (2)
D5   ✓ 0 çelişki · gun.py · tolerans 400 gün             D5a-muaf ✓ 2 (tavan 2)
D5t  i 4 kalem yutuldu    D5b i 149    D5c i 2449 (tavan 2449, defter)
D7   🧊 800 sorgusuz enklav (beklenen 731)               ⚠️ 731 → 800: bu ağaçta da ihlal SAYILMIYOR
EK   dönem sağlığı ✓ 0/0/0 · kaynaksız s: ✓ 1841 (tavan 1930 — GEVŞEK) · kayıt-kaynaksız 2301 (2301)
     GÖRÜNÜRLÜK (F5) ✓ tam pencere 110/110 · tek dilim 112/112 · künye iç boşluk 27/27 · bulunamadı 7/7
     mükerrer madde ✓ 95 (≤95) · ölü istisna ✓ 0/52 · savaş senkronu i 165/174 · zincir_kaynagi i 0
D8   ! ÖLÇÜLEMEDİ — donemler.js YOK
DR   ✓ 0 rötuş · hüküm listesi ✓ 5 satır, 0 ölü
EK   ! sahiplik atlama: listeli 3 · listesiz 197 ÖLÇÜLEMEDİ · yıkıcı 0 · taban-ölçülemedi 188 (tavan 190 — GEVŞEK, 188 önerilir)
EK   ✓ konum 0 nokta kara dışında
ÖLÇÜLEMEYEN 198 = D8 1 + veride-yok 60 + cakisma 67 + kapsam-daraldi 53 + gun-maddesiz 15 + kur-oncesi 2
```
**D1b SONRASI denetimler GERÇEKTEN koşuyor:** gerçek veride iki ağaçta da (368 satır, D8'e kadar
her satır), sentetik negatif dönemde yalnız NEG-B'li ağaçta (379 satır).

## 4. DELİK ÖLÇÜMÜ — K2 simülasyonu TEKRARLANDI (motor koşturulmadı)
Betik: `denetim/ARAC-TAM-INSA-PARTISI-1010-DELIK.py` — K2'nin `NOKTA-SUMER-1010-K2-DELIK-SIM.py`
(dal `4d879a32`) yöntemi birebir (düz Voronoi · `veri-kaynak/motor_kara.geojson` · 26-38K 38-54D ·
`_kusatilmis` ölçütü ≥0,90), evren parti ağacının `girdi.yukle()`'si (157 bölge noktası). Eklenen iki
senaryo **VARSAYIMSAL** — yama diff'i bulunamadığı için motor davranışı değil, yamanın tasarım şartı:
- A = bugünkü kural · B = yama TEK ADIM (sahne-dışı sahipsiz, `bos:`suz petek sahipli+sahnede bir
  komşuya dokunuyorsa devredilir) · C = yama GEÇİŞLİ (devredilen petek bir sonraki turda sahipli sayılır)
```
ANA (12)          A BOŞ               B tek adım   C geçişli
1000-06-15        12 · ~53.392 km²    12           12   ← bölgede sahipli nokta 0/157 (aşağı bak)
1300-06-15        12 · ~53.392 km²    0            0 (1 tur)
1600-06-15        12 · ~53.392 km²    0            0
1900-06-15        11 · ~34.204 km²    0            0    (Ubaid 1900'de kuşatılmış ⇒ devir)

ANA + B10 (21)
1000-06-15        21 · ~61.869 km²    21           21
1300 / 1600       21 · ~61.869 km²    5 · ~3.677   0 (2 tur)
                  B'de boş: Bad-tibira 839 · Tell al-Ubaid 686 · Ur 524 · Umma 732 · Larsa 896 km²
1900-06-15        21 · ~61.869 km²    2 · ~1.628   0 (2 tur)   (Umma · Larsa)
```
- **K2'nin "22/22 ~62.400 km²"si TEKRARLANDI:** 21 noktayla 21/21 ~61.869 km² (K2'nin 22'sinde
  v2'nin çıkardığı Tutub vardı). En büyük delik ANA'da Tell al-Ubaid ~19.200 km² (çöl kenarı).
- 🔴 **Hâlâ boş kalan (yama YOK, ki bugün durum bu):** ANA'nın 12'si — Tell al-Ubaid 19.188 ·
  Eşnunna 9.216 · Kutha 4.754 · Nina 4.247 · Zabalam 2.381 · Isin 2.348 · Kisurra 2.195 · Sippar 2.154
  · Marad 2.022 · Bad-tibira 1.905 · Girsu 1.774 · Dilbat 1.208 km² (1300/1600 kesitleri).
- 🔴 **Yama şartı:** devir GEÇİŞLİ olmalı. Tek adım ANA'da yetiyor ama ANA+B10'da 5 petek boş kalıyor.
  Kabul sınavı (KAMPANYA FAZ 3 ⓐ): "yama inince 22/22 DOLU" — tek adım bu sınavı GEÇMEZ.
- 🟡 **1000-1280 penceresi yamayla da düzelmez:** bu simülasyonun sahiplik ölçütüyle bölgede sahipli
  nokta 1000-06-15'te **0/157**, 1200'de 2, 1280'de 11, 1281'de 121 — yani Sümer petekleri 1000-1280'de
  devredilecek komşu bulamaz; bu, UFUK 1000'e açıldığından beri bölgenin kendi boşluğudur (Sümer'e
  özgü değil; motorun ufuk bantlarının bunu nasıl çizdiği bu simülasyonda ÖLÇÜLMEDİ).
- Motorla fark (K2 beyanı aynen): yaslama yok, km² kaba. Yön ve sınıf kesin, rakam yaklaşık.

## 5. TUZ
### 5.0 Önbellek izolasyonu — uygulamadan ÖNCE ölçüldü (koordinatör şartı ①)
```
MOTOR_ONBELLEK_DIZIN   proses: YOK · User: YOK · Machine: YOK   (MOTOR_* ortam değişkeni: hiç yok)
MOTOR_ONBELLEK_KAPALI  YOK
varsayılan yol         C:\atlas-parti\arac\..\_motor_onbellek\motor_onbellek.sqlite
                       = C:\atlas-parti\_motor_onbellek   — ölçüm öncesi VAR MI: False
C:\  · C:\atlas-parti · C:\atlas-parti\arac   LinkType=[] Target=[]  (junction/sembolik bağ YOK)
C: sürücüsü            DriveType 3 = yerel sabit disk · DisplayRoot boş (ağ yolu değil)
OneDrive               C:\Users\user\OneDrive — C:\atlas-parti onun ALTINDA DEĞİL
```
- **Tuz işlevleri önbelleğe YAZIYOR MU:** `motor_onbellek.Onbellek.__init__` `os.makedirs` +
  `CREATE TABLE` yapar ⇒ `uret_petek.py`yi (modül düzeyinde `_ONB = _mob.Onbellek(...)`) ve
  `dolgu.py`yi (aynı desen) **İTHAL ETMEK YAZAR**. Bu yüzden ikisi de ithal EDİLMEDİ: betik
  (`ARAC-TAM-INSA-PARTISI-1010-TUZ.py`) `uret_petek.py`nin AST'inden YALNIZ dört atamayı
  (`_MOTOR_IZI` · `_ONB_ISLETIM` · `_ONB_TUZ` · `_ONB_GEO_TUZ`) çıkarıp `json/os/girdi/
  motor_onbellek` ad alanında değerlendirir. `motor_onbellek` ve `girdi` modül düzeyinde yan etkisiz
  (yalnız import/sabit/def/class — ölçüldü). **Kanıt:** `_motor_onbellek` her koşudan önce ve sonra
  **YOK** (betik basıyor: "once/sonra var mi: False False"); TUZ sınavı sonrası da yok.

### 5.1 Kaç dosya, hangi hash
| | bugünkü main (534633f8) | parti (P4+P5+P6, BOYA HARİÇ) |
|---|---|---|
| `girdi.motor_izi()` | **3** dosya | **6** dosya |
| `_ONB_TUZ` | 3 + onbellek_modulu = **4** | 6 + onbellek_modulu = 7 alan, **6 benzersiz** dosya (motor_onbellek iki kez — v3 beyanlı fazlalık) |
| `_ONB_GEO_TUZ` | 1 (uret_petek) + onbellek_modulu = **2** | gun · motor_onbellek · uret_petek · yukseklik + onbellek_modulu = **4 benzersiz** |
| tuz hash genel (sha256[:12], `uret_petek`in bastığı) | `fcfc307db9e8` | `63cbec4426c2` |
| tuz hash geo | `3eb9a23f68c9` | `058bdcbab1de` |
```
dosya            main           parti
girdi.py         0670c8ebc3e1   74b95cf1f4f6   ← P4 + P5
gun.py           (tuzda değil)  ea9a77a2b122   ← P4 değiştirir, P5 tuza sokar
motor_onbellek   b9f36f427dc2   b9f36f427dc2   ← değişmedi (P5 motor_izi'ye de sokar)
renkler.py       25be10fa0ea0   25be10fa0ea0   ← BOYA inince DEĞİŞECEK
uret_petek.py    2ce682d34f65   455f48e94e78   ← P4 + P6
yukseklik.py     (tuzda değil)  54c1b4c2917d   ← P6 değiştirir, P5 tuza sokar
```
**Tuza dokunan diff'ler:** P4 NEG-B (girdi · gun · uret_petek) · P5 TUZ-v3 (girdi + liste 3→6) ·
P6 TUZ-YUKSEKLIK (uret_petek · yukseklik — "motor_izi'yi değiştirmiyor" doğru, ama P5'ten sonra
`yukseklik.py` tuzda olduğu için yine tuzu değiştirir) · P7 BOYA (renkler). Tuza DOKUNMAYAN: F1-F5,
P1, P2, B10, NEG-A, motor_esitlik.py (NEG-B'nin bir hunk'ı — tuzda değil).
⚠️ **Koordinatörün "gun.py tuzda değil" cümlesi P5 ile ÇELİŞİR:** bugün main'de gun.py tuzda değil
(doğru) — ama parti P5'i içeriyor ve P5'ten sonra gun.py TUZDADIR. D5-GUN'un FAZ 1'de kalması
yine doğru: D5 `gun.py`ye DOKUNMUYOR (yalnız denetle.py + D5C-DEFTER.json).

### 5.2 Tuz BİR KEZ mi değişir
Evet — P4, P5, P6, P7 aynı commit/aynı koşu öncesi inerse. ⚠️ Yukarıdaki parti hash'i **nihai değil**:
BOYA (renkler.py) inince genel tuz yeniden değişir (geo tuzu renkler'i İÇERMEZ, değişmez).
Nihai hash kontrol listesi adım 9'da ölçülür.

### 5.3 Hash'in sınırları
- `ortam` alanı burada `[]`: gerçek koşu MOTOR_* bayraklarıyla koşar (CLAUDE.md §9 "koşu bayrakları")
  ⇒ HAVVA'nın basacağı 12 hane BU DEĞİL. Karşılaştırılabilir olan **dosya özetleri**dir.
- `core.autocrlf=true`: özetler CRLF çalışma kopyasınındır; HAVVA'nın checkout ayarı farklıysa
  dosya özetleri de farklı çıkar. Kıyas aynı ayarlı ağaçlarda yapılmalı.

## 6. BOYA — eksik listesi (diff YAZILMADI; diff BOYA-PARTISI-1010 kıtasında)
Ölçüm parti ağacında, `girdi.oku_devletler()` + `renkler.BOYALAR` + `girdi.yukle()` (`s:`/`isg:`):
| kimlik | künye | `harita:` | BOYALAR | veride kullanım | not |
|---|---|---|---|---|---|
| misir-sultanligi | VAR 1914-12-18→1922-03-15 | yok | **VAR** (`#4ed224`, renkler.py:3148) | `s:` **57** nokta | 🟡 eksik DEĞİL — görevdeki "51 kayıt" bu ağaçta 57; boya kalemi başka bir şey istiyorsa (renk/anahtar değişimi) tanımı BOYA kıtasından gelmeli |
| teuton-devleti | VAR 1230-01-01→1525-04-08 · `boya_gerekli:true` | yok | **YOK** | 0 | 🔴 eksik — bugün kullanılmıyor; Freistadt dönemi inince delik |
| bavyera | VAR 1506-07-08→1918-11-08 | yok | **YOK** | 0 | 🔴 eksik (boya_gerekli beyanı YOK) |
| nagpur-bhonsle | VAR 1730-01-01→1853-12-11 | yok | **YOK** | 0 | 🔴 eksik (boya_gerekli beyanı YOK) |
- Freistadt bugün: almanya 1281→1526-08-29 · avusturya → 1918 · avusturya-cumhuriyet. Raipur/Ratanpur
  bugün: `__BOSLUK__` · maratha · `__BOSLUK__` 1818→1853 · ingiliz-hindistani. Yani üç kimliği KULLANAN
  veri diff'i bu partide YOK ⇒ boyalar bugün "ölü renk" olarak iner (durum_tablosu'nun 🟡 kovası),
  veri inince canlanır. Sıra şartı: **boya ≤ veri** (aynı commit ya da önce), tersi delik.
- **renk_olc gereksinimi:** renkler.py değişince `py arac/renk_olc.py` ŞART (CLAUDE.md §9); ayrıca
  veri diff'leri (P1, P2) palete yeni kimlik getirmiyor (KÜNYE'nin 7 kimliği hiçbir `s:`te yok).

## 7. ③ TUZ YAMASI kolu
- TUZ-YUKSEKLIK-1010 (c): VAR, onaylı, P6 — check ✓ uygulandı.
- girdi.py:108 tekillik: DÜŞTÜ (koordinatör).
- TUZ-DORT-DOSYA-v3 (P5): parti için ŞART — P6'nın `yukseklik.py` değişikliğinin tuza girmesini o sağlar.

## 8. KONTROL LİSTESİ — KOŞU 22b bitince (her adım ayrı worktree, `origin/main`den)
```
 0  git fetch origin --quiet && git rev-list --count HEAD..origin/main      → 0 (değilse DUR)
 1  FAZ 1 inişi: F1 → F2 → F3 → F4 → F5, her biri önce --check             → 5/5 ✓ (F6 BEKLE)
 2  py arac/denetle.py                                                      → çıkış 2 BEKLENEN
       (D8 ölçülemedi + sahiplik-atlama listesiz 197). §3.1 satırları: D1 309 · D1b 0 · D2 0 açık ·
       D2s 193/193 · D2i 1/1 · D2t 13/13 · D4c 118 · D4d 325 · D5 0 · D5c 2449 · D7 🧊 800.
       Çıkış 1 = DUR. (4300+ANA öncesi yerleşim sayısı 4300.)
 3  Veri: P1 ANA (+ B10 KARARI) → P2 KÜNYE                                  → --check ✓
       🔴 ANA/B10 YALNIZ motor yaması ⓐ (GEÇİŞLİ) partideyse; yoksa ÇIKAR (§4)
 4  py arac/denetle.py                                                      → 2 · D1 309 · yerleşim 4312
       (B10 ile 4321) · öteki satırlar adım 2 ile AYNI
 5  Kod (TUZ, tek commit): P4 NEG-B (hunk.py ile −3188, --exclude sınav) → P5 TUZ-v3 (--exclude sınav)
       → P6 TUZ-YUKSEKLIK → P7 BOYA → [motor yaması ⓐ] + CLAUDE.md §9.1 "ALTI dosya" AYNI commit
 6  Sınavlar:
       py denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py                         → 34/34 (§9.1 düzeltilmeden 33/34)
       PYTHONIOENCODING=utf-8 py denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py   → 65/67 ÖLÇÜLDÜ (2 veri-bağlı ✗,
                                                                              §1.2) — kabul ya da sınav düzeltmesi KARARI gerek
       py denetim/ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py · ARAC-SAHIPLIK-KUR-KAPI-SINAV-1010.py · ARAC-D5-GUN-SINAV-1010.py
                                                                            → (bu işte KOŞTURULMADI — sahipleri ölçtü)
 7  py arac/renk_olc.py                                                     → BOYA sonrası ŞART; çakışma 0
 8  py arac/denetle.py                                                      → 2 (aynı iki sebep) · §3.1 ile AYNI
       sayılar (NEG-B gerçek veride etkisiz — ölçüldü)
 9  Tuz hash (uret_petek ithal ETMEDEN):
       py denetim/ARAC-TAM-INSA-PARTISI-1010-TUZ.py <agac>                 → motor_izi 6 dosya; renkler.py
       özeti 25be10fa… DEĞİL (BOYA); girdi 74b95cf1 · gun ea9a77a2 · uret_petek 455f48e9 (+ yama ⓐ
       inerse o da değişir) · yukseklik 54c1b4c2 · motor_onbellek b9f36f42
       ⇒ main tuzundan (fcfc307db9e8) FARKLI; önbellek TAMAMEN ıskalayacak (beklenen, 7-8 saat)
10  py arac/kaynak_durum.py kapat --kod KOSU (HAVVA)                        → UMIT bekçileri çıkış 3
11  py arac/uret_petek.py (HAVVA, bayraklarla)                              → log: "tüm yerleşimlerin peteği
       geçerli ✓"; başta basılan "tuz …" adım 9 dosya özetleriyle TUTARLI (ortam farkı beyanlı)
12  py arac/uret_devirler.py                                                → çıkış 0
13  py arac/renk_olc.py                                                     → çıkış 0
14  py arac/denetle.py                                                      → D8 artık ÖLÇÜLÜR; 197 kalırsa 2
       🔴 + DELİK KABULÜ: çıktıda Sümer peteklerinin 1281-1923'te boyalı olduğu ÖLÇÜLÜR (K2 SİM'i
          motor çıktısına karşı; "22/22 DOLU" — KAMPANYA FAZ 3 ⓐ). Değişmez 1 bunu GÖRMEZ.
15  py arac/surum_damgala.py → py arac/denetle_yayin.py                     → yayın kapısı 0
       (KAMPANYA FAZ 4 sırası; görevdeki örnek denetle_yayin'i önce koyuyordu — koordinatör seçmeli)
16  py arac/kaynak_durum.py ac
```
**Ek adımlar (§8.1) — adım 4 ve adım 8'den sonra, MÖ verisi uygulanmış ağaçta:**
```
4a  node denetim/ARAC-TAM-INSA-PARTISI-1010-SUZGEC-MO.js <agac>   → bugün 3 işlevde 3×"" ✗ + gunKaydir ✗;
                                                                   K1/K2 inince tabloda hepsi ✓ olmalı
4b  py denetim/ARAC-TAM-INSA-PARTISI-1010-MADDESI.py <agac>       → bugün MÖ ve 1100 için True ✗;
                                                                   K3 inince False olmalı
    (ikisi de SENTETİK/uydurma günle ölçer; gerçek negatif dönem ⓓ ile gelir)
```

## 8.1 🔴 PARTİ İNMEDEN ÖNCE KAPANMALI — sessiz yanlışlar (DIZGI-TARIH-TARAMA-1010 üzerine ölçüm)
Ağaç: C:\atlas-parti (FAZ 1 + ANA + KÜNYE + NEG-B + TUZ). `js/suzgec.js` bu ağaçta main ile
BİREBİR aynı (hiçbir parti diff'i dokunmuyor). Düzeltme YAZILMADI.

**Ⓐ `js/suzgec.js` — node ile, odak_cozum.js'in yolu gibi global eval**
(`denetim/ARAC-TAM-INSA-PARTISI-1010-SUZGEC-MO.js <agac>`). Gerçek ANA noktalarının `s:`'i boş olduğu
için (sonuç tesadüfen "" doğru çıkar) dönemler SENTETİK: ahameni `-0538-01-01→-0330-10-22`, selefki
`-0311-01-01→-0140-07-03` (KÜNYE'nin kimlikleri; künye bağlama ⓓ inince veri tam bu biçimde olacak).
```
gün           beklenen     sahipAnahtari  isgalAnahtari  aktifVAdi
-0400-06-15   ahameni      ""  ✗          ""  ✗          ""  ✗
-0200-01-01   selefki      ""  ✗          ""  ✗          ""  ✗
-0538-01-01   ahameni(f)   ""  ✗          ""  ✗          ""  ✗
-0320-01-01   "" (boşluk)  ""  ✓          ""  ✓          ""  ✓   (tesadüfen doğru)
-0600-01-01   "" (öncesi)  ""  ✓          ""  ✓          ""  ✓
1500-01-01    ""           ""  ✓          ""  ✓          ""  ✓
gunKaydir("-0330-10-18",-1) → "0000-06-09" ✗ (beklenen -0330-10-17) · (+1) → "0000-06-11" ✗
gunKaydir("0000-01-01",-1)  → "00-1-12-31" ✗ · gunKaydir("-0001-12-31",+1) → "0000-01-13" ✗
gunKaydir("1500-03-01",-1)  → "1500-02-28" ✓
```
⇒ **MÖ'de dolu her dönem "" döner** — üç işlevin 3/3'ü, iki tarafı negatif kıyasta TERS (koordinatörün
kuralı teyit: `"-0538" <= "-0400"` yanlış). Tüketiciler: harita süzgeci, kamera, `arac/odak_cozum.js`
(yayın kapısı) ⇒ kapı TEMİZ der, ekran yanlış.

**Ⓑ `arac/_sahiplik_uygula.py` `maddesi_var`** (FAZ 1 ağacında satır **245**, regex **:259**; koordinatörün
:181/:166'sı a51430cc tabanına göre — F1/F2 satırları kaydırdı). Betik ithal EDİLMEDİ (modül düzeyinde
iş yapar); `_sayi` + `maddesi_var` AST'den, kronoloji günleri modülün kendi regex'iyle
(`denetim/ARAC-TAM-INSA-PARTISI-1010-MADDESI.py <agac>`; 1.683 gün, `olaylar*.js`te negatif `t:` 0):
```
maddesi_var('-0538-01-01') = True   ✗  MÖ, maddesiz   → regex ^\d{4} tutmaz ⇒ "ay/yıl hassasiyeti: sorma"
maddesi_var('-0330-10-22') = True   ✗  MÖ, maddesiz
maddesi_var('-9999-01-01') = True   ✗  uydurma
maddesi_var('1100-05-17')  = True   ✗  🆕 1000-1280 maddesiz uydurma gün → `gun <= "1281-01-01"` SINIR muafiyeti
maddesi_var('1500-05-17')  = False  ✓
maddesi_var('1453-05-29')  = True   ✓
```
⇒ MÖ'de VE 🆕 **1000-1280'de** (UFUK 1000'e açıldığı hâlde muafiyet 1281'de kaldı) yazılan her sahiplik
kırılması "maddesi var" sayılır — Değişmez 2'nin `_sahiplik_uygula` ön kapısı susar. KUR-KAPI (F2) bunu
örtmüyor (ölçülen ağaç F2'li). Ayrıca kronoloji regex'i `\d{4}` negatif `t:`'li maddeyi HİÇ OKUMAZ ⇒
MÖ maddesi yazılsa bile `_GS`'ye girmez.

**Kapanacak kalemler (çare koordinatörün):**
| # | kalem | durum | parti için |
|---|---|---|---|
| K1 | suzgec.js `sahipAnahtari`/`isgalAnahtari`/`aktifVAdi` (+ app.js 5 site) negatif-güvenli kıyas | diff YOK | MÖ verisi ekrana çıkmadan ŞART · tuz dışı |
| K2 | suzgec.js `gunKaydir` negatif/0 yılı | diff YOK | aynı |
| K3 | `_sahiplik_uygula.maddesi_var` MÖ + 1000-1280 muafiyeti; kronoloji regex'i negatif `t:` | diff YOK | Sümer `s:` yazımından ÖNCE şart |
| K4 | NEG-B (57 site) | P4, partide | — |
| K5 | motor yaması ⓐ (geçişli) | diff YOK | ANA/B10 için ŞART |
⚠️ K1-K3 bugünkü ANA/KÜNYE ile **görünmez**: ANA'da `s:` boş, KÜNYE inert. Sessiz yanlış ilk negatif
`s:`/`isg:`/`v:` dönemiyle (künye bağlama ⓓ) başlar ⇒ ⓓ'den ÖNCE kapanmalı; ANA+KÜNYE'nin kendisini
bloke etmez.

## 9. ÜÇLÜ KURAL
**① Ölçtüm:** FAZ 1'in 5 diff'i kümülatif temiz (F6 DIKIS RED :7229) · parti P1,P2,P4,P5,P6 kümülatif
temiz; NEG-B 3188 hunk'ı ayıklanınca kalan 20 hunk temiz · NEG-A zaten inmiş · B10 mükerrer 0
(ANA'ya ve 4312'lik evrene, 3 km + norm) · denetle partili ve NEG'siz ağaçta 2 / 2 ve satır satır
aynı; sentetik negatif dönemde NEG'siz ÇÖKER (çıkış 1, year -53), NEG'li 1b'de 6646 günü YAKALAR ·
iki dışlanan sınav iki yönde ısırıyor (NEG-B 65/67 ↔ ImportError; TUZ 33/34 ↔ 8 ✗) · delik: yama yok
⇒ 12 (~53.392 km²) / 21 (~61.869 km²) boş; tek adımlı yama 5 boş, geçişli 0 · tuz 4→6 dosya, hash
fcfc307db9e8→63cbec4426c2 (BOYA hariç) · önbellek izolasyonu temiz, dizin oluşmadı · boya: teuton ·
bavyera · nagpur-bhonsle BOYALAR'da YOK, misir-sultanligi VAR (57).
**② Bulamadım:** motor yaması ⓐ diff'i · BOYA-PARTISI-1010.diff (henüz yok) · `suzgec.js` negatif
diff'i · görevdeki "misir-sultanligi 51 kayıt"ın neye karşılık geldiği · sahiplik-atlama 197'nin
koşu sonrası ağaçta kalıp kalmayacağı (ölçülemedi — donemler.js yok) · F1-F3 sınavları bu işte koşmadı.
**③ İstiyorum:** (a) motor yaması ⓐ'yı GEÇİŞLİ yazacak bir kıta — ya da ANA/B10'u partiden çıkarma
kararı (16:00'dan önce); (b) CLAUDE.md §9.1 "ALTI" düzeltmesi parti commit'inde; (c) NEG-B sınavının
iki veri-bağlı sorusu için karar (65/67 kabul / sınav düzeltmesi); (d) D5-GUN v3 mü NEG-SONRA mı;
(e) tavan önerisi: `BEKLENEN_TABAN_OLCULEMEDI` 190 → **188** (denetle'nin kendi "GEVŞEK" uyarısı;
adlar: yerlesimler_ek27.js Mersin · yerlesimler_nokta_asya_0917.js Mergen) — yazmadım; kaynaksız
`s:` tavanı 1930 → 1841 de GEVŞEK; (f) §8.1 K1-K3 için diff sahibi (suzgec.js · `_sahiplik_uygula`).

YENİ DOSYALAR:
- C:\atlas-umit\denetim\TAM-INSA-PARTISI-1010.md (bu rapor)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-HUNK.py (hunk ayıklayıcı)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-TUZ.py (tuz, uret_petek ithal etmeden)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-DELIK.py (K2 SİM + yama senaryoları)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-SENTETIK.py (negatif dönem ekle/geri al)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-SUZGEC-MO.js (suzgec.js MÖ ölçümü, node)
- C:\atlas-umit\denetim\ARAC-TAM-INSA-PARTISI-1010-MADDESI.py (maddesi_var, AST)
Hiçbiri commit'lenmedi.
