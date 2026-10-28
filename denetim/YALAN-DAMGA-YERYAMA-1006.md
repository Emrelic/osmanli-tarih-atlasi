# YALAN-DAMGA-YERYAMA-1006 — `yer_yama*.js` damgaları ve `_sahiplik_uygula.py` geri alma riski

**Temel:** origin/makine/umit `61751bf0` · worktree `C:\atlas-p84-yeryama` · ölçüm günü 6 Ekim 2026.
**Yetki:** YALNIZ ÖLÇÜM. `--yaz` KULLANILMADI; dört motor tuzu dosyasına dokunulmadı; `data/`
değişmedi (`git status` temiz). Tablo: `YALAN-DAMGA-YERYAMA-1006.tsv` (298 satır).
**Araçlar (salt okur):** `denetim/ARAC-YALAN-DAMGA-YERYAMA-1006.py` (①②④). ③ için
`_sahiplik_uygula.py`nin kendisi (`--yaz`sız) + yazma yolu KAPATILMIŞ bir kopyası (`YAZ = False`,
yalnız `duzenleme` listesini JSON'a döker) koşturuldu; kopya iki çıktıyı da birebir verdi.
⚠️ **Öngörü ölçümden önce YAZILMADI** (OLCUM-KITA §8 ihlali) — beyan ediyorum.

## ④ Dosyaları kim okuyor (103 dosya)
| | sayı |
|---|---|
| `girdi.GIRDI_DOSYALARI` içinde (motorun okuduğu) | **0** |
| `index.html`in yüklediği | **0** |
| `arac/_sahiplik_uygula.py` — `readdirSync(/^yer_yama.*\.js$/)` (glob) | **103** |
| `arac/yama_uygula.js` — aynı glob (kronoloji eşleşme ailesi `{dosya,t,b}`) | 103 |
| `arac/_yama_sinav.py` — `/^yer_yama_/` (`yer_yama.js` HARİÇ) | 102 |
| `arac/_kademe_uygula.py` — adıyla `yer_yama_kademe.js` + `kademe2.js` | 2 |
| `arac/_yama_indi_mi.py` — adıyla `yer_yama_kafkas.js` | 1 |
⇒ Hiçbir `yer_yama` dosyası canlı değil; **hepsi** glob'la uygulayıcıya açık. Dosya başına aile
dağılımı tsv'de değil, aracın ④ çıktısında (sahiplik 1369 kayıt · kronoloji 865 · kademe · rapor).

## ① Damgalar ADIYLA
**Resmî durum alanı `hukum:`** — 81 kayıt, 5 dosya. "Çözüldü" ailesi **14 kayıt**:
- `cozuldu-yazildi` **6** — hepsi `yer_yama_uyg2.js` (:75 Mîyandoab · :131 Dörtyol · :143 Erzin ·
  :155 Yumurtalık · :171 Urfa · :187 Maraş).
- `cozuldu-oneri` **8** — `yer_yama_acik.js` :21 :29 :37 :45 :53 :61 · `yer_yama_sahiplik.js` :121 :283.
- Ayrıca `zaten-dogru` 12 (emilme 3 · sahiplik 9) — o günkü veri hakkında hüküm; iddia ettikleri
  değer metinde sayısal değil ⇒ **ölçülmedi**.
**Düzyazı damgası** (not/kaynak/neden/gerekce/aciklama içinde çözüldü/yazıldı/uygulandı/düzeltildi):
11 eşleşme, **elle okundu: 11'in 11'i yamanın KENDİ içeriğini anlatıyor** ("1894-01-01 yazildi",
"TABI yazildi"), canlıya indi iddiası taşıyan **0**. ("indi" araması 30+ eşleşme verdi; "kendi" gibi
kelime içi gürültü — vekil ölçüm, sayılmadı.)

## ② Damga × canlı veri (`girdi.yukle`)
| damga | kayıt | iddia | canlıda |
|---|---|---|---|
| cozuldu-**yazildi** | uyg2:171 **Urfa** | v 1839-01-01→1840-01-01 · 1832-08-15 kalkmış | **TAŞIMIYOR** (canlı v 1832-08-15→1841-02-25 `misir-kavalali`) |
| cozuldu-**yazildi** | uyg2:187 **Maraş** | v 1833-01-01→1834-08-01 · 1832-07-29 kalkmış | **TAŞIMIYOR** (canlı 1832-07-29→1841-02-25) |
| cozuldu-**yazildi** | uyg2:131 Dörtyol · :143 Erzin · :155 Yumurtalık | v ekle 1832-07-29→1841-02-25 | **TAŞIMIYOR ×3** (canlı `v:[]`) |
| cozuldu-**yazildi** | uyg2:75 Mîyandoab | d ekle 1585-09-25→1603-10-21 | TAŞIYOR |
| cozuldu-oneri | acik:21 Erzincan | d f 1514-10-23 · s karakoyunlu 1410-1422 | d TAŞIMIYOR (canlı 1514-09-06) · s TAŞIYOR |
| cozuldu-oneri | acik:29 Konya/Aksaray/Niğde | s eretna f 1335 | Konya TAŞIMIYOR · Aksaray ✓ · Niğde ✓ |
| cozuldu-oneri | acik:37 Sivrihisar | germiyan yok · karaman var | germiyan HÂLÂ VAR · karaman var |
| cozuldu-oneri | acik:45 Çankırı | candar t 1392-11-01 · d f 1392-11-01 | TAŞIMIYOR ×2 (canlı 1354-08-01) |
| cozuldu-oneri | acik:53 Eflak 11 nokta | v[0].f 1417-01-01 | TAŞIMIYOR 11/11 (canlı 1462-06-01) |
| cozuldu-oneri | acik:61 Malatya | s f 1315-04-28 · dulkadir 1402-1516 | f ✓ · dulkadir TAŞIMIYOR (canlı memluk) |
| cozuldu-oneri | sahiplik:121 Mersin | ramazanoglu 1352-1516 · d f 1516-08-24 | TAŞIMIYOR ×2 |
| cozuldu-oneri | sahiplik:283 Kragujevac | avusturya 1689-09-24→1690-09-09 | TAŞIYOR |

**HÜKÜM ②:** "yazıldı" diyen 6 damganın **5'i YALAN** (Urfa · Maraş · Dörtyol · Erzin ·
Yumurtalık). 🔴 Ve bunlar **hiçbir araçla inemez**: uyg2 `eski:`/`yeni:`/`v_ekle:` şemasında yazılmış;
`_sahiplik_uygula.py` yalnız üst seviye `d/s/v/isg`yi okur. Kuru koşuda Urfa · Dörtyol · Erzin ·
Yumurtalık yalnız "kaynak: ZATEN DOLU, ezilmedi" diye atlanıyor; veri alanı hiç görülmüyor.
⇒ Damga hem yalan hem **yapısal olarak teslim edilemez**.
"Öneri" damgası (8 kayıt) iniş iddia etmez; ama "çözüldü" kelimesi bir sonraki okura "iş bitti"
der: 8'in **6'sı canlıda yok ya da kısmen var** (yalnız Kragujevac tam).

