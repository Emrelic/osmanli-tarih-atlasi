# KOMSU-YAN-1006 — KOMSU-KESINTI-10'un dört yan bulgusu: ölçüm + öneri

**Temel:** `origin/makine/umit` `3ec79a5f` (ağaç `C:\atlas-p84-komsuyan`, `--detach`). UYGULAMA YOK.
Diff'ler: `denetim/KOMSU-YAN-1006-KOORD.diff` (yerleşim, 3 dosya · koordinatör) · `denetim/KOMSU-YAN-1006.diff`
(kronoloji, 2 dosya · UMIT). İkisinde de `git apply --check` temiz, CR 0. Motor tuzu dosyalarına dokunulmadı.
Bütün TDV okumaları 6 Ekim 2026'da yapıldı; tırnak içindeki her şey gövdeden birebir alındı.

🔴 **İKİ DİFF AYNI COMMIT'TE İNMELİ (`§3.4 ②`).** Yerleşim diff'i tek başına inerse üç kırılma maddesiz kalır:
Gelibolu `savoya→bizans` 1367-06-14 (2s) · 1807-09-19 İngiliz `isg` sonu (2i, iki nokta) · İzmir 1424-01-01 (2: kapıdan
yalnız ilgisiz Aynaroz maddesiyle geçer, anlamca maddesiz). Kronoloji diff'i tek başına inerse yeni maddeler kırılmasız kalır
(2t).

## Denetim — önce / sonra (`py arac/denetle.py`, kendi ağacımda, iki diff birlikte uygulanmışken)
| ölçü | önce | sonra |
|---|---|---|
| çıkış kodu | **2** (D8 ölçülemedi: `devletler_harita.js` taze ağaçta yok) | **2** (aynı sebep — yeni ihlal yok) |
| kronoloji maddesi | 2200 | 2203 |
| Değişmez 2 | 623 kırılma · 0 açık | 624 · **0 açık** |
| Değişmez 2s | 1720 · 186 açık (tavan 189) | 1722 · **186 açık** |
| Değişmez 2i | 171 · 1 açık (tavan 1) | 173 · **1 açık** |
| Değişmez 2t | 13 (tavan 13) | 13 |
| Değişmez 7 | 733 sorgusuz enklav · beyan-muaf 77 | 733 · beyan-muaf **78** (Gelibolu `savoya enklav:true`) |
| mükerrer madde | 95 (tavan 95) | 95 |
| kaynaksız `s:` | 1929 (tavan 1930) | **1927** |
| `isg:` cebi (bilgi) | 34 | 36 (İskenderiye + Ebûkîr 1807) |

- ⚠️ **İlk deneme ihlal verdi, düzelttim:** 1807-09-19 maddesinin ilk başlığı ("…Fraser seferinin sonu") 17 Mart maddesiyle
  `[başlık]` mükerrer çifti oldu (96 > 95, çıkış 1). Başlığı değiştirdim, yeniden koşturdum: 95.
- 📌 **Tavan önerisi (`§3.4`, yazmak koordinatörün işi):** kaynaksız `s:` 1929 → 1927 (iki dönem kaynak kazandı: İzmir
  `aydin` ve Gelibolu 1367 `bizans`). Diff iniyorsa `BEKLENEN` 1930 → **1927** aynı commit'te iner. Yazmadan önce yeniden ölçülmeli,
  çünkü tavan bugün zaten 1 puan gevşek.

---

## ① 1807 İngiliz işgali — İskenderiye + Ebûkîr
**Bugünkü kayıt:**
- `data/yerlesimler.js:816` İskenderiye: `isg` yalnız 1798 Fransız + 1882/1914 İngiliz.
- `data/yerlesimler_afrika.js:161` Ebûkîr: `isg` yalnız 1882/1914 İngiliz.
- Maddeler: `olaylar_ek4.js:37` 1807-03-17 "İngiliz Fraser seferi İskenderiye'ye çıktı" · `:41` 1807-04-21 Reşid bozgunu.

