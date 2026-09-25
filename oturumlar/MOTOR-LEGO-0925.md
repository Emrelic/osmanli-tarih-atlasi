# MOTOR-LEGO-0925 — koşu niçin 19 saat: `govde` önbelleği HİÇ ÇALIŞMIYOR

**Koordinatör:** YILDIRIM BAYEZIT · **Açılış:** 25 Eylül 2026
**Model:** Opus · **Kanal:** yalnız tahta (`py arac/tahta.py yaz --kim "MOTOR-LEGO-0925"`)

---

## 0. 🔴 KOŞU SÜRÜYOR — MOTOR KODUNA DOKUNMA

`C:/atlas-kosu15` worktree'sinde koşu 15 çalışıyor (~19 saat, 02:55'te başladı).
**Bu görevde `arac/uret_petek.py` · `arac/renkler.py` · `arac/girdi.py` ·
`arac/motor_onbellek.py` DEĞİŞTİRİLMEZ.** Sebebi teknik ve kesin: bu dört dosya
önbelleğin TUZUNU (`motor_izi()`) kurar; birine dokunmak koşu 15'in şu anda
İNŞA ETTİĞİ bütün önbelleği çöpe atar. Bugün tam bu oldu ve bedeli 19 saat.

⇒ **Senin işin ÖLÇMEK ve TEŞHİS ETMEK.** Çareyi YAZ ama UYGULAMA — yama
`denetim/MOTOR-LEGO-0925-yama.diff` olarak teslim edilir, koşu bitince
koordinatör uygular. Ölçüm betiklerin `denetim/ARAC-LEGO-*.py` adıyla senin.

---

## 1. EMRE'NİN SORUSU — birebir

> *"Koşu neden 19 saat sürüyor? Biz bu koşu konusunu lego gibi yapmayı
> beceremedik mi? Diyelim sadece 5 bölgede ve 3 farklı zamanda değişiklik
> yapılmış olsun — sadece bu bölümü koşup eski parçayı söküp yeni parçaları
> takamıyor muyuz?"*

Cevap "hayır beceremedik" DEĞİL: **lego kodda VAR, ama en pahalı aşamada
hiç ateşlenmiyor.** Aşağıdaki üç ölçüm bunu söylüyor.

## 2. ÖLÇÜLENLER — devral, yeniden ölçme (ama bir tanesini DOĞRULA)

### ② Koşunun %92'si İKİ aşamada (koşu 14 logu, `C:/atlas-kosu14/kosu_zincir.log`)
```
Yabancı devlet gövdeleri            13s 29dk   78,5%   (işlemci 13s 21dk — UYKU DEĞİL, gerçek hesap)
Dönemler kuruluyor (delta yapısı)    2s 17dk   13,3%
Çöl tavanı                             25dk     2,5%
… kalan 31 aşamanın TOPLAMI            ~1s       5,7%   (Voronoi, kara maskesi, DEM, Dijkstra, nehir)
```
🔴 Yani coğrafya ucuz, **ZAMAN pahalı.** Aşama `devlet × gün` döngüsü:
602 devlet, her birinin kendi kırılma günleri. Yalnız `rusya` 278 gün ve tek
başına ~1,5 saat. Nabız satırları logda: `devlet 80/602 rusya · gün 137/278`.

### ② Önbellekte `govde` katmanı YOK — İKİ AYRI VERİTABANINDA DA
```
C:\atlas-onbellek\motor_onbellek.sqlite        258,8 MB
   dolgu 5.744 · kusat 2.463 · col 1.935 · osm 1.723 · sb 831 · dolgu2_* 294 · k1 56
C:\atlas\_motor_onbellek\motor_onbellek.sqlite 348,3 MB
   kusat 8.195 · dolgu 3.224 · col 2.281 · sb 584 · osm 580 · k1 12
```
**İkisinde de `govde` satırı SIFIR.** Koşu 14'ün kendi önbellek özeti de
(`kosu_zincir.log:1801-1806`) `govde` satırı BASMIYOR — `ozet()` yalnız
DOKUNULAN katmanları basar (`arac/motor_onbellek.py:137`), yani o koşuda
`govde` katmanına hiç dokunulmamış.