## ③ `_sahiplik_uygula.py --yaz` bugün koşulsaydı (KURU — yazılmadı)
`YAMA KAYDI 1369 · benzersiz ad 1053 · uygulandi 177 · zaten-boyle 759 · cakisma 20 ·
kendi-kilidi 2 · gun-maddesiz 18 · veride-yok 60` · 19 hedef dosya (yerlesimler.js 94).
**Geri alma testi (kayıt kayıt, `git log -L <kaydın satırları>`):** yamanın yazacağı dizi metni O
KAYDIN satır geçmişinde bir sürümde bulunuyor ve bugün yoksa ⇒ bir kez inmiş, SONRA değişmiş ⇒
`--yaz` o sonraki değişikliği **geri alır**.
| sınıf | kayıt |
|---|---|
| **GERİ ALIR** (yama değeri geçmişte vardı, sonra değişti) | **174** |
| — bunlardan KAYNAKLI bir dönemi silen / değiştiren | **63** |
| — bunlardan `kid:` taşıyan bir tâbi dönemini silen | **93** |
| hiç inmemiş (geçmişte yok): Akçahisar (Kruja) · Mersin · Zagem (Kaheti) | 3 |
Yama değerinin geçmişte son görüldüğü ay: **174/174 Eylül 2026.** Boş dizi (`[]`) yazan değişim 0
(yanlış pozitif kaynağı kapalı). Elle okunan örnekler (5 rastgele + 3 inmemiş):
- **Maraş** `yerlesimler.js:257` ← cukurova_isg + tbmm_1920 + uyg2 + vassal_kid: canlı `d` 1522
  (TDV `dulkadirogullari`, `kaynak:` gövde alıntılı) → **1515-06-13**'e döner; 1515-1522 tâbi
  Dulkadır `v:` dönemi **silinir**.
