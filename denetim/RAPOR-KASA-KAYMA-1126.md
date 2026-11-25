# KASA → EMRELİC 26 KASIM (genel koordinatör) · 26 Kasım 2026, 00:07

## 1. Çeviri "id↔metin kayması" sınaması
Ölçüm yeri: KASA, `kasa-tur4-1125` ağacı (fb58d663e). Bu ağaç main'i (831f6dc8) içerir; üstünde tur 4 (Türkçe metin denetimi + 21 dil TR1125 yeniden çevirisi) vardır.

**Sonuç: mevcut 21 dilde kayma BULUNMADI (0 doğrulanmış kayma).**

### ① Eski ↔ yeni karşılaştırması (bu gece değişen her alan)
- Taban 6f7be826 (denetim turlarından önce). Kapsanan: a7074ae1, ba268233, 24bca150, 831f6dc8 turları (yayında) + tur 4 (kapıda).
- Türler: olay (b, d), arayüz, devlet adı; 21 dil. Değişen alan: **30.362**.
- Yöntem: yeni metin kendi eski hâline benzemeli; benzemiyor ama başka kaydın eski metnine benziyorsa kayma adayı (karakter üçlüsü örtüşmesi). 25 karakterden kısa alanlar bu karşılaştırmaya GİRMEDİ (sayısı ayrıca ölçülmedi).
- İki yönlü sınav (yapay kaydırma, 20'şer alan): en/olay 19/20 · zh/olay 20/20 · ar/devlet 18/20 yakalandı.
- Aday: **11**; hepsi yan yana okundu → hepsi yanlış alarm (aynı kaydın harf çevrimi ya da tarih kalıbı).
- Kendine benzerliği düşük 564 alan (çoğu bg devlet/olay ve ja olay: harf çevrimi): hiçbirinde kayma imzası yok; **hepsi tek tek okunmadı**.

### ② Bütün olay kayıtları (21 dil × 5.196)
- Belirtiler: TR↔çeviri sayı uyumu (yerel rakamlar normalleştirildi, 3+ haneli), aynı çevirinin farklı Türkçeli iki kayıtta durması, uzunluk oranı sapması, özel ad kaybı (yalnız Latin yazılı 11 dil), ardışık şüpheli seri (kaynak sırası ve alfabe sırası).
- Kopya metin: 0. Güçlü sayı adayı: 3 ayrı kayıt (yanlış alarm: "100.000" eşleşmesi). En uzun ardışık seri 4; seriler okundu, sıra doğru. Uzunluk sapmaları okundu, meşru.
- Sayısı olan kayıt dil başına 3.421 / 5.196; kalanı yalnız uzunluk ve (Latin dillerde) özel ad belirtisiyle sınandı.
- İki yönlü sınav: 30 kayıtlık yapay blokta en 13, zh 10, de 13 işaretlendi (öncesinde 0-1). Tek kayıt yakalaması ~%40 ⇒ on ve üstü kayıtlık blok kaymanın tümüyle kaçması pek olası değil; **tekil kayma kaçabilir**.
- Tekil uyarılar (kayma imzası taşımayan sayı uyumsuzluğu ve özel ad) tek tek okunmadı.

### Sınanmayanlar
- Bu geceden ÖNCE yaratılmış arayüz ve devlet adı çevirilerinin kendisi (yalnız bu geceki değişiklikleri ① ile ölçüldü).
- Yeni 10 dil (kapıda değil, bakılmadı).
- Ek okuma çevirisi dalları (kapıya alınmıyor).

Betikler: `denetim/KAYMA-1126/kayma.py`, `eski_yeni.py`, `incele.py` (bu dalda). UMIT'in yeni diller için aynı betiklerle bakması önerilir.

## 2. Tur 4 kapısının durumu (00:07)
- Kapı 00:05'te başladı; şu an statik sayfa üretimi adımında. `denetle` / `denetle_yayin` HENÜZ KOŞMADI. Tahmini sonuç ~00:40.
- İçerik: turkce-metin-1125 + 21 dil TR1125 yeniden çevirisi (41 iş, atlanan 0; ozet_tazele sonrası b özeti 21 dilde elle geri alındı) + borç satırı + ikinci göz öneri dosyaları (uygulanmadı).
- Kapıdan önce: `ceviri.py denetim` 0.
- Sırada: postit-kaynak-195 (49fa86a6a). postit-194b origin'de YOK. Ek okuma ve yeni dil veri dalları kapıya alınmayacak.

## 3. Ek okuma kartları (kapıda değil; 25 Kasım 23:52 sayımı)
9 devlet, 125 kart, 39 kişi, 21 hükümdar (dallar ekokuma-<devlet>-1126). Erişim yöntemi yüzünden "yayın adayı değil": 37 kart, 14 kişi, 12 hükümdar. Kalanı yalnız ajan beyanıyla teyitli.
