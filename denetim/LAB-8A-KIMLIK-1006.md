# LAB-8A-KIMLIK-1006 — 8a 1508 → 1509: hangi birim, hangi commit

**Tek satır hüküm:** +1'i **Lugos (Lugoj) kaydının `s:` düzeltmesi** üretti: `8b95eeb63` (BANAT-TRIANON + LUGOS İNDİ). **Hanak değil.** Hanak'ın 6 birimi `600e2d00`da da `2fe8ada7`de de birebir aynı.

**Gövde/geometri:** site damgalı ESKİ geometri sabit (`devletler_harita.js` sha `0ef2d3e2…` = `__DP_SHA`, `uret_petek 8b6aaea5`). Bu aralıkta değişmeyenler: D8 kodu (`denetle.py` diff'inde D8 bölümüne hunk yok), `d_sinirlar*`, `bolgeler.js`, `DEGISMEZ-0086-defter.json`. Yalnız girdi verisi değişti.
**Yöntem:** her commit'in KENDİ `denetle.py`si ile `degismez8()` + `d8_sayac()` doğrudan çağrıldı (salt okunur, defter `yaz=False`). Sayı tam denetimle aynı (2fe8: 1509, 600e: 1508). Commit başına ~1 dk. Liste: `LAB-8A-KIMLIK-1006.tsv`.

## (a) Yeni birim Hanak mı? HAYIR

| | 600e2d00 | 2fe8ada7 |
|---|---|---|
| 8a | 1508 | 1509 |
| Hanak birimleri | 6 | **aynı 6** |
| GİREN | | `d1918-fr-de-isgal\|1918-11-11\|sol\|Saarbrücken` · `d1920-hu-ro-fiili\|1920-03-31\|sag\|Orsova (Eski Orsova)` · `d1920-hu-ro-fiili\|1920-03-31\|sag\|Tırgu Jiu` |
| ÇIKAN | | `d1918-fr-de-isgal\|1918-11-11\|sol\|Trier` · `d1920-hu-ro-fiili\|1920-03-31\|sag\|Lugos (Lugoj)` |

**UMIT kapısının "8a YENİ … Hanak" satırı neden yanıltıcı:** o satır `ic − defter["a"]` farkını basıyor, yani **defterin yazıldığı eski ölçüme** göre yeni olanı. `600e2d00`a göre değil. `d1829-osm-rus-1|1829-09-14|sol|Hanak` defterde yok ama 600e2d00'da zaten vardı. Bu farkın sıralı listesindeki **ilk satır** olduğu için göze çarpıyor (Posof · Gümrü · Şeyhrumi aynı listede).

## (b) Hangi commit? İkili arama, ilk-ebeveyn zinciri üzerinde

| Adım | 8a | Fark |
|---|---|---|
| 600e2d00 → d1e93ef36 | 1508 → 1508 | — |
| d1e93ef36 → **b48276ac7** (SAARBRÜCKEN NOKTASI) | 1508 → 1508 | Trier ÇIKTI, Saarbrücken GİRDİ (aynı hat, 63 km). **Etiket takası, net 0** |
| b48276ac7 → 99d3eacc8 | 1508 → 1508 | — |
| 99d3eacc8 → **8b95eeb63** (BANAT-TRIANON + LUGOS) | 1508 → **1509** | Lugos ÇIKTI, Orsova + Tırgu Jiu GİRDİ. **Net +1** |
| 8b95eeb63 → 2fe8ada7 | 1509 → 1509 | — |

- Her iki commit **tekil** (tek ebeveyn). Merge tuzağı bu sefer yok, ama ayrıca ölçüldü: aradaki merge'ler katkı vermiyor.
- **Dosya ayrıştırması** (kopyada `99d3eacc8` + 8b95eeb63'ün dosyaları gruplar hâlinde):

  | Grup | 8a |
  |---|---|
  | `data/yerlesimler.js` yalnız | **1509** |
  | `olaylar_ek16` + `olaylar_ok109` | 1508 |
  | `yerlesimler_a78_avrupa` (Klagenfurt) + `yerlesimler_ek24` (Mustafapaşa) | 1508 |

  ⇒ `yerlesimler.js`te bu commit'in değiştirdiği **tek kayıt Lugos**.
- **Lugos'un değişikliği:** `s:` `romanya-kralligi 1918-01-01..` → `macaristan-habsburg ..1918-11-11` · `macaristan-naiplik 1918-11-11..1920-06-04` (Trianon) · `romanya 1920-06-04..`. Ayrıca `isg: romanya 1919-07-22..1920-06-04` eklendi.

## Mekanizma: ölçülen ve ölçülemeyen

- D8'in birim etiketi (`yer`), 2 km ızgaradaki her örneğe o gün **karşı tarafın en yakın yerleşimini** atayan bir **atıf dizininden** gelir. Dizin yalnız `s:`/`d:`/`v:` okur, **`isg:` OKUMAZ** (kodda yazılı: "DE JURE, isg: HARİÇ").
- 1920-03-31'de Lugos artık de jure `macaristan-naiplik`; Romanya atıf ağacından çıktı. Aynı hat-gün-yanda Lugos'a yazılan 612 km²'lik birimin yerini **114 km'deki Orsova (612 km²)** ve **129 km'deki Tırgu Jiu (1080 km²)** aldı.
- ⚠️ **Toplam alan da değişti: 612 → 1692 km² (+1080).** Saf bir "etiket bölünmesi" alanı korurdu; korumamış. Tırgu Jiu'nun 1080 km²'sinin önceden niçin sayılmadığını (eşik altı mı, başka bir etikete mi gidiyordu) **ölçmedim** ⇒ ölçülemedi.
- ❌ **Geçersiz sınamamı da yazıyorum:** `isg:`'yi sayan bir varyantı kopyada bellekte denedim (`_d8_sahip` değiştirildi). Sonuç değişmedi (1509). Ama bu bir çürütme DEĞİL: kodu okuyunca etiketin `_d8_sahip`ten değil ayrı atıf dizininden geldiği çıktı, yani yamam ilgili yola hiç dokunmamış. "isg sayılsa da olurdu" sonucu ÇIKARILMAZ.

## Koordinatörün iki cümlesine düzeltme

1. *"sebep VERİDİR, bayat gövde değil"*: ikilik eksik. Ölçülen şey **eski geometri × yeni veri**. Geometri Lugos'un ESKİ kaydıyla (1918 Romanya) üretildi; atıf ise YENİ kaydı (1920-06-04'e kadar Macaristan) kullanıyor. +1'i veri değişikliği tetikledi, ama ölçüm bu iki gövdenin karışımında yapıldı.
2. *"Yeni geometri bunu kaldırmayacak"*: **kanıtlanmadı.** KOŞU 21 Lugos'u yeni kaydıyla çizecek. Taşma alanı ve etiketi değişebilir. Doğru hüküm: **koşu sonrası yeni geometriyle yeniden ölç**, sonucu önceden yazma.

## ② Bulamadım

- Tırgu Jiu'nun +1080 km²'sinin kaynağı.
- Lugos'un `macaristan-naiplik` dönemi D8'in "fiili" hattıyla (`d1920-hu-ro-fiili`, Paris hattı) aynı gün ölçülüyor. De jure atıf × fiili hat, tasarımsal bir kategori karşılaştırması mı, yoksa kusur mu: bu bir yöntem sorusu, cevaplamadım.

---
> 🔴 **DÜZELTME (LAB-8A-ALAN-1006):** Yukarıdaki *"Toplam alan da değişti: 612 → 1692 km²"* cümlesi **YANLIŞ** ve hata benim betiğimdeydi: ayrıntı sözlüğü aynı anahtarlı ikinci parçanın (Lugos 1080 km²) üzerine yazdı. Ham parça listesi: ÖNCE Lugos 612 + Lugos 1080, SONRA Orsova 612 + Tırgu Jiu 1080. **Alan sabit (1692 = 1692), evren toplamı sabit (1 895 260 km², 1637 parça).** +1 yalnız etiket bölünmesi. Ayrıntı: `LAB-8A-ALAN-1006.md`.
