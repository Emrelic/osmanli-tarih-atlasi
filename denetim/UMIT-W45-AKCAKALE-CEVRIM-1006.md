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

---

# EK — kalan iki güçlü çift: Brod ⇄ Dubiça · Dimetoka ⇄ Sofulu (6 Ekim, devam görevi)

**Temel commit: `9e71c58b`** (atlas-umit HEAD). Ölçülen veri dosyaları (`yerlesimler.js` · `_ek24.js` · `_ek29.js` · `olaylar.js`)
`d0877829`, `c8ca01eb` ve `9e71c58b`de **aynı** (`git diff --stat` boş). Kenar listesi, ana raporun d0877829 alet koşusunun JSON'undan alındı.
**YALNIZ ÖLÇÜM, veri yazılmadı.** Akçakale'nin kaynaksız uçları bu eke katılmadı.
Okunan dış kaynaklar: TDV `dimetoka` · TDV `meric` · TDV arama "Dimetoka 1915" · HE `bosanski-brod` · HE `kozarska-dubica`. HE `brod` da açıldı ama yanlış madde çıktı (Ortaçağ župası; §4 tuzak ②).

## Öngörü (ölçümden önce)
İki çiftte de **olgu düzeyinde döngü olmadığını** tahmin ettim (DEVRALMA-DONGU-1004 §1.1: iki yön farklı tarihleri taşıyor).
Değeri olan ihlalin §4 ① (kaynaksız komşu) olacağını, D207 zincirlemesi çıkmayacağını bekliyordum.
**Tuttu**, iki farkla:
- Brod yönünde ① değil **②** düşüyor: Brod'un kendi kaynağı var.
- Dimetoka'da çevrimin dışında **sahiplik düzeyinde bir şüphe** çıktı (aşağıda).

## B — Bosna Brod'u ⇄ Bosna Dubiçası (`data/yerlesimler_ek29.js`)
| yön | dosya:satır · alan | devralınan | uçtaki kaynak | §4 |
|---|---|---|---|---|
| Brod → Dubiça | `:300` kayıt `kaynak` "komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi" · `:296` `neden` · değer `:297` `d[0].f` + `:298` `s[1].t` = **1538-01-01** | YIL 1538 (fetih) | Dubiça'nın 1538'i **HE `kozarska-dubica`**: *"1538. pala je pod osmansku vlast"* (okundu). `:277`deki "Wikipedia 'Battle of Dubica'" atfı zayıf ama tek dayanak değil, `:275` `s[0].kaynak` HE'yi anıyor ⇒ ① sağlanıyor | **② DÜŞER.** Brod'un KENDİ kaynağı var: **HE `bosanski-brod`: *"Osmanlije su ga zauzeli 1536."*** (okundu). Kayıt da `:298` `s[0].kaynak`ta "Osmanlı 1536 (atlas 1538 — çelişki raporda)" diyor. Kaynakta yıl VARKEN komşudan devralınmış |
| Dubiça → Brod | `:274` `d[0].t` · `:275` `s[2]` · `:274` `d[1].f`: üçü de "gün komşudan: Bosna Brod'u (… TDV bosna-hersek · mahmud-i--osmanli)" | **1718-07-21** (d[0].t, s[2].f) · **1739-09-28** (s[2].t, d[1].f) | **1739-09-28:** Brod `:297` `d[1].kaynak` = TDV `mahmud-i--osmanli` "28 Eylül 1739" + Karlofça ⇒ ① sağlanıyor, ④ biçimi doğru. **1718-07-21: Brod'da kaynak YOK** (`d[0]`, `s[2]` kaynaksız) ⇒ **① düşer** | ③ aynı antlaşma. Gün = Pasarofça, külliyatta var: `olaylar*.js` `t:"1718-07-21"` "Pasarofça Antlaşması…" `kaynak:"pasarofca-antlasmasi"` |

