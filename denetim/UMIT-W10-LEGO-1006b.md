# UMIT-W10-LEGO-1006b — (a) gövde zinciri AST sınavı · (b) MOTOR_* sınıflandırması

Ağaç `C:\atlas-w10` = `origin/main` **3e4b3a98** (1006'daki 8552686e'den ileri alındı; ağaç temiz).
`uret_petek.py`nin son değiştiği commit: 55dfa2b5 (30 Eyl). Motor dosyalarına ve sqlite'a dokunulmadı.

## (a) `denetim/ARAC-LEGO-zincir.py` — bugünkü main
**Koşturmadan önce okundu:** `ast` + `git log/show/diff` (salt okuma). Motoru import etmiyor, sqlite'a
dokunmuyor. ⚠️ `KOK = r"C:\atlas"` (:13) SABİT ⇒ olduğu gibi koşturulursa `C:\atlas`ın çalışma kopyasını
ölçer, w10'u değil. Scratchpad kopyasında yalnız KOK `C:\atlas-w10`'a çevrildi. (İlk denemede çeviri tutmadı,
betik `C:\atlas`a karşı koştu. Salt okumaydı, zararsız; bu sonuç kullanılmadı.)

| | 25 Eyl (`8717fe3a`) | bugün (`3e4b3a98`) |
|---|---|---|
| gövde zinciri işlev | 30 | 30 (küme AYNI) |
| okunan modül düzeyi ad | 91 | 92 — tek fark **`_ONB_GEO`** (yamanın kendisi) |
| 18 Eyl'den beri `uret_petek.py` commit'i | — | 9, zincire değen: 27b76088 (21 ad) · c0bd752c (4) · 7d66e312 (3) · d30358b3 (2) · 76351781 (4: `_ONB_GEO` `_ONB_GOVDE_TUZ` `_onb_parca_anahtar` `_puan_bolgesi`) · öteki 4'ü 0 |

### 🔴 Betiğin kör noktası — "BOYALAR yok" hükmünü bu betik VEREMEZ
`ust_duzey()` (:22-43) modül adlarını yalnız `def`/`class`/atama/Store'dan toplar. `import` ve
`from … import` deyimleri yalnız `<ImportFrom@269>` gibi etiket bırakır. ⇒ **`BOYALAR`
(`from renkler import BOYALAR`, :269) ve `girdi` (:271) betiğin evreninde HİÇ YOK** (ölçüldü:
`"BOYALAR" in modul_adlari` → False). Yani 25 Eylül'ün "BOYALAR okuyan yok" sonucu, yapısı gereği başka
sonuç veremeyen bir sınavdı. Boş küme her öngörüyü doğrular.

### Kör noktayı kapatan ek sınav (scratchpad `zincir_import.py`: aynı algoritma + import adları evrene katıldı)
- Kökler: `_yabanci_govde_hesap` · `_osm_govde_hesap` · `_onb_parca_anahtar` + **sb için** `bos_bolge`
  (:5008) · `_onb_ozet` (:6694). Asıl betik sb zincirini hiç taramıyordu.
- Sonuç: **32 işlev · 116 ad.** Zincirin okuduğu ithal adlar yalnız geometri/sayı kütüphaneleri
  (`shapely`, `STRtree`, `_np`, `math`, `time`, `_hlo`…). **`BOYALAR`, `girdi`, `renkler`, `_HARITA_ALT`
  → zincirde YOK.** Kaynak metninde `BOYALAR` geçen zincir işlevi de yok.
- Dinamik erişim: tek eşleşme `petek_epok` :5278 `getattr(_vd, "geoms", [])`. Voronoi geometrisi üzerinde,
  modül adı okumuyor, zararsız.
- ⇒ **"BOYALAR/girdi geo zincirinde yok" bugün de DOĞRU**, ama kanıtı artık bu ek sınav, asıl betik değil.
- Veri yolu (tuz gerektirmez): :1070-1074 `sp["d"]` yönlendirmesi YERLER'i değiştirir. Bu, anahtarın
  içeriğinden (`aktif`) geçer. Govde döngüsü `BOYALAR.items()` üzerinden yürür (:6858 `_sr_is`); yeni bir
  anahtar (CGK) ötekilerin anahtarını değiştirmez. Önbellek değeri `(_mp, _c, _kesilen, _tamamen)` renk
  taşımaz (:6814).

## (b) Tuza giren MOTOR_* değişkenleri — işletim mi, sonuç mu
Tuz kuralı: :581 `os.environ`daki **her** `MOTOR_*` (kodda okunsun okunmasın), eksi `_ONB_ISLETIM` (:571).
⚠️ Kodda hiç okunmayan bir `MOTOR_*` değişkeni (eski ya da yanlış yazılmış) ortamda dursa bile İKİ tuzu da
değiştirir.

