# KITA 12 — ARAYÜZ · paket 0044

AD: KITA 12 · MODEL: mevcut · DİZİN: proje kökü · ClaudEmre: evet
**Önce oku:** `oturumlar/ORTAK-KOSU10-KURALLARI.md` (dondurma + tahta protokolü)

**Dosyan:** `js/app.js` · `css/style.css` (ikisi de SERBEST, tek sahip sensin)
`index.html` satırı gerekirse BİLDİR, koordinatör ekler.

## ① SEFER OKU — SEÇENEK B'Yİ UYGULA (H-0003 · H-0007 · H-0008)
Emre bunu artık **dokuz kez** istedi (0043'te üç, 0044'te üç + H-0008'de
*"her kronoloji maddesinde ordu seferinin güzergâhını gösterelim"*).
Senin ölçümün (M-3620, `denetim/OLCUM-SEFER-KIRPMA-0912.md`) kararı verdi:
```
MEVCUT (çapa=ti)   41/72 kırpılıyor · 6.480 gün · Katalan OK
A (çapa=fi)         0/72 · 0 gün · Katalan 🔴 REGRESE  -> ELENDİ (D029)
B (oransal)        41/72 · 3.861 gün (-%40) · Katalan OK -> REGRESYONSUZ
```
🟢 **KOORDİNATÖR KARARI: B UYGULANIR.** Gerekçe: ölçülmüş olarak mevcuttan
kesin iyi, orijinal vakayı (4163ebe · H-0004 Katalan Kumpanyası) bozmuyor,
geri alınabilir, ve `js/` koşu sırasında serbest. Emre'ye bildirildi;
itiraz ederse geri alınır.
- Uygula · Katalan negatif testini YENİDEN koştur (bozulmamalı)
- ÖNCE/SONRA ekran görüntüsü: Mohaç 1526 · Viyana 1529 · Irakeyn 1534
- 🔴 KIRPMAYI KALDIRMA — yalnız formül (D012)
- **C (ilerleyici ok)** için ayrı fiyat: kaç satır, hangi risk, ne kazandırır

## ② H-0015 · "tarihe git" düğmesinin SAĞINDAKİ yapı ne?
Görsel `H-0015-1.png`. Emre: *"tarihi yazınca gidiyor ama sağındaki yapıya
basınca hiçbir şey çıkmıyor."* Kodu oku: o eleman NE, ne YAPMASI gerekiyor,
NİÇİN bir şey çıkmıyor — kusur mu, tasarım mı? Kusursa düzelt.

## ③ H-0016 · "oto" düğmesinin fonksiyonu — AYRINTILI anlat
Görsel `H-0016-1.png`. Kodu oku, Emre'ye düz Türkçe bir açıklama yaz
(`denetim/ARAYUZ-DUGMELER-0913.md`): ne yapar, hangi durumda, hangi hızla.

## ④ H-0018 · olay mahallinde YANIP SÖNEN HALKA
Emre: *"kronolojide bahsedilen olayların haritadaki yerleri yuvarlak ile
yanıp sönmeli."* Görsel `H-0018-1.png` — görselde halka ZATEN görünüyor mu?
🔴 **D045 önce:** bu altyapı var mı (`yer_id` vurgusu, pulse, marker)?
Varsa neden bu maddede çalışmıyor; yoksa prototip + ekran görüntüsü.

## ⑤ H-0004 · VASSAL GÖSTERİMİ — "yeşil iç, kırmızı ince şerit"
Emre'nin önerisi: tâbi toprağın iç rengi kendi rengi (Macaristan yeşil),
**kenarında Osmanlı kırmızısı ince şerit.** Görsel `H-0004-1.png`.
🔴 **D045 önce:** `00652fc` "vassal etiket katmanı" ve `VASSAL-GORUNUM-0907`
var — bugün `v:` toprak nasıl çiziliyor? Sonra şerit prototipi, varsayılan
davranış olarak, ÖNCE/SONRA ekran görüntüsüyle.
⚠️ §9: palet verinin fonksiyonudur — şerit iki devletin rengini
yakınlaştırırsa `py arac/renk_olc.py` ile sına.
⚠️ *"Budin kırmızı normal mi"* sorusu VERİ sorusu — KITA 19'da. Sen çizimi yap.

**Sıra:** ① (en çok tekrar eden) → ②③ (kısa) → ④ → ⑤
TESLİM TAHTAYA, kalem kalem. Görsel doğrulama için ekran görüntüsü şart.
