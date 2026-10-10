# STATU-V-1010 — hükümet sancaklar `d:` → `v:` + Cizre künyesi

Görev: YILDIRIM BAYEZIT (10 Ekim 2026) · işçi EMRELIC, Opus · diff üretir, UYGULAMAZ.
Taban `origin/main` `95967da3` (`rev-list HEAD..origin/main` = 0) · ayrı worktree'ler (önce `wt` / sonra `wt2`).
Girdi: KASA-HUKUMET-SANCAK-1010 (`makine/kasa`) · TDV KÜRTLER (Özcoşar) iki hükümet sancak listesi.

## 0. ÖNGÖRÜ (ölçümden ÖNCE; sonradan DOKUNULMADI)
Evren: 6 kayıt — Cizre (ok107) · İmâdiye (Amêdî) (ok109) · Çölemerik (Hakkâri) + Hoşap (Mahmudi) (ek_ferhadpasa) ·
Bitlis + Palu (yerlesimler.js). Bugün 6/6 `d:`, `v:` boş (ölçüldü, `girdi.yukle`).
Uygulayacağım dönüşüm (hükmün harfi):
- 5 kayıtta `d:` dilimi AYNI uçlarla `v:` olur. Bitlis'in ÜÇÜNCÜ `d:` dilimi (1916-08-08 → 1920-04-23, Rus işgali
  SONRASI) `d:` KALIR — hükümet statüsü o tarihte yok (Tanzimat); uç değil, dilim seçimi.
- İmâdiye: `v` 1516-08-24 → **1839-01-01** (TDV MUSUL, yıl) + `d` 1839-01-01 → 1918-11-08 (`y:"antlasma"` bu dilimde kalır).
- Cizre: `v` 1515-09-19 → 1920-04-23 AYNI uçlar, **`kid` YOK** (künye 1508-1627; kid yazılsa `v` künyenin 293 yıl
  DIŞINA taşar = 4c/4d). 1627 bitişi ve 1821/30-1847 ikinci aralık `ic_not`ta beyan.
- `devletler.js`: +1 künye `cezire-hukumeti` (1508-01-01 → 1627-01-01, yil, `boya_gerekli:true`).
Beklenen fark (denetle ÖNCE ↔ SONRA):
- **Değişmez 2 (Osmanlı senkronu):** kırılma +1 (İmâdiye 1839-01-01 `v→d`), **AÇIK 0 → 1** — 1839'da İmâdiye
  maddesi yok (grep: 0) — %70. Öteki 5 kaydın kırılma GÜNLERİ değişmiyor ⇒ başka açık yok.
- Değişmez 1 / 1b / 2s / 2i / 2t: **0 değişim** — %80.
- künye 897 → 898; boya borcu kovası beyanlı 5 → 6 (künye haritada kullanılmıyor) — %60.
- `v:` kullanan sayımlar (tâbi dönem sayısı vb.) +7 dilim (5 kayıt × 1 + Bitlis 2 − … : Cizre 1 · İmâdiye 1 · Hakkâri 1 ·
  Hoşap 1 · Palu 1 · Bitlis 2 = **7**) — %70.
- `renk_olc.py`: değişmez (yeni boya yok, künye çizilmiyor) — %70.
- Açık sayısı ARTARSA (öngörüm: +1) şartname gereği DURURUM ve koordinatöre yazarım (tavan + sabit hükmü onun).

## 1. ÖLÇÜM
`denetim/STATU-V-1010.diff` · 110 satır · 5 dosya +25/−9 · sha256 `1c45c2d23a627d57…` · `git apply --check` TEMİZ
(taban `95967da3`; `origin/main` teslimde `eca021d8`, bu 5 dosyada fark 0). `node --check` 5/5 OK. Künye 897 → 898,
mükerrer id 0. Üretim: `scratchpad/STATU-V/donustur.py` + `kunye.py` (bayt korumalı, blok içi tam eşleşme).

