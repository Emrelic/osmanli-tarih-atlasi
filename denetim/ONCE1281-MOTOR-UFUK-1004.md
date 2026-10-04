# ONCE1281-MOTOR-UFUK-1004 — motor 1281'den eski bir `f:` ile ne yapıyor?

Oturum: ONCE1281-MOTOR-UFUK-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-SEKIL-1004.md`](ONCE1281-SEKIL-1004.md) §5 ("ÖLÇMEDİM").
**Veriye ve koda yazılmadı.** Koşu (HAVVA) sürerken yalnız KOD okundu; `data/donemler.js`
koşu bitene kadar AÇILMADI.

## ① KODDAN — ölçüldü (kod okuma; koşudan bağımsız)

`git rev-parse HEAD` okuma başında `82de7461`, sonunda `27af17ee` (araya başka oturumların
commit'leri girdi). `git diff --stat 82de7461 27af17ee -- arac/uret_petek.py arac/girdi.py`
→ **boş**: iki motor dosyası o aralıkta DEĞİŞMEDİ, satır numaraları geçerli.

### 1.1 Motor 1281'den eski `f:`'yi KIRPMIYOR, YOK SAYMIYOR, HATA VERMİYOR — ÖRNEKLEMİYOR

Motorun sahiplik sorusu her yerde aynı biçimdedir: **"`a` gününde `f <= a < t` olan dönem
hangisi"**:
```
uret_petek.py:4721   if p["f"] <= g < p["t"]:                      (_sahipli)
uret_petek.py:6238   if sp["f"] <= a < sp["t"]: kim = sp["d"]       (gövde sahibi)
uret_petek.py:6479   any(dn["f"] <= a < dn["t"] for dn in y["d"])   (_osm_aktif)
```
Sorulan günler (`a`) ise HER kesit listesinde EPOK'a kırpılır:
```
uret_petek.py:2878   EPOK = "1281-01-01"
uret_petek.py:4498   tarihler = sorted(t for t in tarihler if EPOK <= t <= "1923-11-01")
uret_petek.py:4499   if tarihler[0] != EPOK: tarihler.insert(0, EPOK)
uret_petek.py:6517   _wts = sorted(t for t in _wts if EPOK <= t <= "1923-11-01")   (aynı desen)
uret_petek.py:6765   ts   = sorted(t for t in ts if EPOK <= t <= "1923-11-01")     (aynı desen)
uret_petek.py:7033   ts   = sorted(t for t in ts if EPOK <= t <= "1923-11-01")     (aynı desen)
```
⇒ `f: 1220` olan bir dönem **VERİDE KALIR ve OKUNUR**: 1281-01-01 kesitinde `1220 <= 1281`
doğru olduğu için o dönemin sahibi 1281'de boyanır. 1220-1281 aralığı ise **hiç sorulmadığı
için** çıktıda yoktur. Yani davranış "kırpma" değil, **"o günler örneklenmiyor"**.

🟢 **Kampanya için sonuç: veri BUGÜN yazılabilir ve İŞE YARAR.** 1281 öncesi dönemler motoru
bozmaz (1281 kesitinde doğru sahibi verir); EPOK geri çekildiği an kesit listesine girer ve
canlanır. Ön şart: aşağıdaki iki tuzak.

### 1.2 🔴 TUZAK 1 — tarihler DİZGİ olarak karşılaştırılıyor (üç haneli yıl ve MÖ BOZUK)

Motor ve yükleyici tarihi doldurmuyor (`girdi.py`/`uret_petek.py`de `zfill`/`pad` yok); `<=`
düz dizgi karşılaştırmasıdır. Ölçüldü (Python):
```
"800-01-01"   <= "1281-01-01"   → False   ❌ (MS 800, 1281'den SONRA sayılır)
"0800-01-01"  <= "1281-01-01"   → True    ✅ (sıfırla doldurulursa doğru)
"-0500-01-01" <  "0800-01-01"   → True    ✅
"-0500-01-01" <  "-0100-01-01"  → False   ❌ (MÖ 500, MÖ 100'den SONRA sayılır)
```
Bugünkü veride `YYYY-MM-DD` dışı tarih **0** (`girdi.yukle()`, bütün `s/d/v/isg` `f/t` +
`kur/bit`). ⇒ Bugün sorun yok; ama:
- **MS 1000–1280**: dört haneli, GÜVENLİ.
- **MS 0–999**: yalnız sıfırla doldurulursa (`0800-…`) güvenli; doldurulmazsa dönem
  1281'den SONRA sayılır ve nokta 1281'de SAHİPSİZ düşer (Değişmez 1 deliği).
- **MÖ**: negatif yıllar arasında sıra TERS — dizgi karşılaştırmasıyla ÇALIŞMAZ. Projenin
  hedefi MÖ 12000 (§1) ⇒ bu bir yazım kuralı değil, **motor değişikliği** ister (tarih →
  sayı dönüşümü). `§9.1` gereği tam inşa koşusunda tek seferde.
- ⚠️ Künye tarafında üç haneli yıl ZATEN VAR: `devletler.js` `bizans` `f: "330-05-11"`.
  CLAUDE.md §3.5 bunu denetim için söylüyor ("pad() şart"); motor tarafında aynı kural yok.

### 1.3 🔴 TUZAK 2 — kenetli `kur:` ne zaman devreder (önceki raporumu DÜZELTİYORUM)

```
uret_petek.py:4937-4940
    yazili = frozenset(i for i, y in enumerate(YERLER)
        if ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))
        and _sahipli(y, g))