### ③ Ama kod ORADA ve doğru görünüyor
`arac/uret_petek.py` — koşunun %78'ini yiyen döngünün tam içinde:
```
6410   return _ONB.anahtar(katman, _ONB_GOVDE_TUZ, cevre, *parca), siralar
6466   _onb_k, _sira = _govde_anahtar(aktif, a) if _ONB.acik else (None, aktif)
6467   _onb_var, _onb_v = _ONB.oku("govde", _onb_k) if _onb_k else (False, None)
6478       _ONB.yaz("govde", _onb_k, (_mp, _c, _kesilen, _tamamen))
```
Önbellek AÇIK (`🧱 ÖNBELLEK: AÇIK` her koşuda basılıyor). Kod yazıyor gibi
duruyor. **Yazmıyor.** Aradaki fark senin işin.

## 3. SENDEN İSTENEN — sırayla

### ① NİÇİN ATEŞLENMİYOR (asıl soru)
Öngörünü ÖNCE YAZ, sonra ölç (§11). Aklıma gelen aday sebepler — **listeyi
doğru sanma, her birini ayrı ayrı sına, listede olmayan bir sebep de olabilir:**
- `_yabanci_devlet_faz1` adı FAZ-1'in **ayrı süreçlerde** koştuğunu düşündürüyor
  (`MOTOR_SUREC_ISCI`, `MOTOR_PARALEL_ISCI`). İşçi süreçte `_ONB` nasıl kuruluyor —
  `acik` orada da True mu, yolu aynı mı, yazdığı commit'leniyor mu?
- `_ONB.acik` True ama `_govde_anahtar` istisna atıp sessizce yutuluyor olabilir
- `_ONB_GOVDE_TUZ` tanımsız/boş olabilir (`_ONB_COL_TUZ` ile karşılaştır — `col`
  ÇALIŞIYOR, 2.281 satır var; **çalışan bir kardeşi var, farkı bul**)
- yazma oluyor ama işlem sonunda geri alınıyor (WAL + isolation_level=None)
🔴 **`B9`:** "0 bulundu" aletin ateşlendiğinin kanıtı değildir. Önce ALETİ
sına: elle küçük bir `_ONB.yaz("govde", ...)` + `oku` turu geçiyor mu?

### ② ATEŞLENSEYDİ NE KAZANIRDIK — sayıyla
Anahtar `_onb_parca_anahtar` ile kuruluyor: **o gövdenin okuduğu HER ŞEY**
(aktif petekler + çevresindeki 250 km'lik komşuluk + her parçanın WKB özeti).
⇒ Bir yerleşim değişince YALNIZ onun çevresindeki gövdeler bayatlar.
Emre'nin "5 bölge, 3 zaman" örneğinde kaç gövde yeniden hesaplanırdı? **ÖLÇ:**
koşu 15 bitince önbellekte kaç `govde` satırı var, kaçı bir sonraki koşuda
isabet ederdi. Tahmin etme, `denetim/ARAC-LEGO-*.py` ile say.

### ③ İKİNCİ AŞAMA DA BAKILIR — "Dönemler kuruluyor" 2s 17dk (%13,3)
Bu aşamanın önbelleği var mı, yok mu, olabilir mi? Yalnız ölç ve bildir.

### ④ TERS YÖN — `C13`, ve bu görevde ZORUNLU
Önbellek isabet ettiğinde sonuç **bit-bit aynı** mı? Kodun kendi yorumu bunu
"kanonik sıra" ile güvenceye aldığını söylüyor (`uret_petek.py:6468-6472`).
İDDİAYI SINA: aynı gövdeyi önbellekli ve önbelleksiz hesapla, WKB'leri karşılaştır.
Bir hız kazanımı sessizce yanlış harita üretiyorsa kazanım değil kayıptır —
motorun kendi DEM kapısı bugün tam bunu söyleyerek koşuyu öldürdü (`D235`).

## 4. TESLİM — TEK tahta mesajı (§7.1 ④)
① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir sonuçtur) ③ ne istiyorum.
Rapor: `denetim/MOTOR-LEGO-0925.md` · yama: `denetim/MOTOR-LEGO-0925-yama.diff`
(UYGULANMAZ). Commit pathspec'li, `git add -A` YASAK (§7).

## 5. ARAÇ KURALLARI (§11 — kancalar bunları GERÇEKTEN engelliyor)
`py` (not `python`) · bash backtick YASAK · heredoc YASAK · `py -c` içinde
Türkçe YASAK ⇒ `Write` + `py <yol>` · `git commit -F <dosya>` ·
`sys.stdout.reconfigure(encoding="utf-8", errors="replace")`.
