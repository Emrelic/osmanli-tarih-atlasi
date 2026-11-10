# İŞGAL desen katmanı ölçümü (F-ADIMI-1108, salt ölçüm)

Taban `f360e5395` (koşu 35) · `data/devirler.js` sha256 `492a0952…` · betik `f_isgal.py` (yeniden koşulur: `py denetim/F-ADIMI-1108/f_isgal.py --etiket kosuNN`).

**Yöntem.** İşgal sahiplik değiştirmez; haritada `window.ISGALLER` taralı örtüsü olarak çizilir (js/app.js `isgalDesenleriKur`).
Bu yüzden BÜTÜN `isg:` dönemleri (680 dönem = 1360 uç, 288 örtü kaydı) örnek almadan ölçüldü: dönem başlangıç günü `f`'de
yerleşim koordinatı o işgalcinin örtüsünün içinde mi ve `f-1`de değil mi; bitişte (`t`) tersi. Gövde dışıysa 4 km yakınlık yedeği.
EVET = gün doğru açılıp kapanıyor · KAYMA = ±3 gün · SÜREKLİ = aynı işgalcinin ardışık dönemi (örtü kesintisiz, beklenen) · YOK = nedenli.

**Sonuç (1360 uç):** EVET **1232 (%90,6)** · SÜREKLİ **114 (%8,4)** · KAYMA 0 · YOK **14 (%1,0)** · ÖLÇÜLEMEDİ 0.
Yani işgal tabakasında harita ile veri tutarlı: ölçülebilir uçların %99'u doğru günde açılıp kapanıyor.
(Önceki gövde-ölçüsünün "%4 EVET" değeri ölçü uyuşmazlığıydı; bu ölçü doğru katmanı ölçer.)

| işgalci | EVET | SÜREKLİ | YOK |
|---|---|---|---|
| ingiltere | 226 | 114 (Mısır: 1882–1914-12-18 işgali, aynı gün 1914-12-18→1922 işgaline bağlanıyor) | 2 |
| rusya | 317 | – | 3 |
| fransa-cumhuriyet 138 · almanya 86 · bulgaristan-krallığı 56 · italya 54 · avusturya 52 · rusya-geçici-hükümet 24 | tümü EVET | | 0 |
| yunanistan | 126 | – | 2 |
| sirbistan-krallığı / yugoslavya / macaristan-habsburg | 34/22/29 | – | 2/2/1 |
| bosna-isgal | – | – | 2 |

**14 YOK uç, 7 yerleşim (düzeltme adayı, düzeltilmedi):**
1. Versec (4 uç: sirbistan-krallığı 1918-11-14→12-01, yugoslavya 1918-12-01→1920-06-04) — nokta işgalcinin hiçbir örtüsünde değil (peteği örtüye girmemiş).
2. Fornoz/Fourni (2 uç: yunanistan 1912-07-17, 1923-07-24) — aynı neden.
3. Fokşani (3 uç: rusya 1789-08-01, 1792-01-09, 1806-11-30) — nokta rusya örtüsünde ama o dönem penceresinde örtü yok (örtü başka aralıkla üretilmiş).
4. Tellülkebîr, Îmbâbe (2 uç: ingiltere bitiş 1923-10-29) — nokta örtüde ama o pencerede örtü yok.
5. Blagay (2 uç: bosna-isgal 1878-07-29→1908-10-05) — ISGALLER'de `bosna-isgal` kimliği hiç yok (örtü üretilmemiş).
6. Orsova/Eski Orsova (1 uç: macaristan-habsburg 1790-04-16) — örtü açık ama gün uyuşmuyor.

**Sınırlar.** (1) Nokta koordinatında, örtünün tamamında değil. (2) Ölçülen yalnız örtünün AÇILIŞ/KAPANIŞ günü; örtünün renk/desen çizimi (`isgalDesenleriKur`) ve tarayıcıda görünürlüğü
ölçülmedi. (3) Bu ölçü veri→üretilmiş örtü sadakatidir; maddeyle (kronoloji) eşlemesi ayrı (Değişmez 2 çiftleri için koşu 34/35 Ölçüm 1 işgal satırı bu ölçüyle okunmaz).
(4) Koşu 34 `devirler.js`i ayrıca ölçülmedi, karşılaştırma yok.
