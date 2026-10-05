# UMIT-W8-DALGA3-1006 — kaynaksızlık ölçümü `isg:` okusun · işgal bölgelerinin bitiş günü

Ağaç `C:\atlas-w8`: origin/main `45f6a33c` + D7-ISG-1006 + ZINCIR-KAYNAGI-KAPI-1006 (ardışık
`--check` ✓, uygulandı). Ürün `denetim/KAYNAKSIZLIK-ISG-1006.diff`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (kod yazılmadan)
Taban ölçüm (bu ağaç, POLONYA-ISG yok): 269 `isg:`'li kayıt · 368 `isg:` dönemi · 96 dönemin
kendi `kaynak:`'ı yok · 53'ünde ne dönemde ne kayıtta kaynak var · `isg:` taşıyıp `s:`
taşımayan kayıt 0. `s:` kovaları: s_tasiyan 4147 · kayıt-kaynaksız 2301 · dönem-içi 371 ·
hiçbiri 1930.
- Ö1 Tasarım: `isg:` kaynaksızlığı AYRI kova (dönem bazlı, anahtar `dosya|ad|f|d`), `s:`
  kovasıyla TOPLANMAZ. Sebep öngörüsü: `isg:` kaynağını `s:` "dönem-içi" saymak, egemenlik
  zincirinin kaynaksızlığını gizler.
- Ö2 POLONYA-ISG uygulanınca `s:` hiçbiri 1930 → **1935 kalır** (ayrı tasarımda). Beş üye:
  Łódź · Częstochowa · Kielce · Radom (Polonya) · Varşova (`yerlesimler.js`; dönem-içi →
  hiçbiri). Beşi de KASA öncesi kaynaksızdı ⇒ hiçbiri defterindeler ⇒ kapı ÖTMEZ.
- Ö3 Toplam tasarımda (`isg:` kaynağı dönem-içi sayılırsa) 1935 → 1930'a döner.
- Ö4 `isg:` kaynaksız (dönem+kayıt) 53 → POLONYA-ISG ile **53** (sekiz kaydın yeni `isg:`'lerinin
  hepsi kaynaklı).

## İŞ 1 — KAYNAKSIZLIK-ISG-1006.diff (243 satır, LF, CR 0)
Ardışık sınav (taze origin/main `45f6a33c`): D7-ISG → ZINCIR-KAYNAGI-KAPI → KAYNAKSIZLIK-ISG ✓ ·
`-R` ✗ · POLONYA-ISG-1006 da üstüne ✓.
`arac/denetle.py`:
- `kaynaksizlik_isg_olc(Y)` — dönem bazlı, anahtar `dosya|ad|f|d`. Ölçüt: dönemde VE kayıtta
  `kaynak:` yok ⇒ kaynaksız (`s:` kovasının kayıt düzeyi mantığıyla aynı). Bilgi: dönemin kendi
  kaynağı yok.
