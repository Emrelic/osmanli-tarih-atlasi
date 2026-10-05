# UMIT-W45-AKCAKALE-CEVRIM-1006 — Akçakale ⇄ Jadlā’ "güçlü çevrimi"

6 Ekim 2026 · görev UMIT İRTİBAT (kalem 6④) · **YALNIZ ÖLÇÜM, veri yazılmadı, commit yok**
Ölçülen ağaç: **origin/main `d0877829`** (geçici worktree `C:\atlas-w45`, ölçüm sonrası kaldırıldı).

## 0. Öngörü (ölçümden önce)
Çevrimin W9'un sınır şeridi `zincir_kaynagi`/birleşik kaydından doğduğunu, Akçakale'nin metninde
Jadlā’yı anan bir atıf bulunduğunu ve bunun yalnız metin atfı olduğunu, haritayı etkilemediğini tahmin ettim.
**Tuttu**, bir farkla: atıf W9'dan değil, `11bcae71` (4 Ekim) kaynaksızlık beyanından geliyor.

## 1. Çevrim ne — kaynağı
`denetle.py`de devralma çevrimi denetimi **YOK**. `denetle.py`de "çevrim/döngü" geçen satırlar
(527, 4307, 4907) başka konulardadır. Çevrimi raporlayan alet
`denetim/ARAC-DEVRALMA-DONGU-1004.py`. d0877829 üzerinde koşturuldu:

```
ÇİZGE: 447 yönlü kenar (GÜÇLÜ 315 · ZAYIF 132)
ÇEVRİM: 3 (GÜÇLÜ 3) · karşılıklı çift 3
  [GUCLU] Akçakale → Jadlā’ → Akçakale
     Akçakale → Jadlā’  [s[0] · «devraldi» · GUCLU]  "... ⚠️ Jadlā' bu kayıttan GÜN devraldı ..."
     Jadlā’ → Akçakale  [kaynak · «komsu» / «en yakin kayit» · GUCLU]  "ZİNCİR: §4 şartlı komşu günü — 1918-10-30 ÖNCESİ en yakın kayıt «Akçakale» (5.9 km)"
  [GUCLU] Bosna Brod'u ⇄ Bosna Dubiçası   (bilinen, DEVRALMA-DONGU-1004 ①)
  [GUCLU] Dimetoka ⇄ Sofulu                (bilinen, DEVRALMA-DONGU-1004 ②)
```
Akçakale çifti 4 Ekim DEVRALMA-DONGU raporunda **yoktu**. Sonradan girdi.

## 2. Alanlar ve dosya:satır
| yön | dosya:satır | alan | metin | gerçek mi |
|---|---|---|---|---|
| Jadlā’ → Akçakale | `data/yerlesimler_sinir_guney.js:13` | `kaynak` (kayıt) | "ZİNCİR: §4 şartlı komşu günü — 1918-10-30 ÖNCESİ en yakın kayıt «Akçakale» (5.9 km) · SONRASI … «Ayn el-Arab (Kobani)» (59.0 km)" | ✅ **GERÇEK devralma**: `s:` zinciri (1281 `memluk` dahil) + 1918-10-30 günü |
| Akçakale → Jadlā’ | `data/yerlesimler_ek25.js:43` | `s[0].kaynak` (`memluk 1281-1516`) | "⚠️ Jadlā' bu kayıttan GÜN devraldı; §4'ün birinci şartı … BURADAN DÜŞER — bkz. denetim/HUKUM-DEVRALMA-1004.md" | ❌ **devralma DEĞİL**: Akçakale'ye düşülmüş **geri atıf / uyarı notu** |

Ters kenarı getiren commit: `11bcae71` (2026-10-04, "Akcakale'nin `memluk 1281-1516` donemine KAYNAKSIZLIK BEYANI (D209)").
⇒ **Olgu düzeyinde döngü YOK. Kayıt düzeyinde de YOK.** Alet "X bu kayıttan devraldı" kalıbının
yönünü ters okuyor: «devral» tetiği + tümcedeki ad (Jadlā’) ⇒ sahibi→X kenarı yazıyor.
Gerçek ilişki **tek yönlü**: Jadlā’ ← Akçakale. Bu çevrim aletin **yanlış pozitifi**dir.

