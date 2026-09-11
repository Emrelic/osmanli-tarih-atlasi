# KUYRUK KAYNAK — `data/kronoloji_*.js`'teki `kaynak:` sağlığı

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (KUYRUK KAYNAK)

Kapsam: 42 dosya, hepsi `index.html`'e bağlı (canlı), 4839 madde, 4855 `kaynak:` alanı.

---

## ① ÖNGÖRÜ (D022, ölçümden önce tahtaya yazıldı)

Evreni sayarken görüldü ki kuyruktaki `kaynak:` alanlarının çoğu çekirdek gibi
çıplak TDV slug değil — ağırlık YER/KİŞİ/HANEDAN tipi (215/234, %92). Çekirdeğin
2 Eylül ölçümünde bu sınıf %2 ölü çıkmıştı ⇒ **tahmin: %3-8 arası düşük bir
ölüm oranı.**

**Sonuç:** yön doğruydu, büyüklük yanlış çıktı — ama sebebi ilginç (§④'e bakın).

---

## ② EVREN — kuyruğun `kaynak:` alanı çekirdekten YAPISAL OLARAK FARKLI

```
4855 kaynak: alanı, 42 dosya
  648  "bulunamadı" — kendi beyanı, TDV'de yok diyor (checklist dışı, DAMGA)
   71  iç çapraz referans (devletler.js/savaslar.js künyesi, TDV slug değil)
 2258  harici akademik alıntı (Whaley, Davies, Metcalf, Riasanovsky...) — TDV
       değil, checklist dışı
  127  belirsiz serbest metin (çoğu iç çapraz referansın uzun biçimi)
  234  GERÇEK TDV SLUG DENEMESİ — kontrol edilebilir evren
```

⚠️ **Bu sayı çekirdeğin 553'üyle KARŞILAŞTIRILAMAZ** — iki ölçüm farklı
şeyi sayıyor. Çekirdek muhtemelen `kaynak:` alanını hep çıplak slug olarak
kullanıyordu; kuyruk `kaynak:` alanını bir **kaynakça cümlesi** gibi
kullanıyor (slug + açıklama + bazen ikinci bir akademik referans). Bu,
kuyruğun daha **az** denetlendiği anlamına gelmiyor — tam tersi, `§4`'ün
*"kaynak bulunamıyorsa açıkça yaz"* ve *"harici akademik kaynak kabul
edilir, adıyla yazılır"* kurallarına kuyruğun çekirdekten daha SIKI
uyduğunun bir işareti olabilir (648 tane dürüst "bulunamadı" + 2258 tane
adıyla yazılmış akademik atıf, gizlenen yok).

234'ün 2'si de aslında slug değil, elendi:
- `el-kitabi` — `kronoloji_bizans.js:46-53`'te **dokümante edilmiş dahili
  damga** ("TDV'nin Bizans iç tarihini kapsamadığı maddeler, dayanak
  standart akademik eserler, sayfa sayfa çekilmedi"), TDV'de arama
  YAPILMASI beklenmiyor.
- `veri` — sınıflandırıcı yanlış-pozitifi, Türkçe "veri" kelimesi bir
  iç-referans öneki ("veri (data/yerlesimler_ek.js, ...)"), slug değil.

**Düzeltilmiş evren: 232.**

---

## ③ HTTP ÖLÇÜMÜ — ham sonuç

```
CANLI (200)   209
ÖLÜ   (302)    25
```
(İki slug — `azak`, `gucerat` — ilk turda ağ zaman aşımına uğradı, yeniden
denendi, ikisi de 200. Kova sayıları yukarıda düzeltilmiş hâlleriyle.)

**Ham ölüm oranı: 25/234 ≈ %10.7 — öngörünün üstünde.**

---

## ④ 🔴 VE BURADA BİR DESEN ÇIKTI — 25'in 14'ü VERİ KUSURU, TDV KUSURU DEĞİL

25 ölü sluğun **14'ü** `"tdv-"` öneki taşıyor: `tdv-kudus`, `tdv-kibris`,
`tdv-malatya`, `tdv-vakif`, vb. Önek atılınca **14'ü de** (`kudus`,
`kibris`, `malatya`, `vakif`, ...) **200 dönüyor.**

```
kaynak:"tdv-kudus"   → 302  ✗
kaynak:"kudus"       →  200  ✓
```

**Bu 14 slug TEK BİR DOSYADA toplanmış: `data/kronoloji_memluk.js`**, 19
madde bu önekli biçimi taşıyor (bazı sluglar birden fazla maddede
tekrarlanıyor). Bu, dünyanın herhangi bir yerine dağılmış rastgele bir
kusur değil — **tek dosyaya lokalize, tek bir yazım konvansiyonu
hatası** (muhtemelen bir oturum `kaynak:` alanına slug yazarken "TDV
`X`" biçimindeki kendi notunu birebir kopyalamış). Düzeltmesi mekanik:
`data/kronoloji_memluk.js`'teki `kaynak:"tdv-<X>"` → `kaynak:"<X>"`
(dosya `arac/**`/`data/**` donuk olduğu için BEN dokunmadım — koordinatöre
devrediyorum).

⇒ **Bu düzeltme sonrası gerçek kalıcı ölü sayısı: 25 − 14 = 9.**

---

## ⑤ KALAN 9 GERÇEK ÖLÜ — 8'i için alternatif adres BULUNDU (madde başına ≤2 deneme)

| ölü slug | alternatif (kapsayıcı madde) | sonuç |
|---|---|---|
| `belgrad-antlasmalari` | `belgrad` | 🟢 200 |
| `bukres-antlasmasi` | `bukres` | 🟢 200 |
| `cildir-savasi` | `cildir-eyaleti` | 🟢 200 (CLAUDE.md'de zaten bilinen) |
| `ferhad-pasa-antlasmasi` | `luristan` | 🟢 (CLAUDE.md'de zaten bilinen — TDV'de "İstanbul antlaşması" adıyla geçiyor) |
| `firuz-sah` | `firuz-sah-tugluk` | 🟢 200 |
| `isfahan--iran` | `isfahan` | 🟢 200 (`--iran` soneki gereksiz/yanlış) |
| `kasr-i-sirin-antlasmasi` | `murad-iv` | 🟢 200 (CLAUDE.md'nin kendi §4 örneği) |
| `kirim-hanligi` | `kirim` | 🟢 200 (evrende zaten canlı) |
| `kirim-savasi` | `kirim-harbi`, `kirim-savasi--devlet` (2 deneme) | 🔴 **bulunamadı** |

**Kalıcı, alternatifsiz ölü: yalnız 1/232 (`kirim-savasi`, Kırım Savaşı 1853-56).**

⚠️ **Not — `kirim-hanligi` ve `isfahan--iran` için özel uyarı:** bu iki
sluğun kaynak notu kendisi *"doğrulanmış"* / *"HTTP doğrulandı"* diyor
(`kronoloji_rusya.js:464`, `kronoloji_iran.js:177`) ama BUGÜN ikisi de
302 dönüyor. Ya doğrulama yapıldıktan SONRA TDV site yapısı değişti, ya
da doğrulama o zaman da yanlıştı — hangisi olduğunu bu ölçüm ayırt
edemiyor, yalnız BUGÜNKÜ durumu bildiriyor.

---

## ⑥ CANLI (200) ÖRNEKLEM DENETİMİ — "200" ≠ "doğru madde"

12 kısa/genel-terim görünümlü slug (`berid`, `hisbe`, `ikta`, `hidiv`,
`taun`, `pamuk`, `surre`, `dirhem`, `esrefi`, `karimi`, `ulucami`, `func`)
için `<title>` çekildi — bunlar `ordu`/`saray`/`cin` tipi çarpışmaya en
müsait görünen adaylardı (genel kavram/terim sözlükçe kelimeleri).

**Sonuç: 12/12 başlık sluğuyla birebir eşleşiyor, çarpışma YOK.**

⚠️ Ama bu **bir örneklem**, 209'un tamamı değil. `200` kovası bu yüzden
**"temiz" değil "ölçülemedi (tam)"** diye raporlanıyor — brifingin kendi
uyarısına sadık kalarak.

---

## ⑦ TÜR-BAZLI KARŞILAŞTIRMA — çekirdekle örtüşme

Kaba blend yerine TÜRE göre karşılaştırma (`D116`/`D127` gereği — tek
sayıya indirmek kusuru gizler):

```
                     çekirdek (2 Eylül)      kuyruk (bu ölçüm)
SAVAŞ/ANTLAŞMA       %28-48                  %31,6  (6/19)
YER/KİŞİ/DEVLET       %2                     %1,4   (3/215)
```

**İki bağımsız ölçüm, aynı iki türde, birbirine çok yakın oran veriyor.**
Bu, projenin TDV kapsama deseninin (olay/savaş/antlaşma az kapsanıyor, yer/
kişi/devlet neredeyse tam kapsanıyor) hem çekirdekte hem kuyrukta
**tutarlı** olduğunu gösteriyor — kuyruk "daha az denetlenmiş" değil,
**aynı yapısal kısıtı** taşıyor.

---

## ⑧ SONUÇ SAYILARI

```
234  gerçek TDV slug denemesi evreni (232 düzeltilmiş)
209  canlı (200) — 12'lik örneklemde başlık çarpışması YOK
 25  ham ölü (302)
   → 14  VERİ KUSURU (tdv- öneği), tek dosyada (kronoloji_memluk.js, 19 madde),
         önek atılınca HEPSİ canlı — DÜZELTİLEBİLİR
   →  9  gerçek ölü
      → 8  alternatif adres (kapsayıcı madde) BULUNDU
      → 1  bulunamadı (kirim-savasi)

KALICI ölüm oranı: 1/232 ≈ %0,4
```

## ⑨ ÖNERİLEN İZLEYEN İŞ (koordinatöre, ben dokunmadım — `data/**` donuk)

1. `data/kronoloji_memluk.js`'teki 19 maddedeki `kaynak:"tdv-<X>"` →
   `kaynak:"<X>"` (mekanik, 14 farklı slug).
2. 8 madde için `kaynak:` alanına alternatif adres eklensin (§⑤ tablosu).
3. `kirim-savasi` (Kırım Savaşı) maddesi kalıcı `bulunamadı` — yeni bir
   arama turu ya da akademik kaynağa geçiş gerekebilir.
