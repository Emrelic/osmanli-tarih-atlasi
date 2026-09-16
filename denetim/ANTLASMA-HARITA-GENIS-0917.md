# D-GEOARAC — antlaşma aletinin 400 maddeye genişletilmesi · DALGA-0058 · 17 Eylül 2026

Görev (1.MURAT, tahta M-4195 sonrası): `ARAC-ANTLASMA-HARITA-0916.py`nin yalnız 41 kayıtlık
`ANTLASMALAR` dizisini işleyen yöntemini `data/olaylar*.js` + `kronoloji*.js` içindeki
~400-500 "antlaşma/barış" başlıklı maddeye genişletmek.

## Sonuç — düşük ama GERÇEK verim, iki yanlış başlangıç ölçüldü

```
antlaşma/barış-anahtarlı madde         504
Osmanlı'yla ilgisiz (elendi)           385
taraf çıkarılamadı (kalan 119'un)       69
eşleşme yok                             47
GERÇEK YENİ eşleşme                      3
```

**Bu düşük sayı bir alet arızası değil, KORPUSUN YAPISI.** İki yanlış başlangıç ölçüldü,
ikisi de raporlanıyor çünkü ders taşıyor:

1. **Süzgeçsiz deneme** → 343/504 "taraf çıkarılamadı". Sebep: `kronoloji_almanya.js`,
   `kronoloji_fransa.js` gibi KOMŞU ÜLKE dosyaları o ülkenin KENDİ antlaşmalarını da taşıyor
   (Utrecht, Prag Barışı, Frankfurt…) — Osmanlı'yla hiç ilgisi yok, "antlaşma" kelimesi
   geçtiği için yanlışlıkla tarandı.
2. **"Gövdede Osmanlı/Türk geçmeli" süzgeci** → 493/504 elendi (DAHA KÖTÜ). Sebep:
   `data/olaylar*.js` (ÇEKİRDEK Osmanlı kronolojisi) maddeleri Osmanlı'yı ÖZNE olarak
   SUSAR — "Avusturya'yla barış yapıldı" der, "Osmanlı Avusturya'yla" demez. Kelime araması
   burada da yanlış sinyal verdi.
3. **Doğru ayrım — kaynak DOSYA TÜRÜNDEN geliyor, gövde metninden değil:** `olaylar*.js`
   zaten Osmanlı merkezli (dosyanın KENDİSİ bunu garanti eder, CLAUDE.md §5), yalnız
   `kronoloji_*.js` (komşu ülke tarihleri) için gövdede Osmanlı/Türk sözcüğü arandı.

## 🔴 Asıl yapısal bulgu: iyi bilinen antlaşmaların gövdesi BAŞLIK'tan ibaret

69 "taraf çıkarılamadı" kaydın önemli bir kısmı **zaten ANTLASMALAR'da olan** aynı 41
antlaşmanın `data/olaylar.js`teki KISA kronoloji satırı: "Amasya Antlaşması", "Zitvatorok
Antlaşması", "Karlofça Antlaşması — ilk büyük toprak kaybı", "Lozan Antlaşması"… Bu
satırların gövdesi yalnız BAŞLIK — taraf isimleri yok, çünkü ayrıntı zaten ayrı bir yapıda
(`ANTLASMALAR` dizisinin `taraf`/`topraklar` alanlarında) duruyor. **Bu bir eksiklik değil**
— bu kayıtlar için doğru kaynak zaten `ARAC-ANTLASMA-HARITA-0916.py`nin işlediği ANTLASMALAR,
tekrar üretilmesine gerek yok (D023'ün "aynı veriyi iki kere üretme" ilkesinin bir başka
yüzü). Kalan kısmı ise GERÇEKTEN Osmanlı'yla ilgisiz ama filtreden geçen genel Avrupa
antlaşmaları (Nystad, Stolbova, Andrusovo, İkinci Thorn, Kiel, Türkmençay) — bunlar
`olaylar_ek16.js`/`kronoloji_iran.js` gibi dosyalarda BAĞLAM için duruyor, Osmanlı taraf
değil.

## 3 GERÇEK yeni bulgu (ANTLASMALAR'da OLMAYAN, daha önce hiç işlenmemiş)

| Antlaşma | Tarih | Taraf | Eşleşen yerleşim | Gün farkı |
|---|---|---|---|---|
| Ayastefanos (San Stefano) | 1878-03-03 | Bulgaristan Prensliği | Sofya (osmanlı→bulgaristan) | -58 |
| Ankara İtilâfnâmesi | 1921-10-20 | Fransa Cumhuriyeti | Mersin (fransa→tbmm-türkiye) | **0 (tam gün)** |
| II. Murad-Bizans barışı | 1424-02-22 | Bizans | Aynaroz/Athos (bizans→osmanlı) | -52 |

Ankara İtilâfnâmesi kaydı özellikle güçlü: yerleşim devir tarihi antlaşma tarihiyle **tam
aynı gün**. Bu üçü `data/antlasma_haritalari.js`ye eklenebilir — YAZMADIM, 1.MURAT/D-KATMAN
onayı gerekiyor (aynı D-KATMAN'ın Pasarofça turunda Ayamavra'yı elediği gibi, bunlar da
tek tek gözden geçirilmeli).

## Pasarofça (öncelikli madde) — zaten TAMAMLANMIŞ bulundu

`data/antlasma_haritalari.js`teki `pasarofca-1718` kaydını D-KATMAN benim BİR ÖNCEKİ
turumun çıktısını (`_ANTLASMA-HARITA-CIKTI-0916.json`) kullanarak ZATEN üretmiş (commit
2b71273) — Habsburg'a Belgrad/Banat/Küçük Eflak/Kuzey Sırbistan, Osmanlı'da kalan Mora,
Venedik'te kalan Preveze/Çuha/Vonitsa, hepsi kaynaklı. D-KATMAN ayrıca benim ürettiğim
şüpheli bir eşleşmeyi (Ayamavra) kendi ölçümüyle eleyip haklı çıkardı (M-4190). **Bu madde
için yeni bir iş YAPMADIM** — zaten tamam, tekrar üretmek D023 ihlali olurdu.

## Sıradaki iş (yapılmadı, kapsam dışı bırakıldı)

- 3 yeni bulgunun `data/antlasma_haritalari.js`ye eklenmesi — 1.MURAT/D-KATMAN kararı.
- ANTLASMALAR'ın taraf/topraklar bilgisini `data/olaylar.js`teki KARŞILIK GELEN kısa
  maddeye (başlık eşleştirmesiyle) bağlayıp aynı bilgiyi iki kez üretmeden köprü kurmak —
  yapılabilir ama bu turun kapsamı dışında bırakıldı.
- ~380 elenen "Osmanlı'yla ilgisiz" maddenin TEK TEK doğrulanması yapılmadı — dosya-türü
  ayrımına güvenildi, örneklem taramasıyla (yukarıdaki liste) doğrulandı, tam tarama değil.

## Dosyalar

`denetim/ARAC-ANTLASMA-HARITA-GENIS-0917.py` (üretim betiği, `ARAC-EKOKUMA-BASLIK-0916.py`nin
yorum-temizleyicisini import ediyor, D023) · `denetim/_ANTLASMA-HARITA-GENIS-CIKTI-0917.json`
(ham çıktı, 504 madde) · bu rapor.
