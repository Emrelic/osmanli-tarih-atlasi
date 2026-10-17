# KASA-SUMER-DOLGU-1010 — Sümer kutusu için `tur:"bolge"` dolgu noktası önerisi

Görev: YILDIRIM BAYEZIT (HUKUM-KASA §9.x — Sümer kutusu hükmü: ① çekirdeğe daraltma (D220)
② kenara `tur:"bolge"` dolgu, `bos:` etiketli, SAHİPSİZ; eşik 150 km GEVŞETİLMEZ).
Hedef: **çekirdek kutuda p95 ≤ 150 km VE azamî ≤ 300 km** (MIMARI §5 AÇ kovası).
Girdi: `denetim/KASA-SUMER-NOKTA-1010.md` (2aa04ae1) — 26 nokta (10 mevcut + 15 yeni + Susa).
Okuma ağacı: `C:\atlas-kasa-wt` @ origin/main `6ff24cb9`. `data/` DONUK — öneri yazılır.
🔴 Dolgu gerçek şehir DEĞİL ⇒ kaynak aranmaz; sahipsiz kalır ve Değişmez 1'de sayılır (beyan).
⚠️ Dolgu `BEKLENEN_SAHIPSIZ`ı oynatır ⇒ dolgu ve tavan AYNI COMMIT'TE (§3.4②) — bu öneri
kaç noktanın sayaca dokunacağını ayrıca yazar.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)

**Kara maskesi** (depodaki `veri-kaynak/ne_10m_land.geojson`): maskesiz ölçüm (KASA-SUMER-NOKTA
§1.3) güneydoğuda Körfez su hücrelerini sayıyordu. Maskeyle:
- **ÇEKİRDEK (30,5-33,5K · 44-47D):** çekirdekte su hücresi neredeyse YOK (Hor el-Hammar
  bataklığı Natural Earth'te `land` sayılıyor olabilir) ⇒ p95 **151 → 145-150** arası düşer,
  yani **maskeyle çekirdek AÇ'a düşer ya da 1-3 km üstünde kalır**; azamî ~196 kalır.
  ⇒ Gereken dolgu: **0-1.**
- **TÜM KUTU (29,5-33,5K · 44-48,5D):** su hücreleri çıkınca p95 **186 → 170-180**; AÇ için
  **3 ± 1 dolgu** (güneybatı çöl · kuzeydoğu Zagros/İlam · Huzistan-Basra arası).

**Tasarım:** dolgu açgözlü (greedy) yerleştirilecek — her adımda EN UZAK kara hücresine bir
nokta; durma ölçütü p95 ≤ 150 VE azamî ≤ 300. Açgözlü yöntem en az sayıyı garanti etmez ama
"niçin orada" sorusunu her nokta için hücreyle cevaplar.

**Kenar etkisi:** kutu dışındaki noktalar (Susa 48,25D çekirdeğin dışında) çekirdekte de
uzaklığa katkı verir — dahil edilecek ve beyan edilecek.

## 1. ÖLÇÜM (2026-10-10)

### 1.0 Yöntem ve LAB ile mutabakat
- Maske: **`veri-kaynak/motor_kara.geojson`** (LAB önerisi — motorun gördüğü kara; tutarlılık).
  Karşılaştırma için `ne_10m_land` (+ `ne_10m_lakes` çıkarılarak) da ölçüldü.
- Izgara: 0,05° **hücre merkezleri**, büyük-daire, R = 6371,0088 km (LAB'in yöntemi; ilk
  ölçümümde hücre köşesi + R=6371 kullanmıştım — 2-3 km fark oradan).
- **Mutabakat:** bu yöntemle başlangıç değerlerim LAB'inkiyle BİREBİR:
```
                      LAB (motor_kara)      KASA (motor_kara, bu ölçüm)
ÇEKİRDEK p95/azamî    148,9 / 194,5         148,9 / 194,5
TÜM KUTU p95/azamî    172,0 / 224,4         172,1 / 224,4
```
  ⇒ İlk raporumdaki 151 km ve 186 km **yöntem farkıydı** (köşe/merkez + maske yokluğu).
  LAB'in hükmü: çekirdek 148,9 ile 151 arası **gürültü (±2-3 km)** içinde — SINIR/AÇ belirsiz.
- Dolgu yerleştirme: **açgözlü** — her adımda p95'i en çok düşüren kara hücresi (0,25° aday
  ızgarası), durma ölçütü p95 ≤ 150 VE azamî ≤ 300.

### 1.1 Öngörü sınavı
```
                               öngörü                ölçüm
maske çekirdeği değiştirir mi  151 → 145-150         DEĞİŞTİRMİYOR (3584/3600 hücre kara; LAB da
                                                     aynı) — TUTMADI (değişim beklemiştim)
çekirdek için dolgu            0-1                   1 — TUTTU (0 da savunulabilirdi: 148,9 eşiğin
                                                     altında, ama gürültü payı içinde)
tüm kutu maskeyle p95          170-180               172,1 — TUTTU
tüm kutu dolgu                 3 ± 1                 2 — TUTTU (alt sınır)
```