## 3. Haritaya etkisi — YOK
- Çevrim yalnız `kaynak` METİNLERİNDEN kurulur. Motor `kaynak`ı okumaz; hiçbir `s:`/`d:`/`v:`/`isg:` günü bundan türemez.
- **Değişmez 1 / 1b / 2: etkilenmez.** Jadlā’nın zinciri kesintisiz: `memluk 1281-01-01→1516-08-24` · `d 1516-08-24→1918-10-30` · `fransa-cumhuriyet 1918-10-30→1920-07-24` · `suriye-lubnan-mandasi 1920-07-24→1923-10-29` (boşluk 0, çakışma 0, elle okundu). Bu görev kapsamında `denetle.py` koşturulmadı, çünkü hiçbir veri alanı değişmedi ve önerilen düzeltme yalnız denetim aletine dokunuyor.
- ⚠️ **Asıl kusur çevrim değil, zincirin UCUDUR** (KASA-ZINCIR-1004, C kovası, `sinir_guney.js` satır 211):
  Jadlā’nın devraldığı iki bilgi de Akçakale'de **kaynaksızdır**:
  `memluk 1281-1516` (Akçakale `s[0].kaynak` = "bulunamadı") · 1918-10-30 (Akçakale `isg[0].kaynak` = "gün mevcut veriden devralındı, KAYNAKSIZ").
  Buna karşılık **1516-08-24** (Mercidâbık) kırılması kaynaksız değil, olay günüdür. Bu ayrı bir borçtur ve KASA-ZINCIR hükmünü bekliyor; çevrimi kırmak onu kapatmaz.

## 4. Konum ve ad (yakın mükerrer)
- Jadlā’ 36.65715/38.94703, GeoNames 169280 (PPL, SY). Akçakale 36.710/38.947. Uzaklık **5,88 km**.
- **3 km içinde başka kayıt: 0** (8 km içinde tek kayıt Akçakale; evren `girdi.yukle()` 4299 kayıt).
  Ad çakışması yok ⇒ **mükerrer DEĞİL**. Koordinat GeoNames'e dayanıyor; atlas koordinatı değil.
- Ad: GeoNames birincil adı aynen yazılmış (`Jadlā’`, alternatif `Jadla'`, `جدلا`). Türkçe yazım önerilmedi; bulunamadı.

## 5. Kırmak için en küçük değişiklik — ALETTE, veride değil
Öneri diff'i: **`denetim/UMIT-W45-AKCAKALE-CEVRIM-1006.diff`** (`git apply --check` temiz, `atlas-umit` 4a9a15f8).
- `DISLA`ya tek kalıp: `bu kayittan (?:\w+ ){0,2}devral` → "TERS YÖN". Bu kalıp `sinyal` olsa da dışlanır (OLUMSUZ/KADEME gibi), çünkü tümcede "komşunun günü" geçiyor ve sinyal her zaman var.
- **Veride değişiklik önerilmez.** Akçakale'deki uyarı notu doğru ve değerli (§4 birinci şartının düştüğünü söylüyor). Aletin tetiğinden kaçmak için metni değiştirmek ölçümü gizlemek olur.
- **Kaynak gerekmez** (§4): değişen bir tarih ya da sahiplik yok.

Yamalı koşu, aynı ağaç (d0877829):
```
ÇİZGE: 446 kenar (GÜÇLÜ 314)            ← 447/315'ten tam 1 düştü
DIŞLANAN: 711 (… TERS YÖN 1)            ← tam 1 tümce, yalnız Akçakale s[0]
ÇEVRİM: 2 — Brod⇄Dubiça · Dimetoka⇄Sofulu   ← gerçek çiftler YERİNDE (yanlış negatif yok)
Jadlā’ → Akçakale kenarı DURUYOR
sınav ARAC-DEVRALMA-DONGU-SINAV-1004.py: 8/8 geçti
```
Sınav iki yönde: ① sahte kenar düştü; ② bilinen iki gerçek çevrim ve doğru yönlü kenar yerinde kaldı.

## 6. Sahiplik
- Veri kayıtları: `data/yerlesimler_ek25.js` (Akçakale) ve `data/yerlesimler_sinir_guney.js` (Jadlā’). İkisi de `girdi.GIRDI_DOSYALARI`nda (93 dosya). §7'ye göre `yerlesimler*.js` **Oturum 0 / YILDIRIM BAYEZIT**'indir. Ancak bu önerinin veriye dokunması gerekmiyor.
- Önerilen değişikliğin dosyası `denetim/ARAC-DEVRALMA-DONGU-1004.py`. Aletin sahibi DEVRALMA-DONGU-1004 oturumu (`a5cf4f1a`, koordinatör sevki). Uygulama hükmü koordinatörde.
- "Sahibi yok" denen **borç** (Akçakale'nin kaynaksız iki ucu) KASA-ZINCIR / HUKUM-DEVRALMA-1004 hattına aittir.

## 7. Bulunamadı
- `denetle.py`de devralma çevrimi denetimi (yok, alet bağımsız).
- Jadlā’nın kendi 1281-1923 tarihi için kaynak (kayıt "ARAŞTIRILMADI" diyor; bu görevde aranmadı).
