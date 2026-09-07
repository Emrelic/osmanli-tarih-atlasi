# MÜKERRER ANAHTAR — 6 KAYIT · 11 ANAHTAR · VE KÖK SEBEP

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7-8 Eylül 2026 · 🔴 SALT OKUR
> Hiçbir `data/` dosyasına yazılmadı; koşu 8 için donuk kaldı.
> Alet: `denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py` (ateşleme 7/7).

---

## 🔴 KÖK SEBEP: UYGULAYICI **İLK** KOPYAYA YAZIYOR, MOTOR **SON**UNU OKUYOR

```
_sahiplik_uygula.py:470  ALAN_RX = {a: re.compile(r'(\b%s:\s*)\[' % a)}
_sahiplik_uygula.py:690  m = ALAN_RX[alan].search(satir)      ← OKUMA · İLK
_sahiplik_uygula.py:825  m = ara_disi(ALAN_RX[alan], …)       ← YAZMA · İLK
JS / JSON / eval / json.loads                                  ← SONUNCUSU KAZANIR
```

⇒ ***Bir kayıtta aynı alan iki kez varsa, uygulayıcı ile motor FARKLI
KOPYAYA bakar.*** Uygulayıcı ilkine yazar, motor sonuncusunu okur ⇒
**yama sessizce düşer.** Ve uygulayıcının *"zaten böyle"* / *"çatışma"*
kararları da ilk kopyadan hesaplanır — yani motorun **hiç kullanmadığı**
bir değerle karşılaştırılır.

📌 Bu, `CLAUDE.md §11`in **ilk maddesinin** ta kendisi:
> *"`replace(eski, yeni, 1)` — Python'da sayı argümanı ilk eşleşmeyi
> değiştirir. İbrail ve Özi'de ilk eşleşme `s:` bitiş tarihiydi; `d:`
> eski kaldı ve 8 aylık sahipsiz pencere açıldı."*

⚠️ **Ölçmedim:** mükerrer anahtarların **nasıl doğduğunu** ölçmedim —
uygulayıcı mı üretiyor, yoksa elle yazımdan mı geliyor. Ölçtüğüm şey
uygulayıcının onları **sürdürdüğü** ve yamaları **düşürdüğü.**

---

## 🔴 VE BU YÜZDEN NORMAL UYGULAYICIYLA DÜZELTİLEMEZ

`_sahiplik_uygula` metin üzerinde `search()` ile çalışıyor ⇒ bir mükerrer
kayda yama uygulamak **ilk kopyayı** günceller ve motor **yine sonuncuyu**
okur. ⇒ ***Düzeltme bir yama değil, HAM METİN DÜZENLEMESİ olmak zorunda:
fazla anahtar SİLİNMELİ.***

---

## MEKANİZMA — altısında da AYNI: yama kaydın BAŞINA eklenmiş

```js
// yerlesimler_ok109.js:149
{
  ad: "Şırnak", s:[{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
                d:[{f:"1891-01-01",t:"1920-04-23"}],          ← YAMA (ÜSTTE)
  tur: "sehir", lat: 37.5139, lon: 42.4543,
  g: 0, k: 4, m: "Bitlis", kur: "1891-01-01", kesinlik: "belirsiz",
  d: [{ f: "1891-01-01", t: "1923-10-29" }],                  ← ESKİ (ALTTA)
  s: [],                                                       ← ve BU KAZANIYOR
  v: [],
```

---

## ALTI KAYIT — satır numarasıyla, ve İKİ KANALDAN doğrulanmış

| dosya | satır | ad | mükerrer |
|---|---|---|---|
| `yerlesimler_ok109.js` | 149 | Şırnak | `s`×2 · `d`×2 |
| `yerlesimler_ek27.js` | 51 | Mersin | `s`×2 · `d`×2 |
| `yerlesimler_ek29.js` | 391 | Yagodina (Jagodina) | `s`×2 · `d`×2 |
| `yerlesimler_ek_bozkir.js` | 109 | Yedisan bozkırı | `s`×2 |
| `yerlesimler_ok109.js` | 72 | İmâdiye (Amêdî) | `kaynak`×2 · `s`×2 |
| `yerlesimler_4ff22b.js` | 82 | Honolulu | `kaynak`×2 · `s`×2 |