- **Tunus** `:957`, **Kafsa** `afrika:411` ← vassal_kid_0906: canlı `v` iki dönem (1881 Fransız
  himayesi ayrımı, `kid:tunus-ocagi`) → tek dönem `kid`siz, gün 1705-07-12 → 1705-07-17.
- **Roman** `:459`, **Birlad** `:460` ← kid20 + romanya + vassal_kid: canlı `s` (altinorda 1281-1359,
  kaynaklı) → `bogdan 1281-1456`; 1859-1877 Birleşik Prenslikler `v:` silinir.
- **Ağraham burnu** `:636` ← zend_kacar: `altinorda 1281-1501` → `iran`.
En çok geri alan yama dosyaları: `vassal_kid_0906` 123 · `tbmm_1920_0905` 30 · `kid20_0907` 17 ·
`romanya` 17 · `balkan_1923` 10 · `zend_kacar` 7 (tam liste tsv `3-KURU`).
⚠️ **Sınır:** test "yama değeri bu kayıtta bir kez vardı" der; sonraki değişikliğin ONAYLI olup
olmadığını commit mesajından okumadım. Ama 63'ünde silinen dönem `kaynak:` taşıyor — yani
sonraki hâl kaynaklı bir düzeltmedir. "Onaylanmış düzeltmeyi geri alır" için alt sınır **63**,
üst sınır **174**.

## ÖNERİ (UYGULANMADI — dosyalar koordinatörün)
1. **`_sahiplik_uygula.py --yaz` bugün KOŞTURULMASIN.** 177 değişimin 174'ü geri almadır. Araçta
   `--yaz`tan önce bir "geri alma kapısı" gerekir: kaydın `git log -L` geçmişinde yamanın değeri
   varsa ve bugün yoksa → UYGULAMA, "BAYAT YAMA" diye bas (bu ölçümün mantığı, ~35 sn).
2. **İnmiş yamalar emekliye:** 174 kaydı yalnız taşıyan yama dosyaları glob'dan çıkarılsın —
   `data/` dışına (ör. `denetim/yer_yama_arsiv/`) taşımak ya da adı `yer_yama_`dan arındırmak;
   glob onları artık görmez. Kısmen canlı dosyalarda yalnız inmiş kayıtlar ayıklanır.
3. **Yalan damgalar:** uyg2'nin 5 kaydı `hukum:"cozuldu-yazildi"` → `hukum:"YAZILMADI —
   sema-uyumsuz (eski/yeni), _sahiplik_uygula okumaz; ölçüldü 2026-10-06"`; Urfa/Maraş için ayrıca
   TDV düzeltmesi hâlâ AÇIK iş (Urfa 1839 · Maraş 1833) — sahiplik şemasında yeniden yazılmalı.
   "cozuldu-oneri"ler → `oneri-bekliyor` (çözüldü kelimesi düşsün); canlıda olanlar (Kragujevac,
   Mîyandoab) → `indi-dogrulandi 2026-10-06`.
4. Damga sözlüğü tek otorite olsun: `hukum:` değerleri sabit bir listeden (ör. `oneri-bekliyor ·
   indi-dogrulandi · yazilamaz · bulunamadi`); "indi" iddiası ancak canlı veri ölçülerek basılır.

## Denenen ve ölçülemeyen
- `zaten-dogru` 12 kayıt: iddia sayısal değil ⇒ ölçülmedi.
- Geri alınan 174 değişikliğin commit mesajları (onay kanıtı) okunmadı.
- Mersin'de iki yama birbirine zıt öneriyor (`sahiplik:121` d 1516-08-24 · `cukurova_isg:302`
  d 1352-01-01); kuru koşu cukurova'yı indirecekti — çakışma kapısı bunu yakalamadı çünkü
  sahiplik:121 rapor şemasında (`ad` yok).
