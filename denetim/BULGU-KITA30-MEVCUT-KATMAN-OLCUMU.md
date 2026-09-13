# BULGU — KITA 30: mevcut C çizim katmanının (app.js) ölçümü

> 1.MURAT'ın yeniden tanımlanan görevi ①. Yöntem: app.js'in GERÇEK C-katmanı
> kodu (satır 5043-5160: `_cTarafRengi`, `_cKayitGeometrisi`,
> `_hukukiSinirGuncelle`) `fs.readFileSync` ile OKUNUP node'da `eval`
> edildi — kod KOPYALANMADI/yeniden yazılmadı, yalnız `harita`/DOM mock'landı.
> Gerçek `data/hukuki_sinirlar.js` (5 kayıt) ve gerçek `data/devletler_
> harita.js` (renk tablosu) kullanıldı.

## ① HANGİ KAYIT HANGİ TARİHTE ÇİZİLİYOR

```
✓ ÇİZİLİYOR (geometri üretiyor)
   midye-enez-1913            (hat.tur:"cetvel", nokta_dizisi VAR)
   ii-erzurum-sattularap-1847 (hat.tur:"dogal-tanimsiz", nokta_dizisi VAR)

🔴 HİÇ ÇİZİLMİYOR (sessizce 0 geometri — kod hiçbir hata vermiyor)
   misir-sudan-22-paralel-1899  hat.tur:"paralel" — hat.enlem taşıyor,
                                 nokta_dizisi YOK
   karlofca-lehistan-1699       hat.tur:"nokta-kumesi" — nokta_atamalari
                                 taşıyor, nokta_dizisi YOK
   karlofca-venedik-1699        aynı, nokta-kumesi
```

**Sebep — `_cKayitGeometrisi` (app.js:5112):**
```js
var nd = (kayit.hat || {}).nokta_dizisi || [];
if (nd.length < 2) return null;
```
Yalnız `nokta_dizisi` alanına bakıyor. "paralel"/"meridyen" (`hat.enlem`/
`hat.boylam`) ve "nokta-kumesi" (`hat.nokta_atamalari`) türleri **hiç
sorulmuyor** — SEMA-C-0911.md §8.2/§9.3'ün şemaya eklediği bu iki tür,
render koduna henüz İŞLENMEMİŞ.

Ölçüm (gerçek kod, gerçek veri):
```
1913-06-10  midye-enez + sattularap birlikte aktif → dolgu=4 hat=2 ✓
1899-06-01  yalnız sattularap görünür oldu (misir-sudan aktif AMA
            0 katkı verdi — dolgu=2 hat=1, TAMAMEN sattularap'tan)
1750-01-01  karlofca-lehistan + venedik aktif → dolgu=0 hat=0 (SIFIR)
1850-01-01  yalnız sattularap → dolgu=2 hat=1 ✓
1600-01-01  hiçbiri aktif değil → dolgu=0 hat=0 ✓ (beklenen)
```

## ② DOLGU RENGİ DOĞRU MU — 🔴 BULUNAN İKİNCİ KUSUR

`_cTarafRengi(id)` doğrudan `_DEVLET_RENK[id]` okuyor (`id` = `taraflar[]`
içindeki devletler.js künye id'si). Ama `_DEVLET_RENK`
(`data/devletler_harita.js`nin `window.DEVLET_HARITA`si) devletin
`harita:` alanıyla anahtarlanmış — CLAUDE.md/dersler'in bilinen deseni
("renk `harita:` anahtarına bakar, `id`ye DEĞİL", `D048` ailesi) — ve
`taraflar[]` `harita:` DEĞİL `id:` taşıyor. İkisi HER ZAMAN aynı değil:

```
taraf id                  devletler.js harita:   _DEVLET_RENK[id] sonucu
bulgaristan-kralligi   →   "bulgaristan"        →  BULUNAMADI (renk #2d6c0c
                                                    varken #9a9a9a GRİ basılıyor)
misir-kavalali         →   "kavalali"           →  BULUNAMADI (aynı desen)
kacar                  →   "kacar" (id=harita)  →  #c840a8 DOĞRU
lehistan, venedik,
ingiliz-sudani         →   id=harita            →  DOĞRU
osmanli                →   (özel durum, kod
                            "osmanli" id'sini
                            ayrıca kontrol edip
                            #8e0b22 basıyor)     →  DOĞRU (kasıtlı)
```

⇒ **Ölçülmüş sonuç: midye-enez-1913 ÇİZİLİYOR ama Bulgaristan tarafı
YANLIŞ RENKTE (gri, #9a9a9a) boyanıyor** — kullanıcı iki ülkeyi de
göreceğine bir taraf boyalı bir taraf "kimliksiz gri" görüyor. Aynı kusur
misir-sudan-22-paralel-1899 desteklenirse `misir-kavalali` tarafını da
vuracak.

## ③ LEJANT / ÜZERİNE GELİNCE BİLGİ

```
🔴 Lejantta "belgeli sınır (C)" kalemi YOK — app.js:1801-1894 lejant
   HTML'i tarandı, hiçbir "hukuki"/"belgeli sınır"/"C " ifadesi yok.
🔴 hukuki-sinir-hat / hukuki-sinir-dolgu katmanlarına `click`/`hover`
   olay dinleyicisi (popup) EKLENMEMİŞ — app.js'te bu iki id için
   `harita.on(` araması SIFIR sonuç verdi. Kullanıcı çizgiye/dolguya
   tıklayınca antlaşma adı/madde/kaynak GÖRMÜYOR.
```

## ÖZET — KITA 12'YE İSTENECEK DÖRT SATIR (öncelik sırasıyla)

```
① _cKayitGeometrisi'ye "paralel"/"meridyen" (hat.enlem/hat.boylam) desteği
② _cKayitGeometrisi'ye (ya da ayrı bir fonksiyona) "nokta-kumesi"
   (nokta_atamalari) desteği — nokta olarak çizilecek, poligon değil
③ _cTarafRengi: `id` ile bulamazsa devletler.js'ten `harita:` alanına
   DÜŞEREK ikinci bir arama yapmalı (ya da _DEVLET_RENK id VE harita
   ikisiyle de anahtarlanmalı)
④ hukuki-sinir-hat/dolgu için click/hover popup + lejant satırı
```

## NOT — js/c_katman.js (KITA 30'un ilk turda yazdığı dosya)

Bu ölçüm 1.MURAT'ın M-3696/M-3701 sonrası mesajından (js/c_katman.js
YAZMA) ÖNCE tamamlanmış bir dosyayı da kapsıyor: `js/c_katman.js`
tam olarak ①②'yi (paralel + nokta-kumesi) app.js'e HİÇ DOKUNMADAN
(kendi source/layer'ları + `_hukukiSinirGuncelle`'i çalışma anında
sarmalayarak) çözüyordu ve izole testte DOĞRU çalıştığı ölçüldü
(misir-sudan → 2 doğru renkli dolgu, karlofca-lehistan/venedik → 4
doğru renkli nokta). 1.MURAT'a bu ölçümle birlikte SORULDU: dosya
silinsin mi (KITA 12'nin app.js'i genişletmesini bekle) yoksa geçici
köprü olarak dursun mu — KARAR ONUN.