- **Veri döngüsü mü?** HAYIR. Brod Dubiça'dan **1538**'i, Dubiça Brod'dan **1718/1739**'u alıyor; aynı değer dolaşmıyor.
- **Tesadüfî eşleşme mi?** O da HAYIR. 1718/1739 antlaşma günleri, 1538 HE'nin Dubiça yılı.
- Çevrimin bedeli: Brod'un 1718-07-21'i kaynaksız, Dubiça da onu "komşudan" diye taşıyor. Gerçek dayanak külliyattaki Pasarofça maddesi ama hiçbir kayıt onu adıyla anmıyor.
- **D207 zincirleme:** **YOK.** Komşu kenarlar (JSON):
  - Jasenovaç → Dubiça: 1538, Dubiça'nın HE'sine bir adım.
  - Brod/Dubiça → Sisak · Zagreb: ZAYIF, künye ucu anışı.
  - Dubiça → Belgrad: metin anışı.
  - İki adımlı devralınmış değer yok. İhlal D207'nin YASAK satırında değil, **ŞARTLAR** satırında: Brod 1538 ②, Dubiça 1718-07-21 ①.
- **Harita:** çevrimin (metnin) etkisi yok. Ama **Brod'un 1538'i yanlış yıl**: kendi kaynağı 1536 diyor ⇒ 1536–1538 arası `avusturya` boyalı, Osmanlı olmalı (2 yıl, tek petek).
- **En küçük kırma (ÖNERİ, uygulanmadı, dosya Oturum 0'ın):**
  1. **Brod `:297` `d[0].f` + `:298` `s[1].t`: 1538-01-01 → 1536-01-01**, kaynak HE `bosanski-brod` (yıl ⇒ `YYYY-01-01`). `:296`/`:300`deki "komşu emsali (Dubiça)" cümleleri düşer. **Brod → Dubiça kenarı kalkar, çevrim kırılır.**
     ⚠️ **Değişmez 2 bedeli:** 1536-01-01 ±30 gün içinde kronoloji maddesi YOK. En yakınları 1535-11-01 (Milano) ve 1536-02-18 (kapitülasyon, 48 gün). Bugünkü 1538-01-01 kırılması `olaylar*.js` `t:"1538-01-01" kesinlik:"yil" k:"kayip"` maddesine yaslanıyor. Yeni bir **açık Osmanlı kırılması** doğmaması için aynı hamlede bir kronoloji maddesi gerekir ("Brod'un Osmanlılarca alınması · 1536 · HE bosanski-brod"). O dosya kronoloji sahibinin.
  2. (Çevrim için ŞART DEĞİL, ① için ayrıca) Dubiça `:274`/`:275`te 1718-07-21'in beyanı "gün komşudan: Bosna Brod'u" yerine **"gün olaydan: Pasarofça Antlaşması 1718-07-21 · TDV pasarofca-antlasmasi"** olmalı. Brod `:298` `s[2]`ye de aynı kaynak yazılmalı. 1739-09-28 beyanı geçerli, kalır.
     ⚠️ Önce TDV `pasarofca-antlasmasi`/`bosna-hersek`te Dubica/Brod'un ya da Sava şeridinin **adıyla** anıldığı okunmalı (§4 tuzak ⑧). **Bu görevde OKUNMADI.**
  - **Kaynak:** 1 için HE okundu, yeterli. 2 için TDV cümlesi okunmalı.
- 📌 Kapsam dışı ama ölçüldü: HE `kozarska-dubica` *"više puta dolazila pod vlast Austrije (1687–1701., 1716–41. …)"* diyor; atlasta Dubiça 1538→1718 **kesintisiz Osmanlı**. `:277`deki Karlofça "drawn out" metni de 1699'a kadar Avusturya garnizonunu destekliyor. D206 sınıfı aday, sevk bekler.

## D — Dimetoka ⇄ Sofulu (Soufli)
| yön | dosya:satır · alan | devralınan | uçtaki kaynak | §4 |
|---|---|---|---|---|
| Dimetoka → Sofulu | `data/yerlesimler.js:329` kayıt `kaynak` "1913-05-30 komsu SOFULU kaydindan (12 km)" (GÜÇLÜ) + `neden` "Gun zaten hizaliydi (Sofulu ve Dedeagac ile ayni)" (ZAYIF) · değer `s[5].f` | GÜN 1913-05-30 (`bulgaristan-kralligi` başı) | Sofulu `data/yerlesimler_ek24.js:64` `s[5]`: **kaynak alanı YOK** ⇒ **① düşer** (KASA-ZINCIR B kovası) | Gün = Londra Antlaşması, külliyatta var (`olaylar*.js` `t:"1913-05-30"` "Londra Antlaşması — Rumeli'nin kaybı"); kayda adıyla yazılmamış |
| Sofulu → Dimetoka | `data/yerlesimler_ek24.js:65` `d[0].kaynak` "gün komşudan: Dimetoka · TDV dimetoka — Orta Meriç bölgesinin tamamı" | YIL 1361 | Dimetoka `:329` `d[0].kaynak` TDV `dimetoka`, **okundu:** *"…zaptı 1361'de, Hacı İlbey liderliğinde…"* · *"Osmanlılar, Orta Meriç bölgesinin tamamını kontrol altına alarak…"* | ①②③④ sağlanıyor. Bölgesel hüküm TDV'de var. Cümle "ardından" diyor, YIL düzeyinde kabul edilebilir |

- **Veri döngüsü mü?** HAYIR. Dimetoka Sofulu'dan **1913**'ü, Sofulu Dimetoka'dan **1361**'i alıyor; Sofulu yönü temiz.
- **Tesadüf mü?** Değil: 1913-05-30 Londra Antlaşması günü. Ama Sofulu'da kaynağı yazılmamış, Dimetoka da onu Sofulu üzerinden taşıyor.
- Aynı kaynaksız uçtan **Ferecik** de besleniyor: `yerlesimler.js:1474`, "1913-05-30 komsu SOFULU ve DEDEAGAC kayitlarindan", ZAYIF kenar.
- **Meriç (İpsala kuzeyi)** (`_ek24.js:56`) Dimetoka'dan 1361'i alıyor; o uç TDV'li.
- **D207 zincirleme:** **YOK.** İhlal ŞARTLAR satırında: Dimetoka 1913-05-30 ①.
- **Harita:** çevrimin (metnin) etkisi yok.
- 🔴 **AMA TAŞINAN DEĞER ŞÜPHELİ (D206 sınıfı aday, ölçüldü, hüküm verilmedi).** Atlas Dimetoka'yı **1913-05-30 → 1920-05-27 kesintisiz `bulgaristan-kralligi`** gösteriyor; Sofulu da 1913-05-30 → 1920-05-14.
  - TDV `meric` (okundu): *"6 Eylül 1915'te Sofya'da imzalanan Osmanlı-Bulgar Antlaşması'nda Meriç'in sol kıyısındaki 2 km. genişliğinde bir şeridin Bulgaristan'a verilmesi … kararlaştırılmıştır."*
  - TDV arama parçası (`birinci-dunya-savasi`): *"Osmanlı Devleti'nden Dimetoka'nın bir bölümünü almışlardı"*.
  - ⇒ Dimetoka (Meriç'in batı kıyısı) **1913 sonu – 1915-09-06 arası Osmanlı'daydı** ihtimali güçlü: ~2 yıllık sahiplik hatası.
  - TDV `dimetoka` 1913/1915'i ayrıntılamıyor; Yunanistan'a bağlanmayı **1922** veriyor. Atlas 1920-05-27 diyor ⇒ ikinci çelişki, §4 ⑥ olarak bildiriliyor.
  - Okunmadı, dolayısıyla **ölçülemedi**: `birinci-dunya-savasi`nin tam cümlesi, 1913 İstanbul Antlaşması'nın Dimetoka hükmü ve Sofulu'nun 1913 sınırında hangi yakada kaldığı.
- **En küçük kırma (ÖNERİ, yalnız METİN, harita değişmez):** Dimetoka `:329` kayıt `kaynak`ında "komsu SOFULU kaydindan (12 km)" yerine **"Londra Antlaşması (külliyat maddesi)"**; `neden`deki "(Sofulu ve Dedeagac ile ayni)" yerine "Londra günüyle hizalı". GÜÇLÜ ve ZAYIF iki kenar birlikte düşmeli; yalnız GÜÇLÜ düşerse alet ZAYIF aday çevrim sayar.
  ⚠️ **ŞİMDİ UYGULANMAMALI:** 1913–1915 şüphesi doğruysa bu dönem zaten bölünecek; metni Londra'ya bağlamak yanlış dönemi "kaynaklı" gösterir.
  **Sıra:** TDV `birinci-dunya-savasi` + `edirne` (1913 İstanbul sınırı) okunur → Dimetoka/Sofulu 1913–1915 sahipliği ölçülür → sonra beyan yazılır.
  - **Kaynak:** 1913–1915 için EVET gerekiyor; 1361 yönü için hayır.

## Özet
| çift | veri döngüsü | D207 zincirleme | §4 şart ihlali | harita | en küçük kırma | kaynak |
|---|---|---|---|---|---|---|
| Brod ⇄ Dubiça | YOK (1538 ↔ 1718/1739) | YOK | Brod 1538 ② · Dubiça 1718-07-21 ① | Brod 1536–38 yanlış sahip | Brod 1538→**1536** + kronoloji maddesi (D2) | HE okundu, yeter |
| Dimetoka ⇄ Sofulu | YOK (1913 ↔ 1361) | YOK | Dimetoka 1913-05-30 ① | çevrimden yok · **değer şüpheli 1913–15** | metni Londra'ya bağla, AMA 1913–15 ölçülmeden değil | EVET |
Diff yazılmadı: iki kırma da VERİ değişikliği, alet doğru çalışıyor.

---

# EK-2 — iki öneri diff'i (UMIT İRTİBAT sevki, koordinatör onaylı · 6 Ekim)
**Temel: origin/main `d0f3cda1`.** Diff'ler `c57b59bc` üzerinde üretildi ve `d0f3cda1`de yeniden sınandı. Geçici worktree `C:\atlas-w45` kaldırıldı.
`git apply --check` sonuçları: BROD ✓ · DUBICA ✓ · ikisi art arda ✓.

## ① `denetim/UMIT-W45-BROD-1536-1006.diff`
**Değişen dosyalar:**
- `data/yerlesimler_ek29.js` hunk `@@ -293,11`: yalnız Brod kaydı, satır 295-300.
  - `neden` "1281-1536 arası".
  - `d[0].f` 1538-01-01 → **1536-01-01**, kaynak HE `bosanski-brod` + TDV `pasarofca-antlasmasi`.
  - `s[1].t` → 1536-01-01.
  - `s[2]` (1718-07-21→1739-09-28) KAYNAK kazandı: TDV `pasarofca-antlasmasi` *"…Kuzey Bosna tamamen Avusturya'ya bırakılmıştır"* + TDV `mahmud-i--osmanli`.
  - Kayıt `kaynak` alanından "komşu emsali (Bosna Dubiçası, 1538)" cümlesi düştü.
- `data/olaylar_p0917kosu13.js` (index.html'e bağlı, `window.OLAYLAR_P0917KOSU13`): yeni madde `t:"1536-01-01" kesinlik:"yil" k:"fetih"` "Sava kıyısındaki Brod (Bosanski Brod) Osmanlılarca alındı".
  - `gun:` **"ay ve gün BİLİNMİYOR"** yazıyor.
  - `kaynak:"Hrvatska enciklopedija — bosanski-brod"`, alıntı `ic_not_gun`da: *«Osmanlije su ga zauzeli 1536.»*
  - `yer_id` = "Bosna Brod'u (Bosanski Brod)" (kayıt adıyla birebir).

## ② `denetim/UMIT-W45-DUBICA-1718-1006.diff`
**Değişen dosya:** `data/yerlesimler_ek29.js` hunk `@@ -271,8`. Değişen satırlar **yalnız 274 (`d:`) ve 275 (`s:`)**, ve **yalnız `kaynak` METNİ**. Hiçbir tarih, `isg:` öğesi ya da satır 272 değişmedi.
- `d[0]` (1538→1718-07-21) kaynak:
  - f: HE `kozarska-dubica` *«1538. pala je pod osmansku vlast»*
  - t: **TDV `pasarofca-antlasmasi`** (imza 22 Şâban 1130 / 21 Temmuz 1718), "gün antlaşmanın KENDİ kaynağından".
- `s[2]` (1718-07-21→1739-09-28):
  - f: aynı TDV.
  - t: "gün komşudan: Bosna Brod'u · TDV mahmud-i--osmanli (28 Eylül 1739)". Bu §4 ①-④ şartlı geçerli beyan; kaldı.
- **1718-01-01'e düşürülmedi:** kaynak bulundu ve günü veriyor. Düşürmek sahte kabalık olurdu (§4 D210) ve 1718-07-21'deki kronoloji eşleşmesini bozardı.
- Sevkin "D207 zincirleme" çerçevesi düzeltildi: ölçülen ihlal komşunun komşusu değildi, §4 ① idi (Brod'un 1718 günü kaynaksızdı).

## Ölçüm — `denetle.py`, `d0f3cda1`, önce → iki diff birlikte
| | önce | sonra |
|---|---|---|
| çıkış kodu | 2 | 2 (önceden var olan "ÖLÇÜLEMEYEN SORU: 1" — diff'ten bağımsız) |
| Değişmez 1 | 309 sahipsiz | 309 |
| Değişmez 1b | 0 | 0 |
| **Değişmez 2** | 623 kırılma · **0 açık** | 624 kırılma · **0 açık** |
| Değişmez 2s | 187 AÇIK · 792 KD · 165 YIL-TEMSİLÎ | **aynı** |
| Değişmez 2i / 2t | 1 / 13 | aynı |
| kronoloji | 2187 | 2188 |
| 2sk MASKE (bilgi) | 1646 | 1647 |

📌 **Ara ölçüm (yalnız Brod tarihi, kronoloji maddesi YOK, `c57b59bc`):** Değişmez 2 açık 0 kaldı, ama 2s **YIL-TEMSİLÎ BORÇ 165 → 166**, KAPSAM DIŞI 792 → 791 oldu.
⇒ Kronoloji maddesi o borcu kapatıyor; iki değişiklik **aynı commit'te** inmeli (§3.4 ②).
- **Çevrim aleti**, iki diff birlikte, `d0f3cda1`: Brod ⇄ Dubiça **KAPANDI**. Kalan tek çevrim Dimetoka ⇄ Sofulu (dokunulmadı). Akçakale de düştü (alet yaması `d0f3cda1`de inmiş).
- 📌 Ara bulgu: ilk sürümde tarihçe notları ("eski değer 1538 komşu emsaliydi (Bosna Dubiçası)") aleti yeniden tetikledi ve çevrim geri geldi. Notlar sadeleştirildi; açıklama bu raporda.

## ⚠️ W46 ile çakışma
DUBICA hunk'ının bağlamı satır 271-278. W46'nın Dubiça `isg:` önerisi (satır 272, `{1687→1701 avusturya}`) bu bağlama düşüyor ⇒ hangisi ikinci uygulanırsa `--check` bağlam uyuşmazlığı verir.
İçerik çakışması YOK: ben yalnız 274/275'in kaynak metnine dokunuyorum. Çözüm sıralama: biri uygulanır, öteki yeni temelde yeniden üretilir (`w45_dubica.py` dizgi değiştirmesi bağlamdan bağımsız).
- BROD diff'i W46'dan etkilenmez: satır 293-303 ve kronoloji dosyası.

## Bulunamadı
- Brod 1536 fethinin ay/günü.
- HE `brod` maddesi (s[0]/s[1]de "HE 'Brod'" olarak anılan) Ortaçağ **župa**sı, Bosanski Brod kalesi değil (§4 tuzak ②). Bu metne dokunulmadı; ayrı kalem.