- `_kaynak_isg_rapor` — `kaynak_tavan_rapor`'un sonunda ayrı satır. `KAYNAK-TAVAN.json`'da
  `isg_defter` VARSA üyelik kapısı (yeni üye = gerileme, ihlal); YOKSA yalnız BİLGİ. `isg:` yoksa
  ve defter de yoksa hiçbir şey basmaz (isg:'siz çıktı birebir).
- `kaynak_tavan_indir` — `isg_defter` varsa aynı kurala bağlı: yeni üye → RED, iyileşme →
  defter DARALIR; yoksa dokunmaz (ilk defter elle, D255).
- `denetim/ARAC-KAYNAKSIZLIK-ISG-SINAV-1006.py` (diff'te).

### Ayrı mı, toplam mı — ÖLÇÜLDÜ
| tasarım | `s:` hiçbiri (POLONYA'sız) | POLONYA-ISG ile |
|---|---|---|
| B — AYRI kova (diff) | 1930 | **1935** (+5, beşi adıyla aşağıda) |
| A — `isg:` kaynağı `s:` dönem-içi sayılır | **1823** | **1823** |

A, POLONYA'nın beşini geri çekmekle kalmıyor; bugün `s:` zinciri kaynaksız ama işgali kaynaklı
**107 kaydı** daha hiçbiri'nden çıkarıyor — egemenlik zincirinin kaynaksızlığını GİZLER. `isg:`
kaynağı işgali tarihler, zinciri değil ⇒ **B önerilir (diff B'dir).** D265'e de uygun: iki soru, iki sayı.

### ÖNCE/SONRA — POLONYA-ISG uygulanmışken 1935 nereye dönüyor? (üyelikle)
- `s:` hiçbiri 1930 → 1935, +5 (dönem-içi 371 → 366, aynı beşi): `yerlesimler.js|Łódź` ·
  `|Częstochowa` · `|Kielce` · `|Radom (Polonya)` · `|Varşova`. **B'de 1935 kalır**; A'da 1823.
- Beşi de `hicbiri_defter`de (KASA öncesi kaynaksızdı) ⇒ kapı ÖTMEZ; gerileme değil, geri dönüş.
  Kalıcı çaresi zincire kaynak yazmak (Rus egemenliği 1815-1918), `isg:` değil.
- `isg:` kaynaksız: 53 → 53 (POLONYA'nın 10 yeni `isg:` döneminin hepsi kaynaklı; dönem 368 → 378).
- Tam `denetle.py` (POLONYA + D7 + ZINCIR uygulanmış; ÖNCE = KAYNAKSIZLIK'sız): tek fark iki
  yeni BİLGİ satırı; öteki bütün satırlar birebir; ikisi de çıkış 2 (taze ağaçta D8).

### Tavan — ÖNERİ (yazılmadı)
`KAYNAK-TAVAN.json` → `"isg_defter"`: bugünkü 53 üye, liste
`denetim/KAYNAKSIZLIK-ISG-DEFTER-ONERI-1006.json`. Dağılım: **51'i Mısır 1914-12-18 ingiltere**
(himaye; `yerlesimler_afrika.js` 44 + `yerlesimler.js` 7) · İbrail 1828-06-23 rusya · Mengo
(Buganda) 1900-01-01 ingiltere (`1900-01-01` yılbaşı günü — D210 açısından ayrıca bakılmalı).
Ayrıca `s:` tavanı gevşek: hiçbiri 1968 → 1935 (`--kaynak-tavan-indir`; benim işim değil).

### Sınav — GEÇTİ (çıkış 0)
YÖN 1: kaynaksız isg defterde yok → ÖTER ✓ · defterde var → susar ✓ · kaynaklı isg → susar ✓ ·
kayıt düzeyi kaynak → susar ✓ · defter yok → susar + BİLGİ ✓ · `s:` kovaları isg kaynağından
etkilenmez ✓ · indir: yeni isg üyesi → RED ✓ · indir: iyileşme → `isg_defter` daralır ✓.
YÖN 2: yapay isg'siz → eski/yeni stdout + dönüş birebir ✓ · gerçek veri (4299 kayıt, 276'sından
isg silindi, gerçek tavan dosyası) → birebir ✓.
Ek: mevcut `ARAC-KAYNAK-TAVAN-SINAV-1004.py --hizli` 16/17 — KALAN S1 (taban öngörüsü
4298/4146/…/1968 bayat; ölçülen 4299/4147/2301/366/1935). **origin/main denetle.py ile de aynı
S1 kalıyor** ⇒ veri kayması, bu diff'ten değil. S1'in tabanı güncellenmeli (sınav sahibinin işi).

## İŞ 2 — iki işgal bölgesinin bitiş günü (YALNIZ ÖLÇÜM, veri yazılmadı)
Yöntem: yayıncının kendi sunucusundan PDF, `pdftotext`, cümle geri okundu.

### Avusturya — MGGP Lublin: **1918-11-03** (yetki devri), kaynaklı
Jan Lewandowski, "Lubelscy c. i k. generałowie-gubernatorzy (1915–1918)", *Annales UMCS* sec. F
LXVIII (2013) — https://journals.umcs.pl/f/article/download/388/387
> "Od 1 października 1915 r. do 3 listopada 1918 r. Lublin był siedzibą c. i k. Generalnego
> Gubernatorstwa Wojskowego w Polsce"

> "3 listopada przesłał na ręce Rady Regencyjnej pismo o przekazaniu pełni władzy na terenie
> okupacji"

Aynı sayfada: 1 Kasım bildirisi ekonomik işlerin 3 Kasım'da Polonya komiserlerine geçeceğini
söylüyor; 2 Kasım'da Lipošćak subayları yeminden çözdü; son Avusturya nakli 11 Kasım'da
Lublin'den ayrıldı. ⚠️ Cümle bölgenin (MGGP) devrini tarihliyor; Radom, Kielce, Chełm, Zamość
için şehir günü AYRICA yok (D211 ⑧).

### Alman — GG Warschau: **1918-11-11**, kaynaklı (bölge düzeyinde)
Krzysztof Kozicki (Centralne Archiwum Wojskowe), "Listopad 1918 – raporty i relacje z akcji
rozbrajania Niemców", *Niepodległość i Pamięć* 15/2 (28), 2008, s. 205–218 —
https://bazhum.muzhp.pl/media/texts/niepodlegosc-i-pamiec/2008-tom-15-numer-2-28/niepodleglosc_i_pamiec-r2008-t15-n2_28-s205-218.pdf
> "W dniu następnym Rada Regencyjna Królestwa Polskiego przekazała J. Piłsudskiemu władzę wojskową."

(10 Kasım'ın ertesi = 11 Kasım.) Aynı sayfada: silahsızlandırma Varşova dışına yayıldı, Łódź
adıyla anılıyor; toplu silahsızlandırmayı duyan Beseler Varşova'dan ayrıldı. Tanıklıklar
silahsızlandırmayı 10/11 Kasım gecesine tarihliyor. ⚠️ Częstochowa için gün yok; Łódź için
gün verilmiyor.
- **1914-1918-online "Generalgouvernement Warschau"**: Anubis bot doğrulaması → açılmadı,
  aşılmadı (oturum kuralı). Ölçülemedi.

### Boşluk ölçümü — bitiş → 1918-11-11 `s: polonya`
- **Alman bölgesi (Varşova, Łódź, Częstochowa):** bitiş 1918-11-11 = `polonya` künyesinin `f:`'si
  ⇒ boşluk **0 gün**. Bugünkü `t:"1918-11-11"` artık KAYNAKLI yazılabilir (öneri: `kesinlik t`
  "belirsiz" → "gun", kaynak Kozicki 2008; Częstochowa ve Łódź için "bölge düzeyi" notu).
- **Avusturya bölgesi (Lublin, Radom, Kielce, Chełm, Zamość):** bitiş 11-03 → `polonya` 11-11 ⇒
  **8 gün**. Ölçüldü: `polonya` künyesi `f:"1918-11-11"` (devletler.js:4109); o 8 günde `s:`
  zincirinin sahibi **`sovyet-rusya`** (künye 1917-11-07'den) ⇒ `isg:`'yi 11-03'te bitirmek beş
  kayıtta 8 günlük SAHTE Sovyet egemenliği gösterir — koordinatörün (a) hükmü bu ölçümle doğru.
  Bu 8 günün gerçek sahibi Naiplik Konseyi'nin Polonya Krallığı (Lublin'de 7 Kasım'dan Daszyński
  hükûmeti); atlasta künyesi YOK (`devletler.js` tarandı: `kongre-polonyasi` 1917-03-15'te biter;
  naiplik/regency kimliği yok).
  Seçenekler (hüküm sizde): (a) bugünkü hâl — `isg:` 11-11'e kadar, 8 gün fazla, beyanlı; kaynak
  metnine "Lewandowski 2013: yetki devri 3 Kasım; 3–11 Kasım künyesiz Polonya idaresi" eklenmeli ·
  (b) `polonya` künyesini 1918-11-03'e çekmek — farklı yapı (sınıf ② değil), bütün `polonya`
  kayıtlarını etkiler, ÖNERMİYORUM · (c) 3–11 Kasım `__BOSLUK__` — orada bir yönetim VARDI,
  `__BOSLUK__`'un anlamına uymuyor. ⇒ **(a) + kaynak notu öneriyorum.**

## Öngörü sınavı (§0)
Ö1 ✓ · Ö2 ✓ (1935 kalır, beşi adıyla, defterde, ötmez) · Ö3 **kısmen çürüdü**: toplam tasarım
1930'a değil **1823**'e iniyor — 107 kayıt daha gizlenir (öngörmediğim büyüklük) · Ö4 ✓ (53 → 53).

## Dosyalar
- `C:\atlas-umit\denetim\KAYNAKSIZLIK-ISG-1006.diff` — arac/denetle.py + yeni
  denetim/ARAC-KAYNAKSIZLIK-ISG-SINAV-1006.py (taban: origin/main + D7-ISG + ZINCIR).
- `C:\atlas-umit\denetim\KAYNAKSIZLIK-ISG-DEFTER-ONERI-1006.json` — önerilen `isg_defter` (53).
- Bu rapor. Commit YOK. Motor tuzuna dokunulmadı. Veri yazılmadı.

## DALGA 3b — POLONYA-BITIS-1006 (Alman bölgesi 3 kayıt)
ÖNGÖRÜ (yazmadan önce): yalnız `kesinlik` ve `kaynak` metni değişir, hiçbir gün değişmez ⇒
`denetle.py` özet satırları birebir; kaynaksızlık `isg:` 53 → 53 (üçü zaten kaynaklı).
SONUÇ: `denetim/POLONYA-BITIS-1006.diff` (24 satır, LF, CR 0) — yalnız `data/yerlesimler.js`,
yalnız Łódź · Częstochowa · Varşova. Her birinin `isg:` dönemi: `kesinlik:{f:"gun",t:"belirsiz"}`
→ `kesinlik:"gun"`; kaynak metnindeki "t: KAYNAKSIZ …" → Kozicki 2008 alıntısı + "GG Warschau
BÖLGE düzeyinde gün" (Łódź: şehir günü verilmiyor · Częstochowa: şehir günü yok notu). Gün
DEĞİŞMEDİ (1918-11-11). Avusturya bölgesinin beş kaydına DOKUNULMADI (boşluk kararı bekliyor).
Zincir (taze origin/main `78c74b80`): ZINCIR-KAYNAGI-VERI-1006c → CRES-NOT-1006 → POLONYA-ISG-1006
→ POLONYA-BITIS-1006 ✓. Tam `denetle.py` ÖNCE/SONRA: özet satırları BİREBİR (ikisi de çıkış 2, D8).
Öngörü ✓.