### 1.2 ÖNERİLEN DOLGU — ÇEKİRDEK (30,5-33,5K · 44-47D) — **1 nokta**
| # | koordinat (lat, lon) | `tur` | `bos:` önerisi | kapattığı | p95 etkisi | azamî |
|---|---|---|---|---|---|---|
| Ç1 | **32.75, 46.25** | `"bolge"` | `"dolgu — Dicle doğusu / Zagros eteği (Sümer kutusu çekirdeği KD); şehir değil, kaynak yok"` | 720 hücrenin en yakın noktası olur; **134 hücreyi >150 → ≤150 km** indirir | **148,9 → 111,4 (−37,5)** | 194,5 → 177,7 |
- **Niçin orada:** çekirdeğin azamî hücresi KD köşede (LAB: 33,475K · 46,825D). Ç1 en yakın
  gerçek noktadan (Adab) 107 km uzakta — Dicle'nin doğusunda, Sümer sitelerinin olmadığı
  boşluk. Hor el-Hammar ve Fırat-Dicle hattına DOKUNMUYOR.
- **Konum esnek:** KD çeyreğinde üç aday aynı sonucu veriyor —
  `(33.25, 46.5)` p95 111,7 · `(33.0, 46.0)` 111,8 · `(32.75, 46.25)` 111,4 (azamî üçünde
  177,7). ⇒ seçim p95 için değil, **harita için** yapılmalı (hangi petek nereye boyanacak).
  `(33.0, 46.0)` antik **Dēr** (Tell Aqar, Badra yakını) bölgesine en yakın aday — Dēr bu
  turda Pleiades'te BULUNAMADI (KASA-SUMER-NOKTA §1.1); kaynaklı bir Dēr koordinatı
  bulunursa dolgu yerine GERÇEK nokta olur ve bu dolgu düşer.
- **Sonuç:** 1 dolguyla çekirdek **p95 111,4 km** — eşiğin 38,6 km altında, gürültü payının
  ~13 katı. ⇒ Çekirdek **AÇ**, eşik GEVŞETİLMEDEN (HUKUM §9.3).

### 1.3 TÜM KUTU (29,5-33,5K · 44-48,5D) — bilgi için, **2 nokta**
| # | koordinat | kapattığı | p95 | azamî |
|---|---|---|---|---|
| T1 | 30.25, 47.25 (Basra batısı — Şattülarap/Hor bölgesi kenarı) | 1.100 hücre · 384 hücre >150 → ≤150 | 164,9 → 139,1 (−25,8) | 224,4 → 194,5 |
| T2 | 29.50, 44.00 (GB köşe — çöl) | 345 hücre · 205 hücre >150 → ≤150 | 172,1 → 164,9 (−7,1) | 224,4 (değişmez) |
Açgözlü sırası T2→T1 çıktı (ne_10m maskesinde); motor_kara ile T1 tek başına en büyük kazanç.
⚠️ **T2 tam kutu KÖŞESİNDE** — bu bir yöntem artefaktı: köşe hücreleri en uzak hücreler
olduğu için açgözlü oraya koyuyor. Gerçek dolgu kutu kenarına değil, **komşu kutunun da
işine yarayacak** yere konmalı (Arabistan kutusu açılınca). ⇒ T2 kesin öneri DEĞİL.
Tüm kutu için tek kesin öneri **T1**; T1 + Ç1 birlikte ölçülmedi (çekirdek ve tüm kutu ayrı
tasarımlar) — koordinatör hangi kutuyu açacağına karar verince birleşik ölçüm yapılır.

### 1.4 Değişmez 1 / `BEKLENEN_SAHIPSIZ` beyanı
- Her dolgu `tur:"bolge"` + `bos:` ⇒ **SAHİPSİZ** kalır, MÖ'de hiçbir künye onu boyamaz,
  Değişmez 1 sayımında **sahipsiz nokta** olarak sayılır.
- **Bu sayaca kaç diff dokunuyor (§9 tavan kuralı):** bu öneri tek başına **+1** (yalnız Ç1)
  ya da **+2** (Ç1 + T1). KASA-SUMER-NOKTA'nın 15 noktası ve SUMER-KUNYE'nin 10 noktası da
  `BEKLENEN_SAHIPSIZ`a dokunabilir (MÖ'de künyesi yazılmadan inerse) ⇒ **en az 3 ayrı
  öneri aynı sayaca dokunuyor** — tavan birlikte ölçülmeli, tek tek tahmin TUTMAZ.
- `kur:` — dolgunun `kur:` alanı YOK ⇒ MIMARI §5: `UFUK[0]`'tan beri sahnede. Dolgu için bu
  doğru davranış (bölge noktası, zamandan bağımsız).

## 2. ③ İSTİYORUM
a) **Çekirdek için Ç1'i onayla** — tek dolgu, p95 111,4, eşik oynamadan AÇ. Konum
   (32.75/46.25 · 33.0/46.0 · 33.25/46.5) haritaya göre seçilsin; Dēr bulunursa dolgu düşer.
b) **Çekirdek tanımını resmîleştir:** LAB'in tespiti — 30,5-33,5K · 44-47D benim ölçümümden
   HUKUM §9.3'e geçti, D220'de koordinatlı tanım YOK. Resmî tanımı sen yaz.
c) **Dēr için ikinci arama** (TGN/al-Ṯurayyā/akademik): bulunursa Ç1 gerçek noktaya döner —
   ister misin?