**Kaynak:**
- TDV `iskenderiye`: *"Emîn Ağa da şehri İngilizler’e teslim etti (Mart 1807)."* · *"Bir süre sonra Osmanlı hükümetinin diplomatik girişimleri sonucunda İngiliz donanması İskenderiye’den çekilmiş (19 Eylül 1807) ve şehir tekrar Mısır eyaletine bağlanmıştır."*
- TDV `ebukir`: *"İstanbul önünden çekilen İngiliz donanması, intikam için Mart 1807’de İskenderiye ve Ebûkīr’i istilâ etti."*

**Küme (80 km tarandı):** yalnız **İskenderiye + Ebûkîr**.
- Reşîd (52 km) işgal edilmedi: `olaylar_ek4.js:41` İngilizlerin püskürtüldüğünü söylüyor; TDV `resid` slug'ı 302.
- Demenhûr ve Dessûk için kaynak yok ⇒ küme dışı, **ölçülemedi**.

**Fark:** İki noktada 6 aylık işgal yok.

**Öneri (KOORD diff):** iki noktaya `isg ingiltere` 1807-03-01 → 1807-09-19.
- Başlangıç **AY** hassasiyetinde: kaynak "Mart 1807" diyor, gün vermiyor. `1807-03-01` "ayın 1'i" değil, D213'e göre
  `kaynak:` metninde açıklandı.
  ⚠️ §4'ün katı okuması `1807-01-01` ister. Ama o gün işgali Duckworth harekâtından bile önceye taşır; yani güvenli değil,
  sahte erken olur. Hangisinin kullanılacağına koordinatör karar verir; diff `03-01` kullanıyor.
- Ebûkîr'in bitiş günü D207 şartlarıyla komşudan alındı ("gün komşudan: İskenderiye · TDV iskenderiye"): aynı olay
  (donanmanın çekilişi) · 19 km · hedef kaynakta gün yok · zincir yok.

**Değişmez 2i:**
- Başlangıç: 1807-03-17 maddesi +16 günde (anlamca aynı sefer) ✔.
- Bitiş: madde **YOKTU** ⇒ UMIT diff'i `olaylar_ek4.js`'e 1807-09-19 maddesini ekliyor (kaynak `iskenderiye`).

