# LAB-8A-BIRLESME-1006 — birleşme yönü (−n), ve +970'in DÜZELTİLMESİ

**Tek satır −n üst sınırı:** tek bir etiket şehrinin karşı yakadan çıkması **646 senaryoda −1** verir (309 grupta). Bunların **622'sinde sayılan alan BİREBİR korunur**: taşma aynıyken sayaç düşer, yani **gizleme kesin**. Teorik tavan, her grubun tek anahtara çökmesiyle **−834** (1509 anahtar − 675 grup).
**Ve kendi düzeltmem:** `LAB-8A-KIRILGANLIK`teki **+970 FAZLA SAYILMIŞ**. Grup düzeyinde net +n **+250**.

**Gövde:** `2fe8ada77`, site damgalı geometri (`0ef2d3e2`). Araç: scratchpad klonunda `denetle.py` KOPYASI (tek kayıt satırı), ölçüm sonrası silindi; `arac/` dokunulmadı, klon temiz.
**Kopya doğrulaması:** grup düzeyinde yeniden sayım **1509 = sayaç** (99d3eacc8'de 1508 = sayaç).
**Yöntem:** birim `(hat, gün, yan)` **GRUBU**dur. Anahtarlar o grup içinde etiketle ayrılır. Her senaryoda grubun bütün parçaları D8 ile birebir (lon/lat düzlemi) yeniden etiketlenir, ≥5 km² alan alan etiketler sayılır, Δ = sonra − önce. Liste: `LAB-8A-BIRLESME-1006.tsv` (2787 satır).

## +970 niçin yanlıştı

`KIRILGANLIK` her anahtarı **tek başına** ele aldı: etiket şehri çıkınca örneklerin gittiği her "ikinci en yakın" etiketi **YENİ anahtar** saydı. Ama o etiket **aynı grupta çoğu zaman zaten var**. Örnekler mevcut bir anahtara katılır: bu **bölünme değil BİRLEŞMEDİR**. Yani önceki ölçüm −n'yi +n olarak saymıştı. Bu, bugün iki kez görülen "toplayıcının kendi tanımını okumamak" ailesinin **üçüncü** vakası ve yine benim işimde.

## ① Ölçüm

### Sınama (iki yöntemde de tutuyor)
`99d3eacc8` grup yöntemiyle: `d1920-hu-ro-fiili|1920-03-31|sag` Lugos çıkışı → **1 → 2 (+1), alan 1692 = 1692**. `8b95eeb63`te gerçekleşen bu. ✓

### ÇIKIŞ: grubun her etiket şehri karşı yaka ağacından çıkarılır (1509 senaryo)

| Δ | senaryo |
|---|---|
| **−1** | **646** (309 grup) |
| 0 | 664 |
| +1 | 152 |
| +2 | 43 |
| +3 | 4 |

- **+n toplam +250 · −n toplam −646.** Bu hareket türünde sayaç ezici çoğunlukla **düşer**.
- **Alan, −1 senaryolarında:** 622/646'da sayılan alan **birebir aynı**. 24'ünde eşik etkisiyle küçük fark (toplam −88 km²). ⇒ **Gerçek bir taşma büyümesiyle aynı anda olursa sayaç onu yutar.** Koordinatörün "yanlış susar" kolu ölçüldü ve büyük.

### GİRİŞ: o gün ağaçta olmayan yakın yerleşim ağaca girer (gruba ≤3° kutu; yalnız anahtar kümesini değiştirenler, 1278 senaryo)

| Δ | senaryo |
|---|---|
| −2 | 2 |
| −1 | 23 (6 grup) |
| 0 (yalnız etiket takası; Saarbrücken türü) | 280 |
| +1 | 973 |

- Girişte birleşme **seyrek** (25 senaryo). Örnek: Lugos'un hu-ro grubuna geri girmesi Orsova + Tırgu Jiu'yu tekrar tek anahtara indirir (−1); Mohaç (hu-yu-hırvatistan), Varna/Şumnu/Silistre (bg-ro Dobruca, −2'ye kadar).
- Girişin ağırlığı **+1** yönünde (973): yeni bir yakın şehir çoğu zaman bir parçanın bir kısmını kapar ve ≥5 km²'lik yeni etiket doğar.

### Bugün zaten gizli olan
**128 parça** (1637 ham − 1509 sayaç) bugün mevcut bir anahtarın içinde: sayaçta görünmüyor. Yeni bir taşma parçası mevcut bir etiket şehrinin menziline düşerse sayaca **0** ekler. Bu ölçülmüş bir varlık, senaryo değil.

## ③ Koordinatörün sorusuna cevap

*"Tavan gerçek bir taşma artışını etiket birleşmesiyle yutabiliyor mu?"* **Evet, ölçüldü:**
- tek etiket çıkışı 646 senaryoda −1, 622'sinde alan korunarak;
- bugün 128 parça zaten sayaçta görünmüyor;
- teorik tavan −834.

Sayaç iki yönde de geometriden bağımsız oynuyor: ÇIKIŞ'ta +250 / −646, GİRİŞ'te +973 / −27.

## ② Bulamadım

- Senaryoların **gerçekçilik** ağırlığı (hangi etiket şehrinin `s:` zinciri gerçekten oynak).
- Eşzamanlı hareketler (iki şehir birden): Δ'lar toplanabilir değil, ölçülmedi.
- Etiket şehrinin TAŞINMASI (koordinat düzeltmesi), ve GİRİŞ'te 3° kutu dışındaki adaylar.
- Eşik duyarlılık eğrisi (kuyrukta).
