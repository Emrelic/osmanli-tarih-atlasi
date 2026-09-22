# 2S-YER-TARAMA Raporu (19 Eylül 2026)

Bu çalışma, **Değişmez 2s** yabancı devlet kırılmalarının senkronizasyonunda "sahte kapanışları" ölçmek ve sınıflandırmak amacıyla yapılmıştır. Değişmez 2s kontrolü, her yabancı kırılması için ±30 gün içinde herhangi bir kronoloji maddesi varsa kırılmayı "kapalı" saymakta, ancak o maddenin o yerleşimle gerçekten alakalı olup olmadığını sorgulamamaktayız.

## Sayım Özeti

Toplam ölçülen kapalı yabancı kırılması (settlement transition) sayısı: **7926**.

Sınıflandırma dağılımı:
- **YER-ESLESIR**: **2526**
- **DEVLET-ESLESIR**: **2639**
- **SAHTE**: **2761**

*Not: Mankup 1349 (bizans -> teodoro) transition kaydı listede **SAHTE** olarak başarıyla sınıflandırılmıştır (beklenen davranış).*

## Metodoloji ve Bulgular

1. **YER-ESLESIR**: Kırılmayı kapatan madde(ler)de yerleşim adı, alternatif isimleri, merkezi (`m:` alanı) ya da bağlı olduğu coğrafi bölge (`bolgeler.js`) geçmektedir.
2. **DEVLET-ESLESIR**: Yerleşim ya da bölge geçmemekte, ancak kırılan iki taraftan en az biri (eski veya yeni sahip) maddede anılmaktadır. Genel/omnipresent devletler (`bizans` ve `osmanli`) her yerde geçebildikleri için gürültü yaratmamaları amacıyla devlet eşleşmesinde muaf tutulmuşlardır. Bu muafiyet sayesinde **Mankup 1349** (Mora Despotluğu'nun kuruluşu maddesiyle kapatılıyordu ve o maddede "Bizans" geçiyordu) doğru şekilde **SAHTE** sınıfına düşmüştür.
3. **SAHTE**: Ne yerleşim ne bölge ne de (generik olmayan) ilgili devletlerin hiçbiri maddede anılmamaktadır.

SAHTE ve DEVLET-ESLESIR olan tüm kayıtlar detaylarıyla birlikte `gemini/2S-YER-TARAMA-0919.json` dosyasına kaydedilmiştir.
