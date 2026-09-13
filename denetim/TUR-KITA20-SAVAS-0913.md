# TÜR KARARI — "savaşın hikâyesi" ek okuma türü

KITA 20 · 13 Eylül 2026 · paket 0045 H-0007 · şartname madde ①
Karar Emre'nin / koordinatörün. Bu belge **ölçer ve önerir**.

---

## ① ÖNGÖRÜ NE DİYORDU, NE ÇIKTI (D022)

`denetim/ONGORU-KITA20-SAVAS-0913.md` (commit `4486cfe`):

| Öngörü | Sonuç |
|---|---|
| **Ö1** mevcut 11 türün hiçbiri savaş hikâyesini temiz taşımaz → yeni tür | 🟢 **TUTTU** (gerekçe §②) |
| **Ö1-mazeret** yükleyici yeni dosyayı görmezse asıl engel tür değil yükleyici olur | 🟢 **TUTTU ve GENİŞ ÇIKTI**: bir değil **ÜÇ yer** gerekiyor (§④) |

---

## ② ÖLÇÜLDÜ — MEVCUT TÜRLER NE TAŞIYOR

Kaynak: `js/app.js` `EKOKUMA_TUR` sözlüğünün kendisi + tahtada Emre'nin kendi
başlık listesi (M-1235, M-1921'de aynen aktarılmış):

> *"ek okumalar, merak, tartışma, sebep sonuç, magazin, teknik bilimsel, kimdir,
> dış ülke yankıları, **kahramanlık hikâyeleri**, **menkıbeler**, şok haberler"*

| Aday | Neden UYMUYOR |
|---|---|
| `kahramanlik` | Emre'nin başlığı **"kahramanlık hikâyeleri"**, yani **kişi yiğitliği** anlatısı. Savaş hikâyesinde **yenilgiler** de var (Ankara, İnebahtı). Ayrıca şartname açıkça *"kahramanlık dili değil, tarih dili"* diyor, türün adı bunun tersini vaat eder. |
| `menkibeler` | `EK-OKUMA.md`'nin **rivayet** ekseni (`kesinlik:"rivayet"`). Bu kartların 11/12'si belgeli (`kesin`). Menkıbe düğmesi altında durmaları okuyana *"doğruluğu iddia edilmez"* der, **yanlış sinyal**. |
| `sebep-sonuc` | Tek bir **sebep→sonuç çifti** taşır ve `ekKartHtml` o türde `sebep.b → sonuc.b` başlığını basar. Savaş anlatısı dört bölümlü (öncesi · taraflar · akış · sonuç). Sığdırmak şemayı bozar. |
| `tartisma` · `kimdir` · `dis-yankilar` · `teknik-bilimsel` · `sok-haberler` · `magazin` | Konu uyuşmuyor. |

⇒ **ÖNERİM: yeni tür `savas-hikayesi`, etiketi `⚔️ Savaşın Hikâyesi`.**
`tur` dizgisi veri tarafında sabit kalır. **Etiket** yalnız app.js'te durur, Emre başka bir ad isterse tek satırda değişir.

⚠️ **Açık soru, Emre'nin:** listesinin başındaki **"ek okumalar"** bir **genel başlık** mı, yoksa bu tür hikâyeler için mi düşünüldü? Genel başlıksa etiket `📖 Ek Okuma` da olabilir. Bunu ben seçmedim.

---

## ③ ŞEMA — neyi YENİDEN KULLANDI, neyi EKLEDİ (D028)

```
YENİDEN KULLANILDI (var olan sözleşme)
  id · tur · kisa (düğme ipucu) · kesinlik · olay:[...] · kaynak
  gorsel · gorsel_kaynak        (§1.6'nın kendi adları, AYNEN)
YENİ (savaş anlatısına özgü)
  baslik · tarih_metin · yer · taraflar:[{ad, komutan, kuvvet}]
  oncesi · akis · sonuc          (üçü birlikte 150-300 kelime)
  tartisma                       (kaynakların ayrıştığı yerler, taraf SEÇİLMEZ)
```
🔑 **Bağlama deseni İCAT EDİLMEDİ:** `olay:[t]`, `ekKartBagliMi` bugünkü hâliyle okuyor.

---

## ④ 🔴 GÖRÜNMESİ İÇİN ÜÇ DEĞİŞİKLİK — `js/app.js`, sahibi KITA 12

Ölçüldü: yükleyici yalnız iki dosya çekiyor, türlerin hepsi `window.EKOKUMA/MERAK/ANTLASMALAR`'a bakıyor, `ekKartHtml` tanımadığı türde yalnız `baslik/ozet/metin/kisa/not/bag/aciklama` döküyor. **Üçü birlikte inmezse kart görünmez.**

**①** `ekOkumaMerakYukle` (≈ app.js:6503-6505), liste ve sayaç:
```js
var _ekDosyalar = [["data/ekokuma.js", "EKOKUMA"], ["data/merak.js", "MERAK"],
                   ["data/ekokuma_savas.js", "EKOKUMA_SAVAS"]];
var kalan = _ekDosyalar.length;
// ... _ekDosyalar.forEach(function (pair) { ... })   (gövde AYNI)
```
**②** `EKOKUMA_TUR` (≈ app.js:6524-6585), bir satır:
```js
"savas-hikayesi":  { etiket: "⚔️ Savaşın Hikâyesi", kaynak: function () { return window.EKOKUMA_SAVAS || []; } },
```
**③** `ekKartHtml`: `else if (!k.tur && (k.ozet || k.topraklar))` dalının **önüne**:
```js
} else if (k.tur === "savas-hikayesi") {
  h += "<h4>" + ekEsc(k.baslik) + "</h4>";
  if (k.tarih_metin || k.yer)
    h += '<p class="ek-alt">' + ekEsc([k.tarih_metin, k.yer].filter(Boolean).join(" · ")) + "</p>";
  (k.taraflar || []).forEach(function (t) {
    h += '<p class="ek-alt"><b>' + ekEsc(t.ad) + "</b>" +
         (t.komutan ? " — " + ekEsc(t.komutan) : "") +
         (t.kuvvet ? " · " + ekEsc(t.kuvvet) : "") + "</p>";
  });
  [["oncesi", "Öncesi"], ["akis", "Muharebe"], ["sonuc", "Sonuç ve etkisi"],
   ["tartisma", "Kaynaklar nerede ayrışıyor"]].forEach(function (b) {
    if (k[b[0]]) h += "<p><b>" + b[1] + ":</b> " + ekEsc(k[b[0]]) + "</p>";
  });
```

---

## ⑤ 🔴 YAYIN KAPISI — ölçüldü, ve ilk hükmüm YANLIŞTI

`arac/denetle_yayin.py` bu dosyayı **İKİ ayrı denetimde** soruyor ve ikisinin ağırlığı farklı:

| Denetim | Ne basar | Çıkış kodu 1'e bağlı mı |
|---|---|---|
| `cizilmiyor_mu()` (§40) | ⚠️ *ÜRETİLİYOR AMA ÇİZİLMİYOR*: önce "app.js OKUMUYOR", bağlanınca da "index.html YÜKLEMİYOR" | 🟢 **HAYIR**, yalnız uyarı |
| `kayitsiz` (yetim veri dosyası) | ✗ *ne index.html ne girdi.py okuyor* | 🔴 **EVET**, `SONUÇ: İHLAL VAR — çıkış kodu 1` |

🔴 **Bu belgenin ilk yazımı *"yayını DURDURMAZ"* diyordu**, çünkü yalnız birinci denetimi okumuştum. İkincisi `data/` altındaki **her** `.js`'i `index.html` · motor girdisi · `BEKLEYEN` · `EMEKLI` · `ARA_CIKTI` kümelerine karşı sınıyor. Tembel yüklenen bir dosya bu kümelerin hiçbirinde değilse **yetim** sayılıyor.

⇒ **`data/ekokuma_savas.js` bugün yazılırsa yayın kapısı düşer.** Zincir ~19 saat sonra `git add -A -- data` ile yayınlarken bu dosya kapıya takılır.

🟢 **ÇARE, iki satır, `denetle_yayin.py` koordinatörün, DOKUNMADIM:**
```python
# ARA_CIKTI  (emsal: "data/ekokuma.js": "index.html:125 — tembel yukleme, ayni mekanizma")
"data/ekokuma_savas.js": "tembel yükleme — ekOkumaMerakYukle() çeker (KITA 20, 0045/H-0007)",
# CIZILMEYEN_MUAF  (yalnız §40 gürültüsünü susturur, kapıyı etkilemez)
"EKOKUMA_SAVAS": "tembel yüklenen ek okuma kartları — ekokuma.js ile aynı mekanizma",
```
⇒ **Bu satırlar inene kadar kartlar `data/`ya YAZILMADI.** Taslak:
`denetim/TASLAK-EKOKUMA-SAVAS-KITA20-0913.js` (kapının taradığı `data/` dışında). Satır inince **birebir aynı içerik** `data/ekokuma_savas.js` olur.

📌 `§11` D007'nin (*"denetim var ≠ o soruyu soruyor"*) **ters yüzü**: burada iki denetim aynı dosyayı soruyor ve **birini ölçüp hüküm vermek** yetmedi. Hüküm, **çıkış kodunu belirleyen koşul satırı** okunduktan sonra verildi.

### 🔴 VE KAPI ZATEN KIRMIZI — sorun benim dosyamdan büyük (13 Eylül, taban ölçümü)

`py arac/denetle_yayin.py` bugünkü hâliyle, **dosyam yazılmadan**:
```
SONUÇ: İHLAL VAR — çıkış kodu 1
✗ yetim veri dosyası: 5 / 314
     data/ekokuma_antlasma2.js     ┐
     data/ekokuma_edebiyat.js      │ 4'ü paket 0045'in KARDEŞ tür dosyaları
     data/ekokuma_magazin.js       │ — aynı kural (data/ekokuma_<tur>.js),
     data/ekokuma_mimari.js        ┘   aynı sebep
     data/gorsel_madde.js
(ayrıca: git'te izlenmeyen 1 · damga artışı · YAYIN BAYAT — koşu 10 sürüyor · üretim izi bayat 6)
```
⇒ **Şartnamelerin kendisi bu ✗'yi üretiyor.** `ORTAK-0045 §③` her türe `data/ekokuma_<tur>.js` veriyor, kapının yetim denetimi o deseni tanımıyor. Tek tek `ARA_CIKTI` satırı her yeni tür için aynı ✗'yi tekrarlatır (kapının kendi yorumu `YER_YAMA_*` için bunu zaten ölçmüş: *"her yeni yama kapıyı öttürür"*).

🟢 **ÖNERİ, desen muafiyeti, ama KANITA bağlı** (`_ARA_DESENLER`'deki `yer_yama` emsaliyle aynı yapı):
```
desen   ^data/ekokuma_[a-z0-9_]+\.js$
kanıt   dosyanın ADI js/app.js'teki ekOkumaMerakYukle yükleyici listesinde GEÇİYOR
        → geçmiyorsa muafiyet YOK, yetim diye öter (bağlanmamış tür dosyası = gerçek kusur)
```
⚠️ Kanıtsız bir desen tersini yapar: app.js'e hiç bağlanmamış bir tür dosyasını da susturur ve kartlar sessizce görünmez kalır (`ekokuma_sh104` 1 Eylül'den beri böyle bekliyor).

---

## ⑥ ÖLÇÜLMÜŞ SINIRLAR

- **Bağlama yalnız TARİHE bakıyor.** Kart, çekirdekte aynı `t`'yi taşıyan **her** maddede çıkar. 14 bağ tarihinden yalnız biri paylaşılıyor: `1517-01-22` → Ridâniye kartı *"Süveyş'in alınışı"* maddesinde de görünecek (konuyla bağlı, zararsız).
- **Çekirdekte 4 savaş maddesi ay hassasiyetli** (`Preveze 1538-09` · `Çaldıran 1514-08` · `Mercidabık 1516-08` · `Niğbolu 1396-09`), `gun:` alanları gün veriyor (§8). Kart o biçimi birebir taşıyor. Madde bir gün `YYYY-MM-DD`'ye düzeltilirse **kartın düğmesi sessizce kaybolur**. Düzeltmeyi yapan, `data/ekokuma_savas.js`'i de güncellemeli.
- **Kuyruk (`kronoloji*.js`) maddelerinde düğme çıkmaz:** `ekOkumaButonlariGuncelle` yalnız çekirdek özet penceresinden çağrılıyor (app.js:6477).