| değişken | okunduğu yer | ne yapar | sonucu değiştirir mi | önbellekli katmana yolu | ÖNERİ |
|---|---|---|---|---|---|
| `MOTOR_YURUYUS` | :1162 | Voronoi hücrelerini Dijkstra yürüyüş sahipliğiyle değiştirir | EVET (köklü) | gövde zinciri `MOTOR_YURUYUS` · `_YR_SAHIP` · `_YR_BUTCE`yi DOĞRUDAN okur (anahtarda değil) | TUZDA KALSIN |
| `MOTOR_YURUYUS_SAAT` | :1163 (vars. 40) | bütçe ⇒ `_YR_BUTCE` / `_YR_UZAK` eşyükseltisi | EVET | `_YR_BUTCE` zincirde | TUZDA KALSIN |
| `MOTOR_YURUYUS_16` | :1172 | Dijkstra 8→16 komşu | EVET | `YURUYUS_16` zincirde | TUZDA KALSIN |
| `MOTOR_COL_UFUK_SAAT` | :1892 (yoksa blok hiç koşmaz) | çöl ufuk kelepçesi ⇒ `_YR_ESIK` ⇒ kontur | EVET (Sahra ölçeği :1876-1882) | petek kesimi + zincirin `_YR_*` okuması | TUZDA KALSIN |
| `MOTOR_UFUK_BANT` | :2154 (yoksa blok hiç koşmaz) | EK bant konturları `_YR_BANT_UZAK` ⇒ `_BANT_HAM` (:3593) ⇒ gövde kaydına `ak` (:6837) | yalnız EK çıktı; taban birebir aynı (:2161; :2322 `bant=None` ⇒ taban) | govde/osm/sb DEĞERİNE girmez (`ak` önbellek okumasından sonra eklenir); zincir `_YR_BANT_UZAK`/`_BANT_HAM` okumaz; `col` bant parçaları içerik anahtarlı (:4337-4360) | **TUZDAN ÇIKARILABİLİR** — `_ONB_ISLETIM`e değil, ayrı bir "önbellek-dışı çıktı" kümesine |
| `MOTOR_EGIMSIZ` | :701 | DEM eğimi kapalı | EVET | petek | KALSIN |
| `MOTOR_EGIM_AB_KAPALI` | :1800 | eğim A/B | EVET | sürtünme alanı | KALSIN |
| `MOTOR_NEHIR_OZNE` / `_KAPALI` / `_AB_KAPALI` | :1448 / :1449 / :1825 | nehir sürtünmesi | EVET | `_KVNEHIR` zincirde | KALSIN |
| `MOTOR_BOGAZ_KAPALI` | :1629, :3898 | boğaz yasağı | EVET | petek | KALSIN |
| `MOTOR_BOS_TOPRAK` / `_COL` | :1985 / :2020 | sahipsiz şerit payı/eşiği | EVET | petek/kontur | KALSIN |
| `MOTOR_B23_KAPALI` | :3047 | B2/B3 köprü-koridor | EVET | `B23_ACIK` zincirde | KALSIN |
| `MOTOR_PUAN_KAPALI` | :5913 | puan kapısı | EVET | `PUAN_KAPALI` zincirde | KALSIN |
| `MOTOR_DOLGU_KAPALI` | :6048 | dolgu kapısı ⇒ `aktif` | EVET | aktif (içerik) + dolgu | KALSIN |
| `MOTOR_DOLGU_YOL` | :6331 (`satir`/`tam`/`sina`) | aynı puan, iki algoritma | iddia: "0 bit farkı", ama YALNIZ "bu makinede (AVX2)" (:6327-6329) | dolgu | KALSIN — işletim adayı; başka makinede `sina` sınanmadan taşınmaz |
| `MOTOR_B_DOLGU` | :7962 | Ⓑ `data/dolgu.js`, gövdeden SONRA, "A'ya HİÇ dokunmaz" (:7953) | yalnız dolgu.js | YOK — son önbellek çağrısı :7627 (sb) | **TUZDAN ÇIKARILABİLİR** |
| `MOTOR_DOLGU_KESIT` | :7979 | Ⓑ kesit sınırı | yalnız dolgu.js | YOK | **TUZDAN ÇIKARILABİLİR** |

### Koşu 20'nin dört değişkeni için hüküm
- `MOTOR_YURUYUS=1` · `MOTOR_YURUYUS_SAAT=40` · `MOTOR_COL_UFUK_SAAT=56` → **SONUÇ** değiştirir, tuzda
  kalmalı. Değeri değişen koşu geo önbelleğini HAKLI olarak öldürür. ⇒ Önbellekten yararlanmak için bu üçü
  koşudan koşuya **SABİT tutulmalı** (değerler Emre kararı).
- `MOTOR_UFUK_BANT=40,56,80` → taban değişmez, yalnız ek bant çıktısı değişir. Tuzdan çıkarılırsa bant
  denemeleri geo önbelleğini öldürmez. **Bu bir motor yamasıdır** (`uret_petek.py` :571-582). §9.1 ② gereği
  `denetim/*.diff` olarak bekler ve tam inşaya girer. Yazılmadı (görev yalnız ölçüm).

## Bulunamadı / ölçülmedi
- Koşu 20'den önceki koşunun ortam değerleri. Koşu logundaki `tuz_karsilastir` satırı (:620-638) söyler;
  log okunmadı.
- `MOTOR_COL_UFUK_SAAT`ın `_YR_BUTCE`yi de değiştirip değiştirmediği izlenmedi. Muhafazakâr hüküm: tuzda kalsın.
- Kalıcı kullanıcı ortamında okunmayan `MOTOR_*` var mı, bakılmadı.

## Öneriler (yetki koordinatörde)
1. `ARAC-LEGO-zincir.py` düzeltilmeli: ① ithal adlar evrene katılsın ② sb kökleri (`bos_bolge`, `_onb_ozet`)
   eklensin ③ `KOK` argümandan alınsın. Yoksa BOYALAR bir gün zincire girerse betik yine "temiz" der.
2. Tuz parçalayıcı yama (tam inşa kuyruğuna): `MOTOR_UFUK_BANT` · `MOTOR_B_DOLGU` · `MOTOR_DOLGU_KESIT` →
   ayrı "önbellek-dışı" küme. `MOTOR_DOLGU_YOL` ancak ikinci makinede `sina` sınavından sonra.
3. Tuz yalnız kodda OKUNAN `MOTOR_*` adlarını alsın (bilinen ad listesi). Bilinmeyen ad UYARI bassın, tuza
   girmesin. Yoksa ortamdaki tek bir artık değişken iki tuzu da sessizce değiştirir.