**Anahtar dağılımı:** `s` 6 · `d` 3 · `kaynak` 2 — toplam 11.

### 🟢 İKİ BAĞIMSIZ KANAL, 6/6 UYUŞTU
```
① `object_pairs_hook`  ayrıştırıcının İÇİNDE, çiftler ÇÖKMEDEN önce
② ham metin tarayıcı   parantez sayarak, ayrıştırıcıya HİÇ SORMADAN
```
⚠️ Sevkte *"ayrıştırıcıya sormak bu kusuru göremez"* deniyordu — bu
**düz** bir ayrıştırma için doğru, ama `object_pairs_hook` çiftleri
**çökmeden önce** görüyor. Yine de tek kanala güvenmedim: ikinci kanal
bağımsız olarak aynı altı kaydı, aynı alanlarla buldu.

---

## ÇÖZÜM **TEK TİP DEĞİL** — kayıt kayıt karar ister

```
🟢 MEKANİK  Şırnak    üstteki `tbmm-turkiye` yaması KAZANMALI;
                      alttaki `s:[]` + `d:…1923` SİLİNMELİ
                      (yama bugün BİLEREK yazıldı, düşmesi kaza)
🟡 KARAR    Mersin    yön BELİRSİZ — komşular fiilî işgal altındaki
                      toprağı `tbmm-turkiye` boyuyor olabilir; kaynağa
                      sorulmadan karara bağlanmaz
🟡 KARAR    Yagodina  DÜŞEN kopya Avusturya ara dönemlerini (1689-09-24 ·
                      1690-09-09 · 1717-08-18) TAŞIYOR ve kaydın kendi
                      `neden:` alanı o dönemi eklemek için yazıldığını
                      söylüyor ⇒ DÜŞEN muhtemelen DOĞRU olan
🟡 KARAR    Yedisan   DÜŞEN kırım→1783-04-19 · KALAN kırım→1792-01-09
                      iki AYRI tarih iddiası, kaynak sorusu
🟡 KARAR    İmâdiye   `kaynak` iki ayrı TDV gerekçesi
🔴 TERS     Honolulu  burada KALAN daha DOLU (`hawaii-kralligi` + `abd`),
                      DÜŞEN yalnız `abd` ⇒ üstteki yama EKSİK.
                      ⚠️ Yani «üstteki her zaman doğrudur» KURALI YOK.
```

🔴 **`Honolulu` bu yüzden önemli:** mekanizma altısında aynı ama **hüküm
aynı değil.** Tek tip bir onarım (*"hep üsttekini tut"*) burada **daha
dolu bir kaydı silerdi.**

---

## ⚫ ÖLÇÜLMEDİ — `bulunamadı` DEĞİL
```
🔴 EVREN DAR: yalnız `girdi.GIRDI_DOSYALARI` (77 YERLEŞİM dosyası).
   `devletler.js` · `olaylar*.js` · `kronoloji*.js` · `denetim/`
   altındaki BEKLEYEN YAMALAR bu taramanın DIŞINDA.
· mükerrerlerin NASIL doğduğu (uygulayıcı mı, elle yazım mı)
· Şırnak'ın kopukluğu enklav üretiyor mu
· hangi kopyanın DOĞRU olduğu — bu bir KAYNAK sorusu, `data/` sende (`§7`)
```

## 🟢 DENETİM ADAYI — ve önden ölçüldü
Ölçüt *"bir nesnede aynı anahtar iki kez"*:
```
· yanlış alarm ÜRETMİYOR   (ateşleme: temiz nesnede sustu)
· otomatik SINANABİLİR     (ölçüt yorum değil, SAYIM)
· bugünkü veride 6 vaka    ⇒ eşik 0 konabilir
· `denetle.py` onu YAPISAL OLARAK göremez — ayrıştırılmış veriyi
  denetliyor, kaydı değil ⇒ AYRI bir kapı gerekir
```
📌 `§11`in *"bir ölçütün kusur mu tasarım mı ölçtüğü, denetime
dönüştürülmeden ÖNCE sorulur"* kuralı uygulandı: bu **kusur** ölçüyor,
tasarım değil — aynı anahtarı iki kez yazmanın meşru bir hâli yok.