### 1.1 Altı kayıt — ÖNCE / SONRA (`girdi.yukle` ile okundu)
| kayıt (dosya) | ÖNCE | SONRA |
|---|---|---|
| Cizre (ok107) | `d` 1515-09-19 → 1920-04-23 | `v` 1515-09-19 → 1920-04-23 · k "Cizre Hükûmeti (Bohtan · hükümet sancak)" · **kid YOK** |
| İmâdiye (Amêdî) (ok109) | `d` 1516-08-24 → 1918-11-08 (`y:antlasma`) | `v` 1516-08-24 → **1839-01-01** + `d` 1839-01-01 → 1918-11-08 (`y:antlasma`) |
| Çölemerik (Hakkâri) (ek_ferhadpasa) | `d` 1548-08-24 → 1920-04-23 | `v` aynı uçlar · "Hakkâri Hükûmeti" |
| Hoşap (Mahmudi) (ek_ferhadpasa) | `d` 1548-08-24 → 1920-04-23 | `v` aynı uçlar · "Mahmudî Hükûmeti" |
| Bitlis (yerlesimler.js) | `d` 1515-09-15→1532 · 1534→1916-03-01 · 1916-08-08→1920-04-23 | ilk iki dilim `v` (kendi `kaynak:`ları korundu) · üçüncü (Rus işgali sonrası) **`d` KALDI** |
| Palu (yerlesimler.js) | `d` 1516-05-01 → 1920-04-23 | `v` aynı uçlar · "Palu Hükûmeti" |
Hepsinde `statu:"vassal"` (varsayılan; `özerk`/`ocaklık` inceltmesi kaynaklı ayrı iş — TDV hakkari aynı paragrafta
"ocaklık" da diyor, KASA'nın terim çelişkisi). Beyan: dilimde `ic_not` alanı YOK (`BILINEN_DONEM_ALANLARI`), kayıt
düzeyinde de yok ⇒ kaydın `not:` alanına yazıldı (Palu'nun mevcut `not:`unun BAŞINA eklendi; öteki beşine yeni alan).
⚠️ Usul: ilk üretimde İmâdiye'nin `v`'si DÜŞTÜ — nesnenin aşağısında ikinci bir `v: [],` anahtarı vardı, JS sonuncuyu
alır. Yükleyiciyle okurken yakalandı; yeni `v` mevcut anahtara yazıldı, ikinci anahtar açılmadı.

### 1.2 `cezire-hukumeti` künyesi
`Hükûmet-i Cezîre (Bohtan Emirliği)` · beylik · anadolu · 1508-01-01 → 1627-01-01 · `kesinlik:"yil"` · baskent Cizre ·
`boya_gerekli:true` · `ic_not_f` Charmoy şüphesi + Azîzân başlangıcı BULUNAMADI · `ic_not_t` ikinci aralık 1821/30-1847
YAZILMADI (şema kalemi) · kaynak "TDV: cizre · kurtler (Özcoşar)" · kronoloji 2 madde. `renkler.py`'ye dokunulmadı.

### 1.3 `denetle.py --ayrinti` ÖNCE ↔ SONRA — 12.272 ↔ 12.272 satır, FARK 4 SATIR (tek blok)
```
Değişmez 2  ✓  628 kırılma, 0 açık  →  629 kırılma, 0 açık   (+ "beklenenden farklı (628/629 ≠ 623)" bilgi satırı)
```
Gerekçe: +1 kırılma = İmâdiye 1839-01-01 `v→d`. Öteki beş kaydın kırılma GÜNLERİ değişmedi ⇒ 0 fark. Çıkış ikisinde
de **2** (yalnız D8 ölçülemedi — taban hâli). Başka HİÇBİR satır oynamadı (D1 · 1b · 2s · 2i · 2t · tâbi sayaçları dahil).
`renk_olc.py`: tek fark başlık satırı "devletler.js 897 → 898 kayıt"; çakışma/palet AYNI, çıkış 0 ↔ 0.

### 1.4 🔴 AÇIK ARTMADI — ama TESADÜFEN (asıl bulgu)
Değişmez 2'nin `d`/`v` kolu yer şartı ARAMAZ (`degismez2(..., yer_sarti=False)`). İmâdiye'nin yeni 1839-01-01
kırılmasının kendi maddesi YOK; ±30 günü iki ilgisiz madde kapatıyor: **"Nueva Helvetia kuruldu — Meksika,
Sacramento" (1839-01-01, 0 gün)** ve "İngilizlerin Aden'e yerleşmesi" (1839-01-19).
`denetle_eslesme.py` A bölümü bunu YAKALIYOR: şüpheli **134 → 135** (tavan 97; taban ZATEN ✗, çıkış 1 ↔ 1),
satır: `1839-01-01 (1) İmâdiye (Amêdî) | 0g | Nueva Helvetia kuruldu`. ⇒ Değişmez 2 açısından temiz, eşleşme
açısından YENİ bir yanlış eşleşme.

### 1.5 Öngörü sınavı
```
                               öngörü            ölçüm
D2 kırılma +1                  %70               ✓ 628→629
D2 AÇIK 0→1                    %70               ✗ 0→0 — tesadüfi eşleşme (§1.4)
D1/1b/2s/2i/2t değişmez        %80               ✓
künye 897→898                  —                 ✓
boya beyanlı 5→6               %60               ölçülmedi (durum_tablosu koşturulmadı)
v dilim +7                     %70               ✓ (yükleyiciyle 7 dilim)
renk_olc değişmez              %70               ✓ (yalnız kayıt sayısı satırı)
🆕 öngörmediğim: ikinci `v:` anahtarı (İmâdiye) · eşleşme denetiminin +1
```

## 2. İSTİYORUM
- ⓐ İmâdiye 1839 için KENDİ kronoloji maddesi (TDV musul: "1839'da İmâdiye'deki Behdiyan hâkimliklerine son verildi")
  — kronoloji dosyasının sahibine; yoksa eşleşme defterine yeni şüpheli kalır.
- ⓑ Cizre `v` 1627 → ~1821 arası BİLİNEN yaklaşıklık (hüküm ② gereği uç dokunulmadı; TDV 1627'de bitiriyor). İmâdiye'deki
  gibi kaynaklı uç sayılsın mı? Sayılırsa: `v` 1515-09-19 → 1627-01-01 (`kid:"cezire-hukumeti"` artık yazılabilir) +
  `d` 1627 → 1920; 1627 için de madde gerekir.
- ⓒ Cizre'nin 1508-1515 "kunye-yok" boşluğunun gerekçesi künyeyle düştü — `s:cezire-hukumeti` 1508 → 1515-09-19 ayrı kalem.
