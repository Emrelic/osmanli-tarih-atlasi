# KRONO-OSMANLI-CEVRE-0929 — KÜNYE: "künyesiz" üç kimlik aslında künyeli

> 29 Eylül 2026 · 🔴 ŞARTNAME İTİRAZI (DALGA3-ORTAK §5 "yanlış bulursan SÖYLE").
> Sevk mesajı: *"`?kunyesiz:` öneki dikkat: hicaz · suud · yemen için künye YOK."*
> **Ölçüldü: YANLIŞ.** Üçünün de künyesi `data/devletler.js`te var; haritadaki
> `d:"hicaz"` / `d:"suud"` / `d:"yemen"` değerleri künye **id**'si değil,
> künyenin **`harita:`** boya anahtarıdır. `devletler.js`e DOKUNULMADI.

## 1. Ölçüm (node, `data/devletler.js`, `harita:` alanı)

| Haritadaki d: | Künye id | Ad | f: → t: |
|---|---|---|---|
| `hicaz` | `hicaz-kralligi` | Hicaz Krallığı (Şerif Hüseyin) | 1916-06-10 → 1923-10-29 |
| `suud` | `suud-birinci` | I. Suûdî Devleti (Vehhâbî Emirliği) | 1744-01-01 → 1818-09-09 |
| `suud` | `suud-ikinci` | II. Suûdî Devleti (Necid Emirliği) | 1824-06-01 → 1891-01-24 |
| `suud` | `suud-ucuncu` | III. Suûdî Devleti | 1902-01-15 → 1932-09-18 |
| `yemen` | `yemen-zeydi` | Yemen Zeydî İmamlığı | **897-01-01** → 1923-10-29 |

⇒ `SENKRON-DEFTER-0929`'un `?kunyesiz:` kovası `harita:` → künye çözümünü yapmıyor. `denetle.py` "Dizinsiz harita kimliği ✓ 0" diyor çünkü `harita:`ı sayıyor — iki alet farklı soru soruyor. **Yeni künye önerisi YOK**; kova adı yanıltıcı.
- `suud` tek anahtarı üç ayrı künyeye düşüyor: kırılmanın GÜNÜ hangi künyenin penceresindeyse o. Bu pakette: 1744/1795/1805 → `suud-birinci`.
- 📌 Öneri (koordinatöre / SENKRON-DEFTER sahibine): defter aracı `harita:` → künye eşlemesini gün penceresiyle yapsın; o zaman 7 kayıt "künyesiz" kovasından çıkıp `PAKETSIZ:arabistan`a karışır.

## 2. Künye kusurları (bulundu, düzeltme koordinatörün)

- **`yemen-zeydi` f: `"897-01-01"` — dört haneye doldurulmamış yıl.** Dizgi karşılaştırmasında `"1659-01-01" < "897-01-01"` DOĞRU çıkar ⇒ bu künyeye bağlanan HER madde "pencere dışı" görünür (bu pakette ölçüldü: 1659 maddesi yanlış alarm verdi). `CLAUDE.md §3.5`: *"Üç haneli yıl dizgi karşılaştırmasında `pad()` şart."* Öneri: `"0897-01-01"`.
- **`umman` f: 1624-01-01** — harita 1515-04-01'de Masira/Nizva/Salala'yı `nebhani → umman` çeviriyor; kırılma künye doğmadan 109 yıl önce (sınıf ③ ardıl ya da harita kusuru — YERLESIM-ONERI Ö9).

## 3. Bu paketin maddelerinde kullanılan künyeler (hepsi var, pencere içi)
`germiyan` · `dulkadir` · `eretna` · `sahibata` · `haciemir` · `trabzon-rum` · `hamid` · `timurlu` · `candar` · `mentese` · `kesiri-sultanligi` · `yemen-zeydi` · `sammar` · `hail-ibn-ali`. Önerilen (henüz olmayan) id: YOK.