**Ek bulgular (bildirim; diff'te yok):**
1. **1807-03-17 maddesinin günü, gösterdiği kaynakta yok.** `olaylar_ek4.js:37` `kaynak:"misir"` diyor, ama TDV `misir`
   gövdesinde (231 bin karakter, bugün çekildi) "1807" de "Fraser" de geçmiyor. Aynı gün `kronoloji_misir.js:109`a
   *"zaten doğrulanmış"* notuyla kopyalanmış. ⇒ Günün kaynağı **bulunamadı**; madde silinmez, kaynağı aranmalı.
   Ayrıca bu gün bir çıkarma günü, teslim günü değil (TDV teslim için yalnız "Mart 1807" diyor).
2. **İskenderiye'nin `v: misir-kavalali` başlangıcı (1805-07-03) kaynakla çelişiyor olabilir.**
   - TDV `iskenderiye`: *"onun nüfuzu altına girmek istemeyen İskenderiye hâkimi Emin Ağa ve şehrin ileri gelenleri Mehmed Ali Paşa’nın yardımlarını geri çevirdi"*.
   - TDV `kavalali-mehmed-ali-pasa`: *"Ayrıca Mısır’ın sahil kısmı da (İskenderiye ve Reşîd) Mehmed Ali’ye bırakıldı."* — 1807 olaylarından SONRA.
   - ⇒ İskenderiye (ve Reşîd) 1805–1807'de Kavalalı'ya bağlı değildi. Devir günü **ölçülemedi**, bu yüzden öneri yok. Aday olarak not edildi.

## ② Herceg Novi 1538 faili
**Bugünkü kayıt:** `data/yerlesimler_ek.js:253` `isg:[{f:"1538-01-01",t:"1539-08-10",d:"ispanya",kaynak:"dalmacya · barbaros-hayreddin-pasa"}]`.

**Kaynak:**
- TDV `dalmacya`: *"Dalmaçya’nın güneyinde Castelnuovo Kalesi ise aynı yıl Andrea Doria tarafından zaptedilmiş, ancak bir yıl sonra Barbaros Hayreddin Paşa ve Bosna Beyi Gazi Hüsrev Bey’in gayretiyle geri alınmıştı."*
- TDV `barbaros-hayreddin-pasa`: *"Doria tarafından daha önce ele geçirilen Adriyatik kıyısındaki Nova da (Castelnuova) kolaylıkla geri alındı (10 Ağustos 1539)."*
- HE `herceg-novi`: *"a 1538. zauzeli su ga Mlečani"* (Venedikliler).

**Fark:**
- Atlas `ispanya` diyor; okunan **üç cümleden hiçbiri İspanya'yı ADIYLA anmıyor**. TDV bir kişi (Doria) adını veriyor,
  devlet adı vermiyor; HE Venedik diyor.
- Ayrıca atlasın `kaynak:` alanında yalnız slug adları vardı, cümle yoktu.
- Bu bir **çelişkidir** (iki kaynak). Taraf SEÇİLMEDİ.

**Öneri (KOORD diff):** `d:"ispanya"` **değişmedi**; yalnız `kaynak:` alanına üç cümle ve şu beyan yazıldı:
"okunan hiçbir kaynak İspanya'yı ADIYLA anmıyor — Doria'dan yapılmış bir ÇIKARIMDIR, taraf SEÇİLMEDİ".
Kimliği değiştirmek (`venedik`) taraf seçmek olurdu.
- Başlangıç 1538-01-01 yıl düzeyinde ve §4'e uygun; kaynak gün vermiyor. Bitiş 10 Ağustos 1539 TDV ile örtüşüyor ✔.

**Ek (bildirim):** Venedik dönemi başlangıcı için de iki kaynak ayrılıyor.
- TDV `dalmacya`: *"son olarak da 1686’da Castelnuovo’yu aldılar"*.
- HE `herceg-novi`: *"1687. opet je došao u mletački posjed"*.
- Atlas `s venedik` 1687-09-30 (`:248`). Hüküm vermedim.

## ③ İzmir — `s: aydin` bitişi
**Bugünkü kayıt:** `data/yerlesimler.js:174-175` `{"f":"1422-01-01","t":"1425-06-01","d":"aydin"}` + `d` 1425-06-01'den.
Kaynak alanı yok. Kırılma maddesi `olaylar_ek.js:45`, 1425-06-01, `gun:"1424-1426"`: bütün Aydın ve Menteşe için bir
**sentez günü**.

**Kaynak — rakamı taşıyan cümleler NEYİ tarihliyor:**
- TDV `izmir`: *"Cüneyd Bey, Çelebi Mehmed’in ölümünün ardından hapisten çıkarak Düzmece Mustafa olayına karışıp İzmir’i tekrar ele geçirdi; II. Murad 1424’te şehri kesin olarak zaptetti."*
  → **ŞEHRİN alınışını** tarihliyor.
- TDV `aydinogullari`: *"onu yakalattı ve ailesiyle birlikte idam ettirdi (829/1425-26). Böylece Aydınoğulları toprakları tamamıyla Osmanlı idaresi altına girdi."*
  → **Cüneyd'in idamını ve beyliğin bütününü** tarihliyor.
- TDV `cuneyd-bey`: *"bir süre sonra da bütün soyu sopu ile birlikte yok edildi (1426)"* → aynı olay.
- TDV `manisa`: *"Cüneyd Bey şehir yakınlarında Osmanlı kuvvetleri karşısında yenildi (827-828/1424-1425)"*.

**Fark:** Çelişki YOK — iki ayrı olay var: şehir 1424'te, beylik 1425/26'da. Atlas şehre beylik sonunun sentez gününü vermiş.
`1425-06-01`deki "06-01" hiçbir kaynakta yok; bu sahte kesinlik.

**Öneri:**
- KOORD diff: İzmir `aydin` t → **1424-01-01**, `d` f → 1424-01-01. YIL düzeyinde (§4); gerekçe `kaynak:` alanında.
- UMIT diff: `olaylar_ek.js`'e 1424-01-01 "İzmir'in kesin olarak Osmanlı'ya katılışı" maddesi (`kaynak:"izmir"`).
- ⚠️ Kural gereği DOKUNULMADI: aynı 1425-06-01 ucunu taşıyan 13 nokta (Aydın · Tire · Birgi · Ayasuluk · Kuşadası · Söke ·
  Çeşme · Muğla · Milas · Balat · Datça · Marmaris · Fethiye). Şehir hükmü bölgeye taşınmaz. Bunların gün kısmı da kaynaksız:
  `aydinogullari` 1425-26 diyor, `menteseogullari` (madde metnine göre) 1424 diyor. Ayrı bir kalem olarak öneriyorum.

## ④ Gelibolu — 1366 başlangıcı
**Bugünkü kayıt:** `data/yerlesimler.js:325` `s:{f:"1366-08-01",t:"1376-09-01",d:"bizans"}`, kaynak alanı yok.
Madde `olaylar_ek.js:107` 1366-08-01 `gun:"Ağustos 1366"`, `kaynak:"gelibolu"`.

**Kaynak:** TDV `gelibolu`: *"13 Ağustos 1366’da Savoy (Savoia) Dükü Amedeo bir Haçlı filosu ile Gelibolu’yu alıp 14 Haziran 1367’de Bizans’a terketti."* ·
*"1376’daki bu ikinci fetihle Gelibolu kati olarak Osmanlı hâkimiyetine girmiş oldu."*

**Fark:** İki tane var, ikincisi daha büyük.
1. Gün: 1366-08-01 → kaynakta **13 Ağustos** (12 gün).
2. **Fail:** 13 Ağustos 1366 – 14 Haziran 1367 arasında Gelibolu'yu **Bizans değil Amedeo** tutuyor (~10 ay). Atlas bu dönemi
   Bizans'a vermiş.

**Öneri:**
- KOORD diff:
  - `{1366-08-13 → 1367-06-14, d:"savoya", enklav:true}` + `{1367-06-14 → 1376-09-01, d:"bizans"}`; `d` bitişi 1366-08-13.
  - `savoya` künyesi var (`devletler.js:2114`, 1032–1720) ve boyası var (`renkler.py:1760`).
  - `enklav:true`: Savoya'nın gövdesi Alpler'de; emsal Herseknovi `rusya` 1806. Değişmez 7 bunu beyan muafına aldı (77→78).
- UMIT diff:
  - 1366 maddesi `t` → 1366-08-13, `gun` → "13 Ağustos 1366"; eski değer `ic_not_gun`a yazıldı.
  - Yeni madde: 1367-06-14 "Savoylu Amedeo Gelibolu'yu Bizans'a devretti" (2s kırılması için).

**Bildirim (dokunulmadı):**
- Bitiş günü 1376-09-01; kaynak yalnız **1376** yılını veriyor.
- Komşular Çimpe, Bolayır ve Maydos aynı `bizans 1366-08-01` dönemini taşıyor. TDV `gelibolu` yalnız Gelibolu'yu anıyor.
  `olaylar_ek.js:107` maddesi "Çimpe"yi de sayıyor, ama o cümlenin kaynağını okumadım.
  ⇒ Diff inerse Gelibolu (savoya, 08-13) ile komşuları (bizans, 08-01) arasında 12 günlük bir fark ve fail farkı kalır.
  Bu, KOMSU-KESINTI kovasının tersi bir durum; bilerek bırakıldı (şehir hükmü komşuya taşınmaz).

## Bulunamadı (adıyla)
- 1807 teslim günü (TDV yalnız "Mart 1807" diyor) · 1807-03-17 gününün kaynağı (TDV `misir`te yok).
- İskenderiye'nin Kavalalı'ya devir günü · Reşîd TDV maddesi (`resid` 302).
- Herceg Novi'nin 1538'deki ele geçiriliş günü.
- Aydın/Menteşe noktalarının kaynaklı ilhak günü.
- İzmir 1424 ve Gelibolu 1376 için gün.

**Denenen yollar:**
- TDV: `iskenderiye` · `ebukir` · `misir` · `kavalali-mehmed-ali-pasa` · `resid` (302) · `dalmacya` · `barbaros-hayreddin-pasa` ·
  `nova`, `herseknovi`, `kastelnovo`, `castelnuovo`, `preveze`, `preveze-savasi`, `preveze-deniz-savasi` (hepsi 302) · `hersek` (boş) ·
  `izmir` · `aydinogullari` · `cuneyd-bey` · `manisa` · `gelibolu`.
- HE: `herceg-novi` · `boka-kotorska` (1538'i anmıyor) · HE arama "Herceg Novi 1539" (sonuç bağlantısı dönmedi).