```
Devir için İKİ şart birden gerekir: ① `kur > g` (henüz kurulmamış) VE ② `_sahipli(y, g)` (o
gün bir sahibi yazılı). 191 kenetli nokta `kur: 1281-01-01`:
- **Bugün:** `g ≥ 1281-01-01` ⇒ `kur > g` hiçbir gün doğru değil ⇒ etkisi YOK.
- **EPOK geri çekilip veriye DOKUNULMAZSA:** 1281 öncesi günlerde `kur > g` doğru ama
  `_sahipli` YANLIŞ (dönemleri 1281'de başlıyor) ⇒ devir YOK, nokta **sahipsiz** ⇒ Değişmez
  1'de delik. Sessiz değil: denetim ÖTER.
- **Kampanya bu noktalara 1281 öncesi sahip YAZARSA ve `kur:`'u bırakırsa:** iki şart birden
  doğru ⇒ yazılan sahiplik **hiç görünmez**, petek komşuya devredilir ⇒ **SESSİZ** (denetim
  "sahipli" görür, ötmez).

⇒ `ONCE1281-SEKIL-1004.md` §2.2'deki *"UFUK geri çekildiği an 191 petek sessizce devredilir"*
cümlem **yanlıştı**: sessiz devir EPOK'la değil, **sahip zinciri geriye yazıldığı an** olur.
Koordinatörün hükmü (önce 191 `kur:` temizlensin) yine DOĞRU, gerekçesi daha keskin: kampanya
`kur:` temizlenmeden bu 191 noktaya yazdığı her şeyi motor sessizce yutar.

## ② TAZE `donemler.js` — Lapaha 1220-1281 (KOŞU BİTİNCE)

### ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- `donemler.js`'te 1281-01-01'den eski **hiçbir tarih yok** (kesit listesi EPOK'tan başlıyor).
- Lapaha'nın peteği 1281-01-01 kesitinde `tui-tonga-imparatorlugu` gövdesinde.
- 1220-1281 aralığı çıktıda **YOK** (ne sahipli ne sahipsiz — sorulmamış).

### ÖLÇÜM — taze çıktı (koordinatör: "koşu bitti", `donemler.js` 4 Eki 19:17, 39,9 MB)

`git rev-parse HEAD` başta **ve** sonda `25651c6e` (ölçüm sırasında değişmedi). Dosyalar:
`donemler.js` 19:17:48 · `devletler_harita.js` 19:17:43 (93,7 MB) · `petek_govde.js` 19:17:46.

| soru | ölçüm | öngörü |
|---|---|---|
| `donemler.js` (node `vm` ile yüklendi) — DONEMLER 618 dönem, 1236 tarih alanı; en küçük | `1281-01-01`; 1281 öncesi **0** | ✅ |
| `devletler_harita.js` — 4200 `dnm.f` (desenle sayıldı; çıktı tekdüze JSON) | en küçük **1281**; 1281 öncesi **0** | ✅ |
| Lapaha (`PETEKLER[2578]`, veride `s: tui-tonga-imparatorlugu f: 1220-01-01`) | `tui-tonga-imparatorlugu` gövdesi: `dnm: [{"f":"1281-01-01","t":"1845-12-04", g: 8 parça}]` — **1220 çıktıda 1281'e kırpılmış** | ✅ |
| 1220–1281 aralığı | çıktıda YOK — ne sahipli ne sahipsiz, hiç örneklenmemiş | ✅ |

⚠️ Lapaha `donemler.js`te değil `devletler_harita.js`te: `DONEMLER` yalnız Osmanlı
dönemlerini taşıyor; yabancı devlet gövdeleri `DEVLET_PARCALAR`dadır.

## ③ HÜKÜM — koordinatörün sorusunun cevabı

**Motor 1281'den eski `f:`'yi OKUYOR, çıktıda 1281'e KIRPIYOR, hiç YOK SAYMIYOR ve HATA
VERMİYOR.** Kırpma ayrı bir kırpma kodu değil, örnekleme listesinin `EPOK`tan başlamasının
sonucudur (§1.1). ⇒ Koordinatörün iki şıkkından **"KIRPIYORSA → veri yazılabilir, UFUK açılınca
canlanır"** geçerli — iki şartla:
1. **Yıl 1000–1280 ise** bugün yazılabilir. 0–999 yalnız sıfırla doldurulursa (`0800-…`); MÖ
   ise motor yaması olmadan yazılamaz (§1.2, dizgi karşılaştırması).
2. **191 kenetli `kur:`** temizlenmeden o noktalara 1281 öncesi sahip yazılmamalı (§1.3 —
   yazılan sahiplik sessizce yutulur).

## ④ UFUK'un ÖTEKİ otoriteleri — geriye açmanın dokunacağı yerler

Koordinatörün notu (UMIT, AST): sonda beş otorite, 27 site, `girdi.UFUK[1]`e bağlı site 0.
**Başlangıç tarafı** için aynı soruyu ben sordum (`Grep`, `js/*.js` + `arac/denetle.py` +
`arac/girdi.py` + `arac/uret_devirler.py`):

| yer | sabit | not |
|---|---|---|
| `arac/girdi.py:705` | `UFUK = ("1281-01-01", …)` | |
| `arac/uret_petek.py:2878` | `EPOK = "1281-01-01"` | 🟢 motorun dört filtresi (`:4498/6517/6765/7033`) bu DEĞİŞKENİ kullanıyor — motor tarafında başlangıç TEK sabit |
| `arac/denetle.py:2305` | `ATLAS_BASI = "1281-01-01"` | |
| `arac/denetle.py:1525`, `:3135` | `"1281-01-01"` düz yazılmış | ATLAS_BASI'ye bağlı DEĞİL |
| `js/app.js:89` | `BASLANGIC = gunIdx("1281-01-01")` | |
| `js/app.js:3437` | `EPOK_DAMGASI = "1281-01-01"` | yorum: *"gerçek bir el değiştirme değil, atlasın başlangıcı"* — arayüz kenetli günü ZATEN olay saymıyor |
| `js/app.js:9064` | `gunIdx("1281-01-01")` düz yazılmış | BASLANGIC'e bağlı DEĞİL |

⇒ Başlangıç tarafında **en az 6 otorite / 8 site** (girdi · motor · denetle×3 · app×3); motor
kendi içinde tutarlı (tek `EPOK`), denetim ve arayüz değil. Geriye açma tek satırla olmaz.

### Bitiş sabiti `"1923-11-01"` — koordinatörün sorduğu üç günlük fark
- Motorda **7 satır** (`:4498, 4500, 6517, 6765, 6768, 7033, 7036`): kesit listesinin üst
  sınırı ve listeye EKLENEN son gün. `girdi.UFUK[1]` = `1923-10-29`'a bağlı değil.
- Çıktıya sızdığı ölçüldü: `devletler_harita.js`te `"t":"1923-11-01"` **1** dönem — **`fas`**:
  `{"f":"1923-10-29","t":"1923-11-01","g":[44454]}`, yani 1923-10-29 kesitinde ayrı bir parça
  üretilmiş üç günlük bir dönem. `donemler.js`te 1923-11-01 **0**. (Arayüzün `BITIS`i bu üç günü
  gösteriyor mu, ölçmedim.)
- **1281 sorusunu ETKİLEMİYOR:** başlangıç tarafında motor `EPOK` değişkenini kullanıyor, sabit
  yazılmış bir ikinci başlangıç yok. Üç günlük fark yalnız SON tarafın sorunu (1945 hedefinde
  aynı tuzak: `EPOK` gibi bir değişkene bağlanmazsa `1923-11-01` yedi yerde kalır).

## ⑤ Öngörü × ölçüm (bu görev)

| öngörü | ölçüm | |
|---|---|---|
| `donemler.js`te 1281'den eski tarih yok | 0 (ve `devletler_harita.js`te de 0) | ✅ |
| Lapaha 1281'de `tui-tonga` gövdesinde | ✅ `dnm.f = 1281-01-01` | ✅ |
| 1220-1281 çıktıda yok | yok | ✅ |
| (önceki rapor) "UFUK geri çekilince 191 `kur:` sessiz devreder" | koddan: sessiz devir EPOK'la değil, 1281 öncesi SAHİP yazılınca | ❌ düzeltildi (§1.3) |
